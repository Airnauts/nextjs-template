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
        choices: ['atom', 'molecule', 'organism', 'module', 'template', 'util', 'module', 'context'],
      },
    ],
    actions: (data) => {
      let path = '';
      let templatePath = 'component';

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
          break;
        case 'context':
          path = '../src/contexts/';
          templatePath = 'context';
          break;
      }

      let actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.ts',
          templateFile: `./${templatePath}/index.ts.hbs`,
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.types.ts',
          templateFile: `./${templatePath}/types.ts.hbs`,
        },
      ];

      if (data.type === 'context') {
        actions.push({
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.context.tsx',
          templateFile: `./${templatePath}/context.tsx.hbs`,
        });
        actions.push({
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.reducer.tsx',
          templateFile: `./${templatePath}/reducer.tsx.hbs`,
        });
        actions.push({
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.hooks.tsx',
          templateFile: `./${templatePath}/hooks.tsx.hbs`,
        });
      } else {
        actions.push({
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: `./${templatePath}/component.tsx.hbs`,
        });
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
