//PARENT COMPONENT 

const App = () =>{
  return(
    <User 
      name = 'Abbc'
      age = {20}
      hobbies = {[
        "Gaming",
        "Music",
        "Chess",
        "Reading",
      ]}
      ismarried = {false}

    />
)};

//CHILD COMPONENT
const User = (props) =>{

  return(
    <main>
      <h1>Name : {props.name}</h1>
          age  : {props.age} <br />
          ismarried : {props.ismarried ? "YES" : "NO"} <br />
          hobbies : {
            props.hobbies.map(val=>(
              <ul key={val}>
                <li>
                  {val}
                </li>
              </ul>
            ))
          }

    </main>
  )
;};


export default App;