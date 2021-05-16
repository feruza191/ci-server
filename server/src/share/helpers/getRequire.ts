/* eslint-disable camelcase */
export const getRequire = () =>
	typeof __webpack_require__ === 'function'
		? __non_webpack_require__
		: require;
