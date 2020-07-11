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

Props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

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
<Person name="Shteve" age="43">
  My Hobbies: Racing
</Person>
```

```javascript
const person = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      <p className="person">
        I'm {name} and I'm {age}... I'm from the Person component and here I am
        generating a random number: {Math.floor(Math.random() * 100)}
      </p>
      <p>{children}</p>
    </div>
  );
};
```

---

## State

Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

Example:

```javascript
class NewPost extends Component {
  // state can only be accessed in class-based components!
  state = {
    counter: 1,
  };

  render() {
    // Needs to be implemented in class-based components! Needs to return some JSX!
    return <div>{this.state.counter}</div>;
  }
}
```

Here, the NewPost component contains state . Only class-based components can define and use state . You can of course pass the state down to functional components, but these then can't directly edit it.

state simply is a property of the component class, you have to call it state though - the name is not optional. You can then access it via this.state in your class JSX code (which you return in the required render() method).

Whenever state changes (taught over the next lectures), the component will re-render and reflect the new state. The difference to props is, that this happens within one and the same component - you don't receive new data (props ) from outside!
