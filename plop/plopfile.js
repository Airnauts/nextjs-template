module.exports = (plop) => {
  plop.setGenerator('context', {
    description: 'Create a context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/contexts/{{pascalCase name}}/index.ts',
        templateFile: './context/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/contexts/{{pascalCase name}}/{{pascalCase name}}.types.tsx',
        templateFile: './context/types.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/contexts/{{pascalCase name}}/{{pascalCase name}}.context.tsx',
        templateFile: './context/context.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/contexts/{{pascalCase name}}/{{pascalCase name}}.reducer.tsx',
        templateFile: './context/reducer.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/contexts/{{pascalCase name}}/{{pascalCase name}}.hooks.tsx',
        templateFile: './context/hooks.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
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

      switch (data.type) {
        case 'atom':
          path = '../src/components/atoms/';
          break;
        case 'molecule':
          path = '../src/components/molecules/';
          break;
        case 'organism':
          path = '../src/components/organisms/';
          break;
        case 'module':
          path = '../src/components/modules/';
          break;
        case 'template':
          path = '../src/components/templates/';
          break;
        case 'util':
          path = '../src/components/utils/';
          break;
        case 'layout':
          path = '../src/components/layouts/';
          break;
        case 'page':
          path = '../src/components/pages/';
          break;
        default:
          path = '../src/components/';
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
