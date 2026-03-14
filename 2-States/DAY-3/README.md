###### Inline Styling
- Styling components directly inside JSX using JavaScript objects.
- Syntax: <h1 style={{color: "red"}}>Hello</h1>

###### USESTATE()
- useState is a React Hook used to add state to functional components.
- State allows components to store and update dynamic data.
- When state changes, React re-renders the component.
- state → current value, setState → function to update state, initialValue → starting value
- Example: const [count, setCount] = useState(0);

###### Portals
- Portal lets you render a component outside the normal DOM hierarchy of your React app, while it still behaves like part of the React component tree.

- React provides this through createPortal from the React API.