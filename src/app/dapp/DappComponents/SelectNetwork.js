const SelectNetwork = () => {
    return (
        <>
            <div className="w-full h-full rounded-[25px] px-10 py-8 bg-[#001129]">
                <div className="lg:flex lg:justify-between text-center lg:text-left justify-center">
                    <div className="text-white">
                        <p className="poppins font-normal text-sm opacity-50 lg:text-base">Step 2</p>
                        <p className="font-semibold text-lg lg:text-2xl poppins">Select Network</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="border-[#476FFF] bg-[#476FFF33] mt-8 lg:mt-0 responsive-width-btn border flex rounded-[6px] items-center px-4 py-2">
                            <div className="bg-[#AAAAAA] rounded-[50%] h-[6px] w-[6px]">

                            </div>
                            <p className="poppins font-normal text-sm opacity-80 text-white ml-4 whitespace-nowrap">0x4521545...4665025</p>
                        </div>
                    </div>
                </div>
                <div className="h-full lg:-mt-16 mt-6 flex-col w-full flex justify-center items-center">
                    <div className="relative w-full">
                        <div className="absolute flex justify-center items-center top-1/2 border border-white px-3 z-20 -mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p className="font-normal text-base text-white opacity-70">Mainnets</p>
                        </div>
                        <div className="w-full border border-[#476FFF33] py-6">

                        </div>

                    </div>
                    {/* <div className="flex justify-center text-center">
                        <p className="font-normal text-xs lg:text-base opacity-50  poppins text-white">Mainnets</p>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <div className="border-[#476FFF4D] flex justify-center items-center rounded-[18px] border h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
                            <img className="lg:max-w-[46px] max-w-[30px] max-h-[30px] lg:max-h-[46px]" src="/Images/crypto1.png"></img>
                        </div>
                        <div className="border-[#476FFF4D] flex justify-center items-center rounded-[18px] border h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
                            <img className="lg:max-w-[46px] max-w-[30px] max-h-[30px] lg:max-h-[46px]" src="/Images/crypto2.png"></img>
                        </div>
                        <div className="border-[#476FFF4D] flex justify-center items-center rounded-[18px] border h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
                            <img className="lg:max-w-[46px] max-w-[30px] max-h-[30px] lg:max-h-[46px]" src="/Images/crypto3.png"></img>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SelectNetwork