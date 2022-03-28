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
