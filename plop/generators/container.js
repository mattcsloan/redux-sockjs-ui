module.exports = {
  description: 'react-redux container',
  prompts: [{
    type: 'input',
    name: 'name',
	  message: 'Please name your container (using PascalCase)',
  }, {
    type: 'input',
    name: 'component',
    message: 'What is the name of the wrapped component?',
  }],
  actions: [{
    type: 'add',
    path: 'src/containers/{{name}}/{{name}}.js',
    templateFile: 'plop/templates/container/container.hbs',
  }, {
    type : 'add',
    path: 'src/containers/{{name}}/index.js',
    templateFile: 'plop/templates/container/index.hbs',
  }, {
    type: 'add',
    path: 'src/containers/{{name}}/{{name}}.test.js',
    templateFile: 'plop/templates/container/test.hbs',
  }],
};
