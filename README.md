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

---

## Components & JSX

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

---

## Props

Changes from OUTSIDE a component (data passed into component).

Prop names have to match ie:

```javascript
<Post title="My Post Title" />
```

The prop name is 'title' and the prop value is "My Post Title"

```javascript
<h1>{props.title}</h1>
```

They have to match!

Also consider the following:

```javascript
const person = (props) => {
  const { name, age } = props;
  return (
    <p className="person">
      my name is: {name} and my age is: {age}
    </p>
  );
};
```
