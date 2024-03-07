'use client'

import React,{useState,useContext,useEffect} from "react"
import { VerifyContext } from "../context/VerifyContext"


const Done = ({setRoad}) => {
    const { verify, setVerify } = useContext(VerifyContext);
    const [copied, setCopied] = useState(false);
    const textToCopy = "0x9bEE7D9c9CD673a04610a718cdcFAa62901c807";
  
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    };
    return (
        <>
            <div className="w-full fixed-min-h-dapp-box relative z-20 h-full flex flex-col justify-between rounded-[25px] lg:px-10 px-4 py-8 pb-20 bg-[#001129]">
                <div className="lg:flex lg:justify-between text-center lg:text-left justify-center">
                    <div className="text-white">
                        <p className="poppins font-normal text-sm opacity-50 lg:text-base">Step 4</p>
                        <p className="font-semibold text-lg hidden lg:block lg:text-2xl poppins mt-2">Done</p>
                        <p className="font-semibold text-lg  lg:hidden block poppins mt-2">You Are Done</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="border-[#476FFF] bg-[#476FFF33] mt-6 lg:mt-0 responsive-width-btn border flex rounded-[6px] items-center px-4 py-2">
                            <div className="bg-[#AAAAAA] rounded-[50%] h-[6px] w-[6px]">

                            </div>
                            <p className="poppins mob-copy-wallet font-normal text-xs lg:text-sm opacity-80 text-white ml-4 whitespace-nowrap">0x4521545...4665025</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-20 lg:mt-0 flex justify-center items-center">
                    <div className="w-full flex-col flex justify-center items-center">
                        <p className="lg:text-2xl poppins font-normal text-white">Token Contract</p>
                        <div className="mt-6 justify-center overflow-hidden w-full responsive-copy-box lg:w-[60%] py-4 lg:px-4 rounded-[6px] border border-[#476FFF80] flex items-center">
                            <div>
                                <p className="poppins font-normal text-xs lg:text-sm text-white">0x9bEE7D9c9CD673a04610a718cdcFAa62901c807</p>
                            </div>
                            <div className="h-[25px] hidden lg:block mx-3 w-[2px] bg-[#476FFF]">

                            </div>
                            <div onClick={copyToClipboard} className="lg:flex hidden  items-center gap-2">
                                <div>
                                    <img src="/Images/copydesk.png"></img>
                                </div>
                                <p className="font-normal text-[#476FFF] text-xs">Copy</p>
                            </div>
                        </div>
                        <div onClick={copyToClipboard} className="w-[70%] lg:hidden mt-8 bg-[#476FFF] border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-2 px-4 text-base ]">
                            <div className="mr-2">
                                <img src="/Images/copy.png"></img>
                            </div>
                            Copy
                        </div>
                    </div>
                </div>

                <div className="flex mt-20 gap-4 flex-col lg:hidden justify-center items-center">
                    <div onClick={()=>{setRoad(3)}} type="text" className="lg:w-[30%] font-normal  w-[90%] border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-2 px-4 text-base bg-[#001129]">
                        Back
                    </div>
                    <div onClick={()=>{setVerify(true)}} type="text" className="lg:w-[30%] bg-[#476FFF] w-[90%] border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-2 px-4 text-base ]">
                        Deploy
                    </div>
                </div>

                <div className="lg:flex hidden flex-wrap gap-4">
                    <div type="text" className="lg:w-[30%] hover:scale-110 transition-all duration-300 font-normal  w-full border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-4 px-4 text-base bg-[#001129]">
                        Open Contract
                    </div>
                    <div onClick={()=>{setVerify(true)}} type="text" className="lg:w-[30%] hover:scale-110 transition-all duration-300 bg-[#476FFF] w-full border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-4 px-4 text-base ]">
                        Verify
                    </div>
                    <div onClick={()=>{setRoad(1)}} type="text" className="lg:w-[30%] font-normal hover:scale-110 transition-all duration-300 w-full border  border-[#476FFF] rounded-[6px] flex justify-center items-center text-white  py-4 px-4 text-base bg-[#001129]">
                        Exit
                    </div>
                </div>
            </div>
        </>
    )
}

export default Done;