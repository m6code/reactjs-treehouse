# Learn React Track From TeamTreehouse

## 1. [React Basics](https://teamtreehouse.com/library/react-basics-2)
- [Download starter files here](http://treehouse-code-samples.s3.amazonaws.com/react-basics/scoreboard.zip)
- [Get complete project files here](https://treehouse-code-samples.s3.amazonaws.com/react-basics/1-first-steps-in-react.zip)

####  Binding Event handlers to components

  - [A] if the function is defined like so `de|incrementScore() {...}`
   	- add this to the class after the state `incrementScore = this.incrementScore.bind(this);`  // then refer to it in the button like this `{this.incrementScore}`
    - add this to the class after the state `decrementScore = this.decrementScore.bind(this);` // then refer to it in the button like this `{this.decrementScore}`
   	- OR
   	- call this directly on the button onClick method `{this.decrementScore.bind(this)}`
   	- OR
   	- use a call back function directly on the onClick method `{() => this.incrementScore()}`
   
  - [B] if the function is defined as arrow function
   	- directly bind it with a lexical this, i.e an arrow function when defining the method like so
   	- decrementScore = () => {...} and just reference it in the button's onClick like so `{this.decrementScore}`
    - incrementScore = () => {...} and just reference it in the button's onClick like so `{this.incrementScore}`


## 2. [React Components](https://teamtreehouse.com/library/react-components)
- Components is a function or class that optionally accepts input and renders a part of your UI.

- When two or more component require access to same state, move the state into their parent component (Unidirectional flow of data, from Parent -> Children -> GrandChildren). This is called lifting state up.

- React allows us use callback functions to allow a child change state of a parent.

- PureComponents help prevents unnecessary and wasteful renders when one component is updated and are used in class components

- When destructuring 
	- for functional component just pass the props like so
		- `const funcName = ({propsA, propsB, ...}) => {...}`
	- for class component assign the props to this.props inside the render() method before return like this
		- `const {propsA, propsB, ...} = this.props`
- Refs allow you access or interact with DOM nodes or React element created in the render method. making it possible to do the traditional DOM manipulation and access forms elements and get their values.
	- When to use controlled components or refs in forms
		- Controlled components have internal states and require functions to update state
		- Controlled compoents makes it easier to modify or validate user input or filter results based on user input in real time.
		- Controlled component with state calls render on every keystroke where as in refs render is only called once.
		- Use refs whenever you are building a form that requires few input and you don't need to keep track of every keystroke.
	- Refs are not limited to class components you can also create and use refs in funtional components
- Type Checking in react helps you catch a lot of errors in react during developement.
	- There a 3 ways to type check in React
		- PropTypes
		- TypeScript
		- Flow 
	- To get started 
		- install by running `npm install --save prop-types`
		- import proptypes in the component you wish to use it in `import  PropTypes from 'prop-types'`
		- PropTypes.array|bool|func|number|object|string|symbol. 
		- [Learn more about PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

## 3. [Using Create React App](https://teamtreehouse.com/library/using-create-react-app)

## 4. [React Context API](https://teamtreehouse.com/library/react-context-api)
- Context API provides a way to pass data down to components without having to pass props manually at every single level. Context helps us avoid prop drilling
- Context is mainly used when some part of the data needs to be accessed at different nesting level by many components
- It has 3 essential parts
 - React.createContext() : sets up a context and returns an object with a Provider and a Consumer.
 - Provider : is used as high a possible in the component tree. it allows a Consumer to subscribe to context changes.
 - Consumer : access the Provider to get any data they need.

## 5. [React Router 4 Basics](https://teamtreehouse.com/library/react-router-4-basics-2)
## 6. [Whats New in React 16](https://teamtreehouse.com/library/whats-new-in-react-16)
## 7. [Data Fetching in React](https://teamtreehouse.com/library/data-fetching-in-react)
## 8. [Deploying a React App](https://teamtreehouse.com/library/deploying-a-react-app)
## 9. [React by Example](https://teamtreehouse.com/library/react-by-example)
## 10. [React Authentication](https://teamtreehouse.com/library/react-authentication)
## 11. [Building Application with React and Redux](https://teamtreehouse.com/library/building-applications-with-react-and-redux)