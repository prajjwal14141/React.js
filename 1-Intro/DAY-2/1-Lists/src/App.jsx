const App = () => {
  const list=[1,2,3,4,5];

  return(
    <div>
      {list.map( val => (
        <ul key={val}>
          <li>
            {val}
          </li>
        </ul>
        
      ))}
      <hr />
    </div>
  )
}

export default App;