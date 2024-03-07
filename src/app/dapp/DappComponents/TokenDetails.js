'use client'
import React, { useState } from "react";
import { Dropdown } from 'flowbite-react';

const TokenDetails = ({ setRoad }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [drop1, setDrop1] = useState(false);
    const [drop2, setDrop2] = useState(false);


    const handleClickCheck = () => {
        setIsChecked(!isChecked);
    }
    return (
        <>
            <div className="w-full relative z-20 h-full rounded-[25px] px-10 py-8 pb-20 bg-[#001129]">
                <div className="lg:flex lg:justify-between text-center lg:text-left justify-center">
                    <div className="text-white">
                        <p className="poppins font-normal text-sm opacity-50 lg:text-base">Step 3</p>
                        <p className="font-semibold text-lg lg:text-2xl poppins mt-2">Enter Token Details</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="border-[#476FFF] bg-[#476FFF33] mt-8 lg:mt-0 responsive-width-btn border flex rounded-[6px] items-center px-4 py-2">
                            <div className="bg-[#AAAAAA] rounded-[50%] h-[6px] w-[6px]">

                            </div>
                            <p className="poppins mob-copy-wallet font-normal text-xs lg:text-sm opacity-80 text-white ml-4 whitespace-nowrap">0x4521545...4665025</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-16  poppins flex-wrap gap-6">
                    <div className="relative lg:w-[30%] w-full">
                        <div onClick={() => { setDrop1(!drop1) }} className=" border border-[#476FFF] rounded-[6px] flex justify-between items-center text-white text-opacity-70 py-4 px-4 text-base bg-[#476FFF33]">
                            Select Token

                            <div>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 7L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        {drop1 ?
                            <>
                                <div className="absolute flex-col z-30 mt-2 rounded-[6px] bg-[#0E2454] flex justify-start items-start w-full py-4 px-4">
                                    <div onClick={() => { setDrop1(!drop1) }}>
                                        <p className="text-white text-base">Lorem Ipsum</p>
                                    </div>
                                    <div onClick={() => { setDrop1(!drop1) }} className="mt-4">
                                        <p className="text-white text-base">Lorem Ipsum</p>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }

                    </div>

                    <div className="relative lg:w-[30%] w-full">
                        <div onClick={() => { setDrop2(!drop2) }} className=" border border-[#476FFF] rounded-[6px] flex justify-between items-center text-white text-opacity-70 py-4 px-4 text-base bg-[#476FFF33]">
                            Select a router

                            <div>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 7L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        {drop2 ?
                            <>
                                <div className="absolute  flex-col z-[100] mt-2 rounded-[6px] bg-[#0E2454] flex justify-start items-start w-full py-4 px-4">
                                    <div onClick={() => { setDrop2(!drop2) }}>
                                        <p className="text-white text-base">Lorem Ipsum</p>
                                    </div>
                                    <div onClick={() => { setDrop2(!drop2) }} className="mt-4">
                                        <p className="text-white text-base">Lorem Ipsum</p>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }
                    </div>

                    <div className="mob-center">
                        <div className="lg:w-[30%]  relative z-50 flex justify-between rounded-[6px] items-center text-white text-opacity-70 py-4 text-base">
                            <div className="flex items-center" onClick={() => { handleClickCheck() }}>
                                <div
                                    className={`${!isChecked ? 'h-[18px] custom-shadow flex justify-center items-center w-[18px] border border-[#476FFF] rounded-[4px]' : 'h-[18px] flex justify-center items-center w-[18px] border border-[#476FFF] rounded-[4px]'}  `}>



                                    {isChecked ?
                                        <>
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2934 0.319694C9.82387 0.786973 9.87509 1.5958 9.40781 2.12627L4.73986 6.51227C4.50287 6.7813 4.16391 6.93861 3.80545 6.94592C3.44699 6.95322 3.1019 6.80985 2.85415 6.5507L0.35478 3.9363C-0.133723 3.42531 -0.115497 2.61506 0.395489 2.12656C0.906475 1.63806 1.71672 1.65628 2.20522 2.16727L3.7408 3.77352L7.48683 0.434102C7.95411 -0.096363 8.76294 -0.147585 9.2934 0.319694Z" fill="#476FFF" />
                                            </svg>

                                        </>
                                        :
                                        null
                                    }

                                </div>
                                <div className="ml-4 poppins whitespace-nowrap font-normal text-base flex justify-start items-center">
                                    <p>Auto Verify</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="text" placeholder="Contract Name" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Token Name" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Token Symbol" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Total Tax" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Buy Tax" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Sell Tax" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Max Transactions" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                    <input type="text" placeholder="Max Wallet" className="lg:w-[30%] w-full border  border-[#476FFF] rounded-[6px] flex justify-between items-center text-white  py-4 px-4 text-base bg-[#001129]">

                    </input>
                </div>



                <div className="flex mb-10 lg:mb-0 lg:flex-row flex-col mt-12 justify-start gap-6 items-center">
                    <div onClick={() => { setRoad(2) }} className="lg:w-[30%] hover:scale-110 transition-all duration-300 w-full py-4 flex justify-center border text-white text-base border-[#476FFF] rounded-[6px]">
                        Back
                    </div>

                    <div onClick={() => { setRoad(4) }} className="lg:w-[30%] w-full hover:scale-110 transition-all duration-300 py-4 flex justify-center bg-[#476FFF] text-base text-white border border-[#476FFF] rounded-[6px]">
                        Deploy
                    </div>
                </div>


            </div>
        </>
    )
}

export default TokenDetails;