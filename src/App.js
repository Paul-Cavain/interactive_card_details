import Home from './Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState } from "react";

function App() {
  const [dayValue, setDayValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');

  const handleDayChange = (e) => {
    console.log("day submitted")
  }
  const handleMonthChange = () => {
    console.log("month submitted")
  }
  const handleYearChange = (e) => {
    const currentDate = new Date()
    const fullYear = currentDate.getFullYear()

    const bornedYear = () =>{
      
    }
    
  }
  console.log(handleYearChange())

  return(
    <section>
      <Navbar title={'Age Calculator'} />
      <Home 
        dayValue = {dayValue}
        monthValue = {monthValue}
        yearValue = {yearValue}
        setDayValue = {setDayValue}
        setMonthValue = {setMonthValue}
        setYearValue = {setYearValue}
        handleDayChange = {handleDayChange}
        handleMonthChange = {handleMonthChange}
        handleYearChange = {handleYearChange}
      />
      <Footer />
    </section>
  )
}
export default App