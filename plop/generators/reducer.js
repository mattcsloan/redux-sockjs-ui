module.exports = {
  description: 'redux reducer',
  prompts: [{
    type: 'input',
    name: 'name',
	  message: 'Please name your reducer (using PascalCase)',
  }],
  actions: [{
    type: 'add',
    path: 'src/reducers/{{name}}.js',
    templateFile: 'plop/templates/reducer/reducer.hbs',
  }, {
    type: 'add',
    path: 'src/reducers/{{name}}.test.js',
    templateFile: 'plop/templates/reducer/test.hbs',
  }],
};
