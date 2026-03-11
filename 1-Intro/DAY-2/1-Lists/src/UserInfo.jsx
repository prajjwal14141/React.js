const Info = () =>{
 
    const users = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    country: "USA"
  },
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    country: "India"
  },
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    country: "Canada"
  },
  {
    name: "Liam Brown",
    email: "liam.brown@example.com",
    country: "UK"
  },
  {
    name: "Sofia Martinez",
    email: "sofia.martinez@example.com",
    country: "Spain"
  },
  {
    name: "Noah Wilson",
    email: "noah.wilson@example.com",
    country: "Australia"
  },
  {
    name: "Yuki Tanaka",
    email: "yuki.tanaka@example.com",
    country: "Japan"
  },
  {
    name: "Lucas Müller",
    email: "lucas.muller@example.com",
    country: "Germany"
  }
];

    return (
        <main>
          {users.map(user => (
            <ul key={user.email}>
                <li>
                    Name:   {user.name}
                </li>
                <li>
                    Mail:   {user.email}
                </li>
                <li>
                    Nation: {user.country}
                </li>
            </ul>
          ))}  
        </main>
    )
}


export default Info;