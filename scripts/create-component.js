const fs = require("fs");
const prompts = require("prompts");
const { component, props, index } = require("./config");

const ToPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
    .join("");

const question = [
  {
    type: "text",
    name: "components",
    message: "What is your component named?",
  },
];

const createComponent = async (entry) => {
  const response = await prompts(question);

  if (!response.components) {
    throw new Error("Component name is required.");
  }

  const name = ToPascalCase(response.components);
  const directory = `${entry}/${name}`;

  fs.access(directory, (err) => {
    if (err) {
      fs.mkdir(directory, { recursive: true }, (e) => {
        if (e) {
          console.log(e);
        } else {
          fs.writeFileSync(`${directory}/types.ts`, props(name));
          fs.writeFileSync(`${directory}/${name}.tsx`, component(name));
          fs.writeFileSync(`${directory}/index.tsx`, index(name));
          console.log("Success! Component created.");
        }
      });
    } else {
      console.log("Given directory already exists.");
    }
  });
};

createComponent("./src/components");
