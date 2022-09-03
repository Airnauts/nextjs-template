module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "list",
        name: "type",
        message: "Select type of the component",
        choices: [
          "atom",
          "molecule",
          "organism",
          "module",
          "template",
          "util",
          "module",
        ],
      },
    ],
    actions: (data) => {
      let path = "";

      switch (data.type) {
        case "atom":
          path = "../src/components/atoms/";
          break;
        case "molecule":
          path = "../src/components/molecules/";
          break;
        case "organism":
          path = "../src/components/organisms/";
          break;
        case "module":
          path = "../src/components/layouts/";
          break;
        case "template":
          path = "../src/components/templates/";
          break;
        case "util":
          path = "../src/components/utils/";
          break;
        case "layout":
          path = "../src/components/layouts/";
          break;
        case "module":
          path = "../src/modules/";
          break;
      }

      let actions = [
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "./component/component.tsx.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/index.ts",
          templateFile: "./component/index.ts.hbs",
        },
        {
          type: "add",
          path: path + "{{pascalCase name}}/{{pascalCase name}}.types.ts",
          templateFile: "./component/types.ts.hbs",
        },
      ];
      return actions;
    },
  });
};
