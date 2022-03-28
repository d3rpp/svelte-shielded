const sveltePreprocess = require('svelte-preprocess');

// only here to stop vscode from complaining

module.exports = {
    preprocess: sveltePreprocess({
        scss: {
            prependData: "@import 'src/_palette.scss';\n@import 'src/_common_vars.scss';\n\n",
        },
    }),
};