import { BsCircleFill } from "react-icons/bs";

const Home = ({ name, cardNumber, month, year, cvc, setCvc, splitCardNumber, handleNameChange, handleCardNumberChange, handleMonthChange, handleYearChange, handleCvcChange }) => {
    
    return (
        <main className="flex flex-row justify-center text-center bg-white h-[100vh] w-full relative">
            {/* first vertical */}
            <section className="bg-gradient-to-r from-purple-700 from-10% via-pink-400 via-1% to-purple-700 to-4% w-[31%]">
            </section>

            {/* second vertical */}
            <section className="w-[69%] flex justify-center mt-44 pl-20">
                <form className="w-1/2 space-y-6">
                    <div className="flex flex-col text-start">
                        <label className="uppercase">card holder name</label>
                        <input 
                            type="text" 
                            name="name"
                            required 
                            placeholder="e.g. Sophia Joseph" 
                            className="rounded-md px-2 border-2 border-gray-200 h-12" 
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="flex flex-col text-start">
                        <label className="uppercase">card number</label>
                        <input 
                            type="number" 
                            name="cardNumbers" 
                            required
                            placeholder="e.g. 1234 5678 9123 0000" 
                            className="rounded-md px-2 border-2 border-gray-200 h-12"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                        />
                    </div>
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col text-start">
                            <label className="uppercase">exp.date (mm/yy)</label>
                            <div className="flex flex-row space-x-4">
                                <div>
                                    <input 
                                        type="number" 
                                        name="month" 
                                        placeholder="mm" 
                                        className="rounded-md px-2 border-2 border-gray-200 h-12 w-full uppercase"
                                        value={month}
                                        onChange={handleMonthChange} 
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="number" 
                                        name="year" 
                                        placeholder="yy" 
                                        className="rounded-md px-2 border-2 border-gray-200 h-12 w-full uppercase" 
                                        value={year}
                                        onChange={handleYearChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-start">
                            <label className="uppercase">cvc</label>
                            <input 
                                type="number" 
                                name="cvc" 
                                placeholder="e.g. 123" 
                                className="rounded-md px-2 border-2 border-gray-200 h-12" 
                                value={cvc}
                                onChange={handleCvcChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="h-12 w-full bg-gradient-to-r from-purple-700 from-10% via-pink-500 via-1% to-purple-700 to-4% rounded-md mt-6 text-white font-black" 
                            type="submit" 
                            name="submit">
                            Confirm
                        </button>
                    </div>
                </form>
            </section>

            <section className="absolute ml-[-40%] mt-24 w-[23%]">
                {/* first card */}
                <div className="bg-gradient-to-r from-blue-700 from-10% via-pink-400 via-1% to-purple-700 to-4% rounded-lg shadow-md px-10 py-5 ml-[-35%]">
                    {/* top rounded details  */}
                    <div className="flex flex-row place-items-center space-x-4">
                        <div>
                            <BsCircleFill className="text-white text-5xl rounded-full" />
                        </div>
                        <div>
                            <BsCircleFill className="text-purple-400 border-white border-2 text-2xl rounded-full" />
                        </div>
                    </div>

                    {/* bottom details */}
                    <div className="text-start mt-20">
                        <div className="flex justify-start text-white text-3xl">
                            {splitCardNumber(cardNumber) || (
                                <span>0000 0000 0000 0000</span>
                            )}
                        </div>
                        <div className="flex flex-row justify-between mt-8 text-white text-xl">
                            <div className="uppercase">
                                {name || (
                                    <span>Sophia Joseph</span>
                                )}
                            </div>
                            <div>
                                {month || (
                                <span>00</span> 
                                )}
                                <span>/</span>
                                {year || (
                                <span>00</span> 
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className="bg-gray-200 mt-6 pt-8 rounded-lg shadow-md ml-[-10%] mr-[-28%]">
                    <div className="bg-black h-12 w-full"></div>
                    <div className="bg-gray-400 h-10 w-3/4 mt-6 flex justify-end place-items-center px-2 text-center mx-auto rounded-md text-white">
                        {cvc || (
                        <span>000</span>
                        )}
                    </div>

                    {/* animated loader */}
                    <div className="rounded-md max-w-sm w-1/2 mx-auto mt-5 pb-6">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-3 py-1">
                            <div className="h-2 bg-slate-400 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                                    </div>
                                    <div className="h-2 bg-slate-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
