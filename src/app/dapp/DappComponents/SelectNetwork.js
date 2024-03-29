const SelectNetwork = ({setRoad}) => {
    return (
        <>
            <div className="w-full fixed-min-h-dapp-box relative z-20 h-full rounded-[25px] px-10 py-8 pb-20 bg-[#001129]">
                <div className="lg:flex lg:justify-between text-center lg:text-left justify-center">
                    <div className="text-white">
                        <p className="poppins font-normal text-sm opacity-50 lg:text-base">Step 2</p>
                        <p className="font-semibold text-lg lg:text-2xl poppins mt-2">Select Network</p>
                    </div>

                    <div className="flex items-end justify-center">
                        <div className="border-[#476FFF] bg-[#476FFF33] lg:h-[44px] mt-8 lg:mt-0 responsive-width-btn border flex rounded-[6px] items-center px-4 py-2">
                            <div className="bg-[#AAAAAA] rounded-[50%] h-[6px] w-[6px]">

                            </div>
                            <p className="poppins mob-copy-wallet font-normal text-xs lg:text-sm opacity-80 text-white ml-4 whitespace-nowrap">0x4521545...4665025</p>
                        </div>
                    </div>
                </div>
                <div className="h-full mt-16 lg:mt-6 flex-col w-full flex justify-center items-center">
                    <div className="relative w-full  poppins">
                        <div className="absolute flex justify-center items-center top-6 px-4 z-20 -mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p className="font-normal text-xs lg:text-base text-white opacity-70 bg-[#001129] px-3 poppins">Mainnets</p>
                        </div>
                        <div className="w-full border  justify-center border-[#476FFF33] flex items-center gap-4 lg:flex-row flex-col lg:px-6 rounded-[15px] pt-10 py-6">

                            <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                <div className="flex coinpfp justify-center items-center">
                                    <img src="/Images/eth.png" className="w-full h-full"></img>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Ethereum</p>
                                    <p className="text-white opacity-50 text-xs">ETH</p>
                                </div>

                            </div>

                            <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                <div className="flex coinpfp justify-center items-center">
                                    <img src="/Images/bnb.png" className="w-full h-full"></img>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Binance</p>
                                    <p className="text-white opacity-50 text-xs">BNB</p>
                                </div>

                            </div>

                            <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                <div className="flex coinpfp justify-center items-center">
                                    <img src="/Images/arb.png" className="w-full h-full"></img>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Arbitrum</p>
                                    <p className="text-white opacity-50 text-xs">ARB</p>
                                </div>

                            </div>

                            <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                <div className="flex coinpfp justify-center items-center">
                                    <img src="/Images/base.png" className="w-full h-full"></img>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Base</p>
                                    <p className="text-white opacity-50 text-xs">BASE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full mt-10 poppins">
                        <div className="absolute flex justify-center items-center top-6 px-4 z-20 -mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p className="font-normal text-xs lg:text-base text-white opacity-70 bg-[#001129] px-3 poppins">Testnet</p>
                        </div>
                        <div className="w-full flex-col border justify-center border-[#476FFF33] flex items-center   lg:px-6 rounded-[15px] pt-10 py-6">
                            <div className="flex flex-wrap justify-center gap-4 lg:flex-row flex-col">
                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/eth.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base whitespace-nowrap">Goerli Test</p>
                                        <p className="text-white opacity-50 text-xs">ETH</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/eth.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base whitespace-nowrap">Sepholia</p>
                                        <p className="text-white opacity-50 text-xs">BNB</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/bnb.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base whitespace-nowrap">BSC Test</p>
                                        <p className="text-white opacity-50 text-xs">BNB</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/kava.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base whitespace-nowrap">Kava Test</p>
                                        <p className="text-white opacity-50 text-xs">KAVA</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/etc.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Etherium Cl</p>
                                        <p className="text-white opacity-50 text-xs">BNB</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/arb.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Arbitrum</p>
                                        <p className="text-white opacity-50 text-xs">ETH</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/cfx.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white responsive-coinbox-text opacity-[80%] lg:text-base">Conflux</p>
                                        <p className="text-white opacity-50 text-xs">CFX</p>
                                    </div>

                                </div>
                            </div>

                            {/* <div className="flex mt-4 gap-4 lg:flex-row flex-col">

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/etc.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white opacity-[80%] lg:text-base">Etherium Cl</p>
                                        <p className="text-white opacity-50 text-xs">BNB</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/arb.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white opacity-[80%] lg:text-base">Arbitrum</p>
                                        <p className="text-white opacity-50 text-xs">ETH</p>
                                    </div>

                                </div>

                                <div onClick={()=>{setRoad(3)}} className="border coinbox hover:scale-110 transition-all duration-300  border-[#476FFF66] gap-4 justify-start items-center flex pl-6 pr-6 py-4 rounded-[15px]">
                                    <div className="flex coinpfp justify-center items-center">
                                        <img src="/Images/cfx.png" className="w-full h-full"></img>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="text-white opacity-[80%] lg:text-base">Conflux</p>
                                        <p className="text-white opacity-50 text-xs">CFX</p>
                                    </div>

                                </div>

                            </div> */}

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectNetwork