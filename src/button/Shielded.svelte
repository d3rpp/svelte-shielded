<script>
	import { onMount } from 'svelte';

	let initialised = false;

	let frame;

	function init() {
		if (document.getElementById('#shielded-modal')) return false;

		const body = document.body;

		const closeImage = document.createElement('img');
		closeImage.style =
			'display: block; margin: 0 auto; width: 50px; height: 35px;  cursor: pointer;';
		closeImage.src = 'https://staticcdn.co.nz/embed/close.png';
		closeImage.alt = 'close shielded';

		const frameCloseButton = document.createElement('a');
		frameCloseButton.href = '#';
		frameCloseButton.id = 'frame-close';
		frameCloseButton.appendChild(closeImage);
		frameCloseButton.addEventListener('click', handleClose);

		const iframe = document.createElement('iframe');
		iframe.sandbox =
			'allow-forms allow-scripts allow-same-origin allow-popups';
		iframe.src = 'https://staticcdn.co.nz/';
		iframe.width = 310;
		iframe.height = 420;
		iframe.style =
			'opacity: .98; width:310px; height:420px; max-height:100%';

		// apparently deprecated
		iframe.setAttribute('frameborder', '0');

		const frameCover = document.createElement('div');
		frameCover.id = 'frame-cover';
		frameCover.style =
			'width:310px; height:453px; left:50%; margin-left: -155px; position: fixed; line-height: 0; max-height:100%;';
		frameCover.appendChild(iframe);
		frameCover.appendChild(frameCloseButton);

		const container = document.createElement('div');
		container.id = 'shielded-modal';
		container.style =
			'display:none; overflow: auto;  position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999; -webkit-overflow-scrolling: touch; background: rgba(0,0,0,0.5); zoom: 1;';

		container.appendChild(frameCover);
		body.appendChild(container);
	}

	function handleOpen(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
		if (!initialised) return;
		// frame is already open
		if (frame.getAttribute('open') == 'true') return;

		frame.style.display = 'block';
		frame.setAttribute('open', 'true');
		document.body.style.overflow = 'hidden';
	}

	function handleClose(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
		if (frame.getAttribute('open') == 'false') return;
		document.body.removeAttribute('style');
		frame.setAttribute('open', 'false');
		frame.style.display = 'none';
	}

	onMount(() => {
		init();
		frame = document.getElementById('shielded-modal');
		initialised = true;
	});
</script>

<svg
	height="32"
	viewBox="0 0 192 192"
	width="32"
	alt="shielded"
	on:click={handleOpen}
	xmlns="http://www.w3.org/2000/svg"
>
	<title>Women's Refuge</title>
	<circle cx="96" cy="96" fill="#445e5c" r="96" />
	<circle cx="96" cy="95" fill="#fff" r="87" />
	<path d="m96 11a84 84 0 0 0 0 168z" fill="#445e5c" />
	<g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3">
		<path
			d="m96 50.5h-48a2.5 2.5 0 0 0 -2.5 2.5v70a2.5 2.5 0 0 0 2.5 2.5h48"
			stroke-dasharray="6"
		/>
		<path
			d="m99.76 135.5h-43a2 2 0 0 0 -1.76 1.11l-4 8a2 2 0 0 0 .08 1.94c.37.6 1 .95 3.71.95h44.79"
			stroke-dasharray="7 6"
		/>
	</g>
	<g fill="none" stroke="#445e5c">
		<path
			d="m96 52h47a1 1 0 0 1 1 1v70a1 1 0 0 1 -1 1h-47"
			stroke-width="6"
		/>
		<path
			d="m96 135.5h39a2 2 0 0 1 1.79 1.11l4 8a2 2 0 0 1 -1.79 2.89h-43"
			stroke-width="3"
		/>
		<path
			d="m96 141h43m-37-5v5m8.5-5 .5 5m8-5 1 5m7-5 4 11"
			stroke-width="2"
		/>
	</g>
</svg>
