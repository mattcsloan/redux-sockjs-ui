module.exports = {
  description: 'react component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Please name your component (using PascalCase)',
  }, {
    type: 'confirm',
    name: 'stateless',
    message: 'Is the component stateless?',
    default: true,
  }, {
    type: 'confirm',
    name: 'styles',
    message: 'Does the component need a stylesheet file?',
    default: true,
  }],
  actions: (data) => {
    const actions = [];

    if (data.stateless) {
      actions.push({
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile: 'plop/templates/component/stateless.hbs',
      });
    } else {
      actions.push({
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile: 'plop/templates/component/stateful.hbs',
      });
    }

    if (data.styles) {
      actions.push({
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.css',
        templateFile: 'plop/templates/component/styles.hbs',
      });
    }

    actions.push({
      type: 'add',
      path: 'src/components/{{name}}/index.js',
      templateFile: 'plop/templates/component/index.hbs',
    });

    actions.push({
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.test.js',
      templateFile: 'plop/templates/component/test.hbs',
    });

    return actions;
  },
};
