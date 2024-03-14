'use client'
import React from "react"

const ConnectWallet = ({setRoad}) => {
    return (
        <>
            <div className="w-full fixed-min-h-dapp-box relative z-50 h-full rounded-[25px] px-10 py-8 bg-[#001129]">
                <div className="lg:flex lg:justify-between text-center lg:text-left justify-center">
                    <div className="text-white">
                        <p className="poppins font-normal text-sm opacity-50 lg:text-base">Step 1</p>
                        <p className="font-semibold text-lg lg:text-2xl poppins mt-2">Connect wallet</p>
                    </div>

                    <div className="flex justify-center items-end ">
                        <div className="border-[#476FFF] lg:h-[44px] mt-8 lg:mt-0 responsive-width-btn border flex rounded-[6px] items-center px-4 py-2">
                            <div className="bg-[#AAAAAA] rounded-[50%] h-[6px] w-[6px]">

                            </div>
                            <p className="poppins font-normal text-sm opacity-80 text-white ml-4 whitespace-nowrap">Wallet not connected</p>
                        </div>
                    </div>

                </div>
                <div className="h-full lg:-mt-16 mt-16 flex-col w-full flex justify-center items-center">
                    <div className="flex justify-center text-center">
                        <p className="font-normal text-xs lg:text-base opacity-50  poppins text-white">Select a Wallet of your choice</p>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <div onClick={()=>{setRoad(2)}} className="border-[#476FFF4D]  hover:scale-110 transition-all duration-300 flex justify-center items-center rounded-[18px] border h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
                            <img className="lg:max-w-[46px] max-w-[30px] max-h-[30px] lg:max-h-[46px]" src="/Images/crypto1.png"></img>
                        </div>
                        <div onClick={()=>{setRoad(2)}} className="border-[#476FFF4D] flex justify-center hover:scale-110 transition-all duration-300 items-center rounded-[18px] border h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
                            <img className="lg:max-w-[46px] max-w-[30px] max-h-[30px] lg:max-h-[46px]" src="/Images/crypto2.png"></img>
                        </div>
                        <div onClick={()=>{setRoad(2)}} className="border-[#476FFF4D] flex justify-center hover:scale-110 transition-all duration-300 items-center rounded-[18px] border h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
                            <img className="lg:max-w-[46px] max-w-[30px] max-h-[30px] lg:max-h-[46px]" src="/Images/crypto3.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}          

export default ConnectWallet