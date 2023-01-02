# Day 1 - Contents: 

* What are Hooks?; 
* `Hooks` are `special functions`, once they allow `Hook Functionality` to components of function; 
* State management with the `useState` Hook; 
* Manage the `life cycle` of the component with the `useEffect` Hook; 
* Rules of Hooks - Nomenclature - All `Hooks` start with the word `use`; 
* Rules of Hooks - A `Hook` can never be called inside an `if`, or within a `loop` or within a `nested function`; 
* Rules of Hooks - The `Hooks` need to be called at the `Top Level` (`Root`) of the `Component Functional` or within other `Hooks`; 
* Structure of `useState` - `const [counter, setCounter] = useState(0)`; 
* The `useEffect` hook is a function that can be used to manage the different moments of the `lifecycle`, similar to `Lifecycle Methods`; 
* Differently the `useState` Hook, the `useEffect` does not `return anything`; 
* To use the `useEffect` we pass two arguments, the first is a function(`callback`) and the second is optional, it must be an array(`array of dependencies`); 
* `useEffect` No Second Argument (Behavior Similar to `componentDidUpdate()`) - `useEffect(() => {});`; 
* `useEffect` with the Second Argument Being a `Array Empty` (Behavior Similar to `componentDidMount()`) - `useEffect(() => {}, []);`; 
* `useEffect` with the Second Argument Being a `Array with Items` - `useEffect(() => {}, [foo, bar, ...baz]);`; 
* `useEffect` with Callback returning a `function`(`function cleanup`) (Behavior Similar to `componentWillUnmount()`) - `useEffect(() => { return () => {}; }, []);`; 
* Whenever we need to `clean up` something created with `side effect` (like a `setInterval()` or `setTimeout()` we can use the `cleanup` function; 
