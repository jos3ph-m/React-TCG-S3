# Section 3 - Understanding the Base Features & Syntax

---

## The Build Workflow

##### Why use a React build workflow?:

- Optimize Code
- Use Next-Gen JavaScript features (ES6 v ES5)
- Be More Productive

##### How?

- Use a dependency management tool (npm, yarn, deno)
- Use a bundler (Max recommends Webpack) because we want to write modular code that can be bundled when we ship
- Use a compiler (Babel + Presets) - this can be hooked into the webpack config
- Use a development server to test our app locally on our machine

---

## Using Create React App

With Node.js installed:

```console
npm install create-react-app -g
create-react-app my-app
cd my-app
npm start
```
