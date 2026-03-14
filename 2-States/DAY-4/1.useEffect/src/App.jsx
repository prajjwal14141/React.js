import  { useEffect, useState } from 'react'

const App = () => {

  const [val,setVal]=useState(0);

  useEffect(()=>{
    console.log('useEffect called');
    document.title=`increment ${val}`;
  }, [val]);      //only val variable enabled to fire/call useEffect.Any other state variable wont fire this useEffect unless included in dependency array.


  return (
    <div>{val}
      <button onClick={()=>setVal(val+1)}>+1</button>
      <button onClick={()=>setVal(val+2)}>+2</button>
      <button onClick={()=>setVal(val+3)}>+3</button>
      <hr />
      

    </div>
  )
}

export default App;