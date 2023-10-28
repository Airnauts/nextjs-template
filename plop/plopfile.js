module.exports = (plop) => {
  plop.setGenerator('context', {
    description: 'Create a context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Context name:',
      },
      {
        type: 'input',
        name: 'module',
        message: 'Module name (leave empty if context is common)',
      },
    ],
  actions: (data) => {
    let path = '';

    if (data.module) {
      path = `../src/modules/${data.module}/contexts`
    } else {
      path = `../src/contexts`
    }

      return [
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/index.ts`,
          templateFile: './context/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.types.tsx`,
          templateFile: './context/types.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.context.tsx`,
          templateFile: './context/context.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.reducer.tsx`,
          templateFile: './context/reducer.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.hooks.tsx`,
          templateFile: './context/hooks.tsx.hbs',
        },
      ]
    }
  });

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
      {
        type: 'input',
        name: 'module',
        message: 'Module name (leave empty if component is common):',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select type of the component',
        choices: ['atom', 'molecule', 'organism', 'module', 'util', 'template', 'layout', 'page'],
      },
      {
        type: 'confirm',
        name: 'storybook',
        message: 'Do you want to add storybook?',
        default: false,
      },
    ],
    actions: (data) => {
      let path = '';

      if (data.module) {
        path = `../src/modules/${data.module}/components`
      } else {
        path = `../src/components`
      }

      switch (data.type) {
        case 'atom':
          path = `${path}/atoms/`;
          break;
        case 'molecule':
          path = `${path}/molecules/`;
          break;
        case 'organism':
          path = `${path}/organisms/`;
          break;
        case 'module':
          path = `${path}/modules/`;
          break;
        case 'template':
          path = `${path}/templates/`;
          break;
        case 'util':
          path = `${path}/utils/`;
          break;
        case 'layout':
          path = `${path}/layouts/`;
          break;
        case 'page':
          path = `${path}/pages/`;
          break;
        default:
          path = `${path}/`;
          break;
      }

      let actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: `./component/component.tsx.hbs`,
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.ts',
          templateFile: `./component/index.ts.hbs`,
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.types.ts',
          templateFile: `./component/types.ts.hbs`,
        },
      ];

      if (data.storybook) {
        actions.push({
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: './component/stories.tsx.hbs',
        });
      }

      return actions;
    },
  });
};
