import { u as usedByBoth } from './used-by-both-0a1f8e7b.js';

var usedByA = {
	color: 'darkslategray',
	message: 'this is only used by the main-a.js entry point, so will be bundled with it'
};

import('./apply-color-and-message-be7fd8e5.js').then(({ default: apply }) => {
	apply('#a [data-used-by="a"]', usedByA);
	apply('#a [data-used-by="both"]', usedByBoth);
});
//# sourceMappingURL=main-a.js.map
