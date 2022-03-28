import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import rimraf from 'rimraf';

rimraf('./public/build', () => {
	console.log('RIMRAFFED');
});

const production = !process.env.ROLLUP_WATCH;

const cssHash = ({ hash, css, name, filename }) => {
	// console.log({ filename, name });
	return `d${hash(filename)}`;
};

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn(
				'npm',
				['run', 'preview', '--', '--dev'],
				{
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true,
				}
			);

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		},
	};
}

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
	// Module Mode, allows for lazy loading
	// if browser doesnt support modules, this will fail to load
	{
		input: 'src/main.js',
		output: {
			sourcemap: !production,
			format: 'iife',
			dir: 'public/build/',
			fileName: 'index.js',
			name: 'shielded',
		},
		preserveEntrySignatures: true,
		plugins: [
			svelte({
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production,
				},
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css({ output: 'bundle.css' }),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),

			,
			// In dev mode, call `npm run start` once
			// the bundle has been generated
			!production && serve(),

			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			!production && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production &&
				terser({
					format: {
						comments: false,
					},
					compress: {
						booleans_as_integers: true,
						passes: 2,
						unsafe_math: true,
					},
				}),
		],
		watch: {
			clearScreen: false,
		},
	},
];
