const TokenDetails = () => {
    return (
        <>
            <div className="w-full h-full rounded-[25px] px-10 py-8 pb-20 bg-[#001129]">
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

                <div className="flex flex-wrap gap-6">
                    <div className="w-[30%] border border-[#476FFF] flex justify-between items-center text-white text-opacity-70 py-4 px-4 text-base bg-[#476FFF33]">
                        Select Token

                        <div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 7L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="w-[30%] border border-[#476FFF] flex justify-between items-center text-white text-opacity-70 py-4 px-4 text-base bg-[#476FFF33]">
                        select a router

                        <div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 7L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="w-[30%] border border-[#476FFF] flex justify-between items-center text-white text-opacity-70 py-4 px-4 text-base bg-[#476FFF33]">
                        Select Token

                        <div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 7L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>


                </div>



                <div className="flex justify-start gap-6 items-center">
                    <div className="w-[30%] py-4 flex justify-center border text-white text-base border-[#476FFF] rounded-[6px]">
                        Back
                    </div>

                    <div className="w-[30%] py-4 flex justify-center bg-[#476FFF] text-base text-white border border-[#476FFF] rounded-[6px]">
                        Deploy
                    </div>
                </div>


            </div>
        </>
    )
}

export default TokenDetails;