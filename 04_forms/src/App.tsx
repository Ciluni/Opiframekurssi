import { useState } from 'react'
import Person from './models/Person'
import CompactForm from './components/CompactForm'

interface State {
  greeting:string;
}

function App() {
  

  const [state,setState] = useState<State>({
    greeting: "No greeting yet"
  })

  const setGreeting = (person:Person) => {
    let name = person.firstname+" "+person.lastname;
    setState({
      greeting:"Hello "+name
    })
  }

  return (
    <>
     <CompactForm setGreeting = {setGreeting}/>
     <h3>{state.greeting}</h3>
    
    </>
  )
}

export default App
