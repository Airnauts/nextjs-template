module.exports = function (plop) {
  plop.setGenerator('air-context', {
    description: 'Air Context (complex state management)',
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

      if (data && data.module) {
        path = `../src/modules/${data.module}/contexts`;
      } else {
        path = `../src/contexts`;
      }

      return [
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/index.ts`,
          templateFile: './air-context/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.types.tsx`,
          templateFile: './air-context/types.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.context.tsx`,
          templateFile: './air-context/context.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.reducer.tsx`,
          templateFile: './air-context/reducer.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.hooks.tsx`,
          templateFile: './air-context/hooks.tsx.hbs',
        },
      ];
    },
  });
};
