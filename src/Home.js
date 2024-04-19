import { BsArrowLeftRight } from "react-icons/bs";

const Home = ({ dayValue, monthValue, yearValue, setDayValue, setMonthValue, setYearValue, handleDayChange,handleMonthChange, handleYearChange }) => {
    return (
        <main className="flex justify-center text-center bg-gray-200 pt-[12%] h-[100vh]">
            <section className="bg-white p-8 w-1/2 shadow-sm rounded-br-2xl mx-56">
                {/* inputs for calculator */}
                <section class="flex flex-row justify-center space-x-8 mb-10 w-full">
                    <div class="flex flex-col space-y-2">
                        <label for="day" class="uppercase flex justify-start">Day</label>
                        <input 
                            type="number" 
                            name="day" 
                            placeholder="DD. eg 18" 
                            class="h-12 w-full px-1 border-black border-2 rounded-md" 
                            id="days"
                            value={dayValue}
                            onChange={(e) => setDayValue(e.target.value)}
                        />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="Month" class="uppercase flex justify-start">Month</label>
                        <input 
                            type="number" 
                            name="day" 
                            placeholder="MN. eg 01" 
                            class="h-12 w-full px-1 border-black border-2 rounded-md" 
                            id="months"
                            value={monthValue}
                            onChange={(e) => setMonthValue(e.target.value)}
                        />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="year" class="uppercase flex justify-start">Year</label>
                        <input 
                            type="number" 
                            name="day" 
                            placeholder="YR. eg 2014" 
                            class="h-12 w-full px-1 border-black border-2 rounded-md" 
                            id="years"
                            value={yearValue}
                            onChange={(e) => setYearValue(e.target.value)}
                        />
                    </div>
                </section>

                {/* button for calculating */}
                <section class="mx-12 flex flex-row justify-end space-x-80">
                    <div>
                        
                    </div>
                    <div>
                        <button type="button" name="calculate" onclick="getData()">
                            <BsArrowLeftRight className="text-4xl text-sky-400"/>
                        </button>
                    </div>
                </section>

                {/* showing outputs of calculator */}
                <section class="flex flex-col justify-center mt-16 text-sky-600 text-3xl">
                    <div>
                        <span id="showDays">Days</span>
                    </div>
                    <div>
                        <span id="showMonths">Months</span>
                    </div>
                    <div>
                        <span id="showYears">Years</span>
                    </div>
                    
                </section>
            </section>

        </main>
    );
}

export default Home;