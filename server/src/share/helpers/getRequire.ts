/* eslint-disable camelcase */
export const getRequire = (): typeof require =>
	typeof __webpack_require__ === 'function'
		? __non_webpack_require__
		: require;
