import Home from './Home'
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const handleNameChange = (e) =>{
    
  }

  return(
    <section>
      <Home 
        name = {name}
        setName = {setName}
        cardNumber = {cardNumber}
        setCardNumber = {setCardNumber}
        month = {month}
        setMonth = {setMonth}
        year = {year}
        setYear = {setYear}
        cvc = {cvc}
        setCvc = {setCvc}
        handleNameChange = {handleNameChange}

      />
    </section>
  )
}
export default App