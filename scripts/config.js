const component = (name) => {
  return `"use client";
  
const ${name} = (props:${name}Props) => {
  return (
   
  );
};

export default ${name};
`;
};

const props = (name) => {
  return `export interface ${name}Props {}`;
};

const index = (name) => {
  return `export {default} from './${name}'`;
};

module.exports = {
  component,
  props,
  index,
};
