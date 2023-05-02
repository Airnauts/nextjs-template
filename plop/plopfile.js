module.exports = (plop) => {
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
<<<<<<< HEAD
        choices: ['atom', 'molecule', 'organism', 'module', 'template', 'util', 'module'],
      },
      {
        type: 'confirm',
        name: 'storybook',
        message: 'Should this component have storybook?',
=======
        choices: ['atom', 'molecule', 'organism', 'module', 'template', 'util', 'module', 'context'],
>>>>>>> master
      },
    ],
    actions: (data) => {
      let path = '';
<<<<<<< HEAD
=======
      let templatePath = 'component';
>>>>>>> master

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
          path = '../src/components/layouts/';
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
        case 'module':
          path = '../src/modules/';
<<<<<<< HEAD
=======
          break;
        case 'context':
          path = '../src/contexts/';
          templatePath = 'context';
>>>>>>> master
          break;
      }

      let actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
<<<<<<< HEAD
          templateFile: './component/component.tsx.hbs',
=======
          templateFile: `./${templatePath}/component.tsx.hbs`,
>>>>>>> master
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.ts',
<<<<<<< HEAD
          templateFile: './component/index.ts.hbs',
=======
          templateFile: `./${templatePath}/index.ts.hbs`,
>>>>>>> master
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.types.ts',
<<<<<<< HEAD
          templateFile: './component/types.ts.hbs',
=======
          templateFile: `./${templatePath}/types.ts.hbs`,
>>>>>>> master
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
