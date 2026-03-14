import React, { useState } from 'react'
import Popup from './Popup';

const CopyInput = () => {
  const [input, setInput] = useState('');
  const [copy, isCopied] = useState(false);

  const handleCopy = () =>{
    navigator.clipboard.writeText(input).then(()=>{
      isCopied(true);
      setTimeout(()=>isCopied(false),6000);    //just for UI
    });
  }


  return (
    <div>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
      <Popup copy={copy}/>
    </div>
  )
}

export default CopyInput