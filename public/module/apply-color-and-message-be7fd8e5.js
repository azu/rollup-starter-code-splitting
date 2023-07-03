function $(selector) {
	return document.querySelector(selector);
}

function applyColorsAndMessage(selector, { color, message }) {
	const node = $(selector);
	node.style.backgroundColor = color;
	node.textContent = message;
}

export { applyColorsAndMessage as default };
//# sourceMappingURL=apply-color-and-message-be7fd8e5.js.map
