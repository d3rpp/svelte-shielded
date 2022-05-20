let frame;
let initialised = false;

export function init() {
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
	iframe.sandbox = 'allow-forms allow-scripts allow-same-origin allow-popups';
	iframe.src = 'https://staticcdn.co.nz/';
	iframe.width = 310;
	iframe.height = 420;
	iframe.style = 'opacity: .98; width:310px; height:420px; max-height:100%';

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

	frame = document.getElementById('shielded-modal');
	initialised = true;
}

export function handleOpen(e) {
	if (!initialised) init();

	e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
	if (!initialised) return;
	// frame is already open
	if (frame.getAttribute('open') == 'true') return;

	frame.style.display = 'block';
	frame.setAttribute('open', 'true');
	// document.body.style.overflow = 'hidden';
}

export function handleClose(e) {
	e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
	if (!initialised) return;
	if (frame.getAttribute('open') == 'false') return;
	// document.body.removeAttribute('style');
	frame.setAttribute('open', 'false');
	frame.style.display = 'none';
}
