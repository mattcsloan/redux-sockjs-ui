const { component, container, reducer, route } = require('./plop/generators');

module.exports = function (plop) {
	plop.setGenerator('component', component);
	plop.setGenerator('container', container);
	plop.setGenerator('reducer', reducer);
	plop.setGenerator('route', route);
};