import { Bs0SquareFill, Bs7SquareFill, BsArrowLeftRight, BsCircleFill, BsGripHorizontal, BsLine } from "react-icons/bs";

const Home = ({ name, cardNumber, month, year, cvc, setName, setCardNumber, setMonth, setYear, setCvc, handleNameChange }) => {
    return (
        <main className="flex flex-row justify-center text-center bg-white h-[100vh] w-full">
            <section className="flex flex-row justify-center text-center w-full relative">
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
                                placeholder="e.g. Sophia Joseph" 
                                className="rounded-md px-2 border-2 border-gray-200 h-12" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-start">
                            <label className="uppercase">card number</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="e.g. 1234 5678 9123 0000" 
                                className="rounded-md px-2 border-2 border-gray-200 h-12"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-row space-x-4">
                            <div className="flex flex-col text-start">
                                <label className="uppercase">exp.date (mm/yy)</label>
                                <div className="flex flex-row space-x-4">
                                    <div>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="mm" 
                                            className="rounded-md px-2 border-2 border-gray-200 h-12 w-full uppercase"
                                            value={month}
                                            onChange={(e) => setMonth(e.target.value)} 
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="yy" 
                                            className="rounded-md px-2 border-2 border-gray-200 h-12 w-full uppercase" 
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col text-start">
                                <label className="uppercase">cvc</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="e.g. 123" 
                                    className="rounded-md px-2 border-2 border-gray-200 h-12" 
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
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
            </section>

            <section className="absolute ml-[-40%] mt-32">
                {/* first card */}
                <div className="bg-gradient-to-r from-blue-700 from-10% via-pink-400 via-1% to-purple-700 to-4% rounded-lg shadow-md px-10 py-2 ml-[-30%]">
                    {/* top rounded details  */}
                    <div className="flex flex-row place-items-center space-x-4">
                        <div>
                            <BsCircleFill className="text-white text-5xl rounded-full" />
                        </div>
                        <div>
                            <BsCircleFill className="text-purple-400 border-white border-2 text-2xl rounded-full" />
                        </div>
                    </div>

                    {/* botton details */}
                    <div className="text-start mt-20">
                        <div className="text-white text-3xl">
                            <p>0000 0000 0000 0000</p>
                        </div>
                        <div className="flex flex-row justify-between mt-8 text-white text-xl">
                            <div className="uppercase">
                                Sophia Joseph
                            </div>
                            <div>
                                00 / 00
                            </div>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className="bg-gray-200 mt-6 pt-8 rounded-lg shadow-md ml-[-10%] mr-[-22%]">
                    <div className="bg-black h-12 w-full"></div>
                    <div className="bg-gray-400 h-10 w-3/4 mt-6 flex justify-end place-items-center px-2 text-center mx-auto rounded-md text-white">
                        000
                    </div>

                    {/* animated loader */}
                    <div class="rounded-md max-w-sm w-1/2 mx-auto mt-5 pb-6">
                        <div class="animate-pulse flex space-x-4">
                            <div class="flex-1 space-y-3 py-1">
                            <div class="h-2 bg-slate-400 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-400 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-400 rounded col-span-1"></div>
                                    </div>

                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-400 rounded col-span-1"></div>
                                        <div class="h-2 bg-slate-400 rounded col-span-2"></div>
                                    </div>
                                    <div class="h-2 bg-slate-400 rounded"></div>
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