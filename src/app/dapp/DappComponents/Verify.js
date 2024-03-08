'use client'
import React, { useState, useEffect, useContext } from "react";
import { VerifyContext } from "../context/VerifyContext";

const Verify = () => {
    const { verify, setVerify } = useContext(VerifyContext);
    const [drop, setDrop] = useState(false);

    const handleCLickBack = () => {
        setVerify(false)
    }
    const handleClickVerify = () => {
        setVerify(false)
    }

    return (
        <>
            <div className="w-full flex   justify-center">
                <div className="w-full relative z-20 h-full flex flex-col justify-between rounded-[25px] lg:w-[90%] lg:px-10 px-4 py-8 pb-20 bg-[#001129]">
                    <div className="lg:flex lg:justify-between text-center lg:text-left justify-center">
                        <div className="text-white">
                            <p className="font-semibold text-lg  lg:block lg:text-2xl poppins mt-2">Verify</p>
                        </div>

                        <div className="flex justify-center">
                            <div className="border-[#476FFF] bg-[#476FFF33] mt-6 lg:mt-0 responsive-width-btn border flex rounded-[6px] items-center px-4 py-2">
                                <div className="bg-[#AAAAAA] rounded-[50%] h-[6px] w-[6px]">

                                </div>
                                <p className="poppins mob-copy-wallet font-normal text-xs lg:text-sm opacity-80 text-white ml-4 whitespace-nowrap">0x4521545...4665025</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-20 flex justify-center items-center">
                        <div className="w-full flex-col flex justify-center items-center">
                            <p className="lg:text-2xl poppins font-normal text-white">Verify Contract</p>
                            <div className="flex mt-4 lg:mt-8 lg:gap-3 gap-10 lg:w-[70%] justify-center items-center  lg:flex-row flex-col w-full">
                                <input placeholder="Enter Contract Address" className="lg:min-h-[55px] bg-[#001129] text-xs px-4 text-white overflow-hidden w-full lg:w-[60%] py-4 lg:px-4 rounded-[6px] border border-[#476FFF80] flex items-center">

                                </input>

                                <div className="relative lg:w-[30%] w-[60%]">
                                    <div onClick={() => { setDrop(!drop) }} className=" border border-[#476FFF] rounded-[6px] flex justify-between items-center text-white text-opacity-70 py-4 px-4 text-sm bg-[#476FFF33]">
                                        Select Network

                                        <div>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 7L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    {drop ?
                                        <>
                                            <div className="absolute flex-col z-30 mt-2 rounded-[6px] bg-[#0E2454] flex justify-start items-start w-full py-4 px-4">
                                                <div onClick={() => { setDrop(!drop) }}>
                                                    <p className="text-white text-base">Lorem Ipsum</p>
                                                </div>
                                                <div onClick={() => { setDrop(!drop) }} className="mt-4">
                                                    <p className="text-white text-base">Lorem Ipsum</p>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                        </>
                                    }


                                </div>

                            </div>


                        </div>
                    </div>



                    <div className="lg:flex-row flex-col mt-40 flex justify-center flex-wrap gap-4">
                        <div onClick={() => { handleCLickBack() }} type="text" className="lg:w-[30%] font-normal  w-full border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-4 px-4 text-base bg-[#001129]">
                            Back
                        </div>
                        <div onClick={() => { handleClickVerify() }} type="text" className="lg:w-[30%] bg-[#476FFF] w-full border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-4 px-4 text-base ]">
                            Verify
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Verify;