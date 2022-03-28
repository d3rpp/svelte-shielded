<script>
	import { onMount } from 'svelte';

	export let top = 0;
	export let left = 300;

	/** @type string */
	const image =
		'data:image/png;base64,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';
	let initialised = false;

	let frame;

	function init() {
		if (document.getElementById('shielded-modal')) return false;

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
		e.preventDefault ? e.preventDefault() : (e.returnValue = !1);

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

<img
	src={image}
	alt="Shielded"
	on:click={handleOpen}
	style={`top:${top}px; left:${left}px;`}
/>

<style scoped>
	img {
		cursor: pointer;
		z-index: 99999;
		-webkit-transition: all 0.5s;
		transition: all 0.5s;
		position: fixed;

		max-width: 60px;
	}
</style>
