import { useState } from "react";

const App=()=>{

    const [count, setCount] = useState(0); 
    const [people, addPeople] = useState(['A', 'B']);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <hr />
            {people.map(f=>(
                <li key={f}>{f}</li>
            ))}
            <button onClick={()=>addPeople([...people, 'lorem2'])}>add People</button>
        </div>
    );
}

export default App;