import Home from './Home'
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  //split te cardNumber into four group
  const splitCardNumber = (cardNumber) => {
    if (!cardNumber) return ''; // Handle null or undefined
    return cardNumber.match(/.{1,4}/g).join(' ');
  }

  // validate name input to accept only string
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
        // Require value if empty
        setName('');
    } else if (/^[a-zA-Z\s]*$/.test(value)) {
        // Only accept alphabetic characters
        setName(value);
    } else {
        // Display error message for non-text input
        alert("Only text characters are allowed");
    }
  };

  // validate cardNumber to accept only numbers with limit of 16 integers
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
        // Require value if empty
        setCardNumber('');
        alert("Card number is required");
    } else if (/^\d{0,16}$/.test(value)) {
        // Only accept numbers with up to 16 digits
        setCardNumber(value);
    } 
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
        // Require value if empty
        setMonth('');
        alert("Month is required");
    } else if (/^\d{0,2}$/.test(value)) {
        // Only accept numbers with up to 2 digits
        setMonth(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
        // Require value if empty
        setYear('');
        alert("Year is required");
    } else if (/^\d{0,2}$/.test(value)) {
        // Only accept numbers with up to 2 digits
        setYear(value);
    }
  };
  const handleCvcChange = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
        // Require value if empty
        setCvc('');
        alert("CVC is required");
    } else if (/^\d{0,3}$/.test(value)) {
        // Only accept numbers with up to 3 digits
        setCvc(value);
    }
  };

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
        splitCardNumber = {splitCardNumber}
        handleNameChange  = {handleNameChange }
        handleCardNumberChange = {handleCardNumberChange}
        handleMonthChange = {handleMonthChange}
        handleYearChange = {handleYearChange}
        handleCvcChange = {handleCvcChange}
      />
    </section>
  )
}
export default App