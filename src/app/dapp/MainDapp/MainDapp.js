import './MainDapp.css'
import ConnectWallet from '../DappComponents/ConnectWallet/ConnectWallet';
import React, { useState, useEffect, createContext, useContext } from 'react';
import SelectNetwork from '../DappComponents/SelectNetwork';
import TokenDetails from '../DappComponents/TokenDetails';
import Done from '../DappComponents/Done';
import Verify from '../DappComponents/Verify';
import { VerifyContext } from '../context/VerifyContext';

const MainDapp = () => {
    const [road, setRoad] = useState(1);
    const { verify, setVerify } = useContext(VerifyContext);



    const handleClick1 = () => {
        setRoad(1)
    }

    const handleClick2 = () => {
        setRoad(2)
    }

    const handleClick3 = () => {
        setRoad(3)
    }

    const handleClick4 = () => {
        setRoad(4)
    }

    console.log(verify, "verify")

    return (
        <>
            <div className='lg:flex hidden px-2  h-[85vh] responsive-main-height relative pt-20 w-full gap-6'>
                <div className='absolute -top-52 left-0'>
                    <img src='/Images/dappleft.png'></img>

                </div>
                <div className='absolute -top-52 right-0'>
                    <img src='/Images/dapprightmask.png'></img>

                </div>
                <div className='w-[5%] fixed-height  main1'>

                </div>
                <div className='w-[90%] fixed-height flex flex-col justify-center main2'>
                    <div>
                        <p className={`${verify ? "font-normal text-3xl -mt-20 text-white responsive-title ml-36" : "font-normal text-3xl -mt-10 text-white responsive-title ml-36"}`}>Token Deployer</p>
                    </div>


                    <div className='w-full gap-12 flex py-16 px-10'>
                        {verify ?
                            <>
                                <div className='main-dapp w-full '>
                                    <Verify />
                                </div>
                            </>
                            :
                            <>
                                <div className='roadmap relative py-16 w-[40%] '>
                                    {/* <div className='h-full absolute z-10 top-16 left-8 flex '>
                                        <div className=' h-[78%] w-[2px]  bg-[#476FFF4D]'>

                                        </div>
                                    </div>

                                    <div className='h-full absolute z-10 top-24 right-[0.4rem] flex '>
                                        <div className=' h-[68%] w-[2px]  bg-[#476FFF4D]'>

                                        </div>
                                    </div>

                                    <div className='flex justify-between'>
                                        <div onClick={() => { handleClick1() }} className='flex gap-4 items-center'>
                                            <div className='border-[#476FFF] h-[67px] w-[67px] relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]'>
                                                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1538 2.11538H5.92308C3.82015 2.11538 2.11538 3.82015 2.11538 5.92308V16.0769C2.11538 18.1799 3.82015 19.8846 5.92308 19.8846H21.1538C23.2568 19.8846 24.9615 18.1799 24.9615 16.0769H15.2308C12.4269 16.0769 10.1538 13.8039 10.1538 11C10.1538 8.19609 12.4269 5.92308 15.2308 5.92308L24.9615 5.92308C24.9615 3.82015 23.2568 2.11538 21.1538 2.11538ZM15.2308 8.03846H24.9615V13.9615H15.2308C13.5952 13.9615 12.2692 12.6356 12.2692 11C12.2692 9.36439 13.5952 8.03846 15.2308 8.03846ZM21.1538 22C24.4251 22 27.0769 19.3481 27.0769 16.0769V5.92308C27.0769 2.65185 24.4251 0 21.1538 0H5.92308C2.65185 0 0 2.65185 0 5.92308V16.0769C0 19.3481 2.65185 22 5.92308 22H21.1538ZM15.2308 10.1538C14.7635 10.1538 14.3846 10.5327 14.3846 11C14.3846 11.4673 14.7635 11.8462 15.2308 11.8462H18.6154C19.0827 11.8462 19.4615 11.4673 19.4615 11C19.4615 10.5327 19.0827 10.1538 18.6154 10.1538H15.2308Z" fill="#476FFF" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className='poppins font-semibold text-base text-white'>Wallet</p>
                                                <p className='opacity-[50%] text-white poppins font-normal text-sm'>Connect your wallet</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <div className='border-[2px] border-[#476FFF] bg-black rounded-[50%] h-[13px] w-[13px]'>

                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={() => { handleClick2() }} className='flex mt-16 justify-between'>
                                        <div className='flex gap-4 items-center'>
                                            <div className='border-[#476FFF] h-[67px] w-[67px] relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]'>
                                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.5061 4.1622L13.4939 0.669917C12.7352 0.230995 11.8752 0 11 0C10.1248 0 9.26485 0.230995 8.50612 0.669917L2.49388 4.1622C1.73661 4.60367 1.10775 5.23731 0.670129 5.99982C0.232504 6.76233 0.00143247 7.62701 0 8.50749V15.4921C0.00145873 16.3727 0.232532 17.2375 0.670146 18.0001C1.10776 18.7628 1.7366 19.3966 2.49388 19.8383L8.50612 23.3296C9.26475 23.7688 10.1247 24 11 24C11.8753 24 12.7352 23.7688 13.4939 23.3296L19.5061 19.8383C20.2634 19.3966 20.8922 18.7628 21.3299 18.0001C21.7675 17.2375 21.9985 16.3727 22 15.4921V8.50749C21.9986 7.62701 21.7675 6.76233 21.3299 5.99982C20.8922 5.23731 20.2634 4.60367 19.5061 4.1622ZM9.50367 2.40903C9.95861 2.1448 10.4747 2.00569 11 2.00569C11.5253 2.00569 12.0414 2.1448 12.4963 2.40903L18.5086 5.90031C18.661 5.99725 18.8043 6.10811 18.9365 6.23148L12.7587 9.8191C12.2238 10.1293 11.6173 10.2925 11 10.2925C10.3827 10.2925 9.77616 10.1293 9.24132 9.8191L3.06348 6.23148C3.19572 6.10811 3.33898 5.99725 3.49143 5.90031L9.50367 2.40903ZM3.49143 18.0992C3.03675 17.8342 2.65923 17.4537 2.39663 16.9958C2.13403 16.5379 1.99557 16.0187 1.9951 15.49V8.50749C2.00203 8.32669 2.02574 8.14695 2.06593 7.9706L8.24377 11.5582C8.78937 11.8704 9.38426 12.086 10.0024 12.1955V21.7982C9.83014 21.7451 9.66315 21.6759 9.50367 21.5915L3.49143 18.0992ZM20.0049 15.49C20.0044 16.0187 19.866 16.5379 19.6034 16.9958C19.3408 17.4537 18.9632 17.8342 18.5086 18.0992L12.4963 21.5915C12.3369 21.6759 12.1699 21.7451 11.9976 21.7982V12.1955C12.6157 12.086 13.2106 11.8704 13.7562 11.5582L19.9341 7.9706C19.9743 8.14695 19.998 8.32669 20.0049 8.50749V15.49Z" fill="#476FFF" />
                                                </svg>

                                            </div>
                                            <div>
                                                <p className='poppins font-semibold text-base text-white'>Network</p>
                                                <p className='opacity-[50%] text-white poppins font-normal text-sm'>Select your Network</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <div className='border-[2px] border-[#476FFF4D] bg-black rounded-[50%] h-[13px] w-[13px]'>

                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={() => { handleClick3() }} className='flex mt-16 justify-between'>
                                        <div className='flex gap-4 items-center'>
                                            <div className='border-[#476FFF] h-[67px] w-[67px] relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]'>
                                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="13.5" cy="13.5" r="12.5" stroke="#476FFF" stroke-width="2" />
                                                    <path d="M12.2667 10L15 12.5309L12 15" stroke="#476FFF" stroke-width="2" stroke-linecap="square" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className='poppins font-semibold text-base text-white'>Token Details</p>
                                                <p className='opacity-[50%] text-white poppins font-normal text-sm'>Select your Token</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <div className='border-[2px] border-[#476FFF4D] bg-black rounded-[50%] h-[13px] w-[13px]'>

                                            </div>
                                        </div>
                                    </div>

                                    <div onClick={() => { handleClick4() }} className='flex mt-16 justify-between'>
                                        <div className='flex gap-4 items-center'>
                                            <div className='border-[#476FFF] h-[67px] w-[67px] relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]'>
                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.0417 8.60487C21.7875 8.60487 21.5437 8.70584 21.364 8.88556C21.1843 9.06528 21.0833 9.30904 21.0833 9.5632V14.375H17.25C16.4875 14.375 15.7562 14.6779 15.2171 15.2171C14.6779 15.7562 14.375 16.4875 14.375 17.25V21.0833H4.79166C4.02917 21.0833 3.2979 20.7804 2.75873 20.2412C2.21957 19.7021 1.91667 18.9708 1.91667 18.2083V4.79166C1.91667 4.02917 2.21957 3.2979 2.75873 2.75873C3.2979 2.21957 4.02917 1.91667 4.79166 1.91667H13.4569C13.7111 1.91667 13.9548 1.8157 14.1346 1.63598C14.3143 1.45625 14.4152 1.2125 14.4152 0.958333C14.4152 0.704167 14.3143 0.460411 14.1346 0.280689C13.9548 0.100967 13.7111 0 13.4569 0L4.79166 0C3.5213 0.0015217 2.30341 0.506845 1.40513 1.40513C0.506845 2.30341 0.0015217 3.5213 0 4.79166L0 18.2083C0.0015217 19.4787 0.506845 20.6966 1.40513 21.5949C2.30341 22.4931 3.5213 22.9985 4.79166 23H15.662C16.2916 23.0018 16.9152 22.8787 17.4969 22.6379C18.0785 22.3971 18.6067 22.0433 19.0507 21.597L21.596 19.0497C22.0424 18.6059 22.3963 18.078 22.6373 17.4965C22.8782 16.915 23.0015 16.2915 23 15.662V9.5632C23 9.30904 22.899 9.06528 22.7193 8.88556C22.5396 8.70584 22.2958 8.60487 22.0417 8.60487ZM17.6956 20.2419C17.3104 20.6262 16.8232 20.8922 16.2917 21.0086V17.25C16.2917 16.9958 16.3926 16.7521 16.5723 16.5723C16.7521 16.3926 16.9958 16.2917 17.25 16.2917H21.0114C20.8929 16.8221 20.6272 17.3084 20.2448 17.6947L17.6956 20.2419Z" fill="#476FFF" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1887 3.275C20.5892 3.65539 20.6054 4.28835 20.225 4.68875L10.725 14.6888C10.5393 14.8843 10.2825 14.9965 10.0128 14.9999C9.74318 15.0034 9.48357 14.8978 9.29289 14.7071L4.79289 10.2071C4.40237 9.81658 4.40237 9.18342 4.79289 8.7929C5.18342 8.40237 5.81658 8.40237 6.20711 8.7929L9.98164 12.5674L18.775 3.31125C19.1554 2.91085 19.7883 2.89462 20.1887 3.275Z" fill="#476FFF" />
                                                </svg>

                                            </div>
                                            <div>
                                                <p className='poppins font-semibold text-base text-white'>Done</p>
                                                <p className='opacity-[50%] text-white poppins font-normal text-sm'>Enter more details</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <div className='border-[2px] border-[#476FFF4D] bg-black rounded-[50%] h-[13px] w-[13px]'>

                                            </div>
                                        </div>
                                    </div> */}
                                    <div className='flex justify-between'>
                                        <div className='stage-logos flex flex-col justify-center items-center '>
                                            {/* stage 1 */}
                                            <div className='flex items-center' onClick={() => { handleClick1() }}>
                                                <div className='border-[#476FFF] border-[2px] transition-all duration-1000 h-[67px] w-[67px] responsive-stage-logos relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]'>
                                                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1538 2.11538H5.92308C3.82015 2.11538 2.11538 3.82015 2.11538 5.92308V16.0769C2.11538 18.1799 3.82015 19.8846 5.92308 19.8846H21.1538C23.2568 19.8846 24.9615 18.1799 24.9615 16.0769H15.2308C12.4269 16.0769 10.1538 13.8039 10.1538 11C10.1538 8.19609 12.4269 5.92308 15.2308 5.92308L24.9615 5.92308C24.9615 3.82015 23.2568 2.11538 21.1538 2.11538ZM15.2308 8.03846H24.9615V13.9615H15.2308C13.5952 13.9615 12.2692 12.6356 12.2692 11C12.2692 9.36439 13.5952 8.03846 15.2308 8.03846ZM21.1538 22C24.4251 22 27.0769 19.3481 27.0769 16.0769V5.92308C27.0769 2.65185 24.4251 0 21.1538 0H5.92308C2.65185 0 0 2.65185 0 5.92308V16.0769C0 19.3481 2.65185 22 5.92308 22H21.1538ZM15.2308 10.1538C14.7635 10.1538 14.3846 10.5327 14.3846 11C14.3846 11.4673 14.7635 11.8462 15.2308 11.8462H18.6154C19.0827 11.8462 19.4615 11.4673 19.4615 11C19.4615 10.5327 19.0827 10.1538 18.6154 10.1538H15.2308Z" fill="#476FFF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className={`${road >= 2 ? "bg-[#476FFF]" : "bg-[#476FFF4D]"} transition-all duration-1000 w-[1px] h-[63px] bg-[#476FFF4D]`}>
                                            </div>
                                            {/* stage 2 */}
                                            <div className='flex items-center' onClick={() => { handleClick2() }}>
                                                <div className={`${road >= 2 ? 'border-[#476FFF] , border-[2px]' : 'border-[#476FFF4D] border'} transition-all duration-1000 h-[67px] w-[67px] responsive-stage-logos relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]`}>
                                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5061 4.1622L13.4939 0.669917C12.7352 0.230995 11.8752 0 11 0C10.1248 0 9.26485 0.230995 8.50612 0.669917L2.49388 4.1622C1.73661 4.60367 1.10775 5.23731 0.670129 5.99982C0.232504 6.76233 0.00143247 7.62701 0 8.50749V15.4921C0.00145873 16.3727 0.232532 17.2375 0.670146 18.0001C1.10776 18.7628 1.7366 19.3966 2.49388 19.8383L8.50612 23.3296C9.26475 23.7688 10.1247 24 11 24C11.8753 24 12.7352 23.7688 13.4939 23.3296L19.5061 19.8383C20.2634 19.3966 20.8922 18.7628 21.3299 18.0001C21.7675 17.2375 21.9985 16.3727 22 15.4921V8.50749C21.9986 7.62701 21.7675 6.76233 21.3299 5.99982C20.8922 5.23731 20.2634 4.60367 19.5061 4.1622ZM9.50367 2.40903C9.95861 2.1448 10.4747 2.00569 11 2.00569C11.5253 2.00569 12.0414 2.1448 12.4963 2.40903L18.5086 5.90031C18.661 5.99725 18.8043 6.10811 18.9365 6.23148L12.7587 9.8191C12.2238 10.1293 11.6173 10.2925 11 10.2925C10.3827 10.2925 9.77616 10.1293 9.24132 9.8191L3.06348 6.23148C3.19572 6.10811 3.33898 5.99725 3.49143 5.90031L9.50367 2.40903ZM3.49143 18.0992C3.03675 17.8342 2.65923 17.4537 2.39663 16.9958C2.13403 16.5379 1.99557 16.0187 1.9951 15.49V8.50749C2.00203 8.32669 2.02574 8.14695 2.06593 7.9706L8.24377 11.5582C8.78937 11.8704 9.38426 12.086 10.0024 12.1955V21.7982C9.83014 21.7451 9.66315 21.6759 9.50367 21.5915L3.49143 18.0992ZM20.0049 15.49C20.0044 16.0187 19.866 16.5379 19.6034 16.9958C19.3408 17.4537 18.9632 17.8342 18.5086 18.0992L12.4963 21.5915C12.3369 21.6759 12.1699 21.7451 11.9976 21.7982V12.1955C12.6157 12.086 13.2106 11.8704 13.7562 11.5582L19.9341 7.9706C19.9743 8.14695 19.998 8.32669 20.0049 8.50749V15.49Z" fill="#476FFF" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div className={`${road >= 3 ? "bg-[#476FFF]" : "bg-[#476FFF4D]"} transition-all duration-1000 w-[1px] h-[63px] bg-[#476FFF4D]`}>

                                            </div>
                                            {/* stage 3 */}
                                            <div className='flex items-center' onClick={() => { handleClick3() }}>
                                                <div className={`${road >= 3 ? 'border-[#476FFF] , border-[2px]' : 'border-[#476FFF4D] border'} transition-all duration-1000 h-[67px] w-[67px] responsive-stage-logos relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]`}>
                                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#476FFF" stroke-width="2" />
                                                        <path d="M12.2667 10L15 12.5309L12 15" stroke="#476FFF" stroke-width="2" stroke-linecap="square" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className={`${road >= 4 ? "bg-[#476FFF]" : "bg-[#476FFF4D]"} transition-all duration-1000 w-[1px] h-[63px] bg-[#476FFF4D]`}>
                                            </div>
                                            {/* stage 4 */}
                                            <div className='flex items-center' onClick={() => { handleClick4() }}>
                                                <div className={`${road >= 4 ? 'border-[#476FFF] , border-[2px]' : 'border-[#476FFF4D] border'} transition-all duration-1000 h-[67px] w-[67px] responsive-stage-logos relative z-20 flex justify-center items-center rounded-[50%] bg-[#162852]`}>
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.0417 8.60487C21.7875 8.60487 21.5437 8.70584 21.364 8.88556C21.1843 9.06528 21.0833 9.30904 21.0833 9.5632V14.375H17.25C16.4875 14.375 15.7562 14.6779 15.2171 15.2171C14.6779 15.7562 14.375 16.4875 14.375 17.25V21.0833H4.79166C4.02917 21.0833 3.2979 20.7804 2.75873 20.2412C2.21957 19.7021 1.91667 18.9708 1.91667 18.2083V4.79166C1.91667 4.02917 2.21957 3.2979 2.75873 2.75873C3.2979 2.21957 4.02917 1.91667 4.79166 1.91667H13.4569C13.7111 1.91667 13.9548 1.8157 14.1346 1.63598C14.3143 1.45625 14.4152 1.2125 14.4152 0.958333C14.4152 0.704167 14.3143 0.460411 14.1346 0.280689C13.9548 0.100967 13.7111 0 13.4569 0L4.79166 0C3.5213 0.0015217 2.30341 0.506845 1.40513 1.40513C0.506845 2.30341 0.0015217 3.5213 0 4.79166L0 18.2083C0.0015217 19.4787 0.506845 20.6966 1.40513 21.5949C2.30341 22.4931 3.5213 22.9985 4.79166 23H15.662C16.2916 23.0018 16.9152 22.8787 17.4969 22.6379C18.0785 22.3971 18.6067 22.0433 19.0507 21.597L21.596 19.0497C22.0424 18.6059 22.3963 18.078 22.6373 17.4965C22.8782 16.915 23.0015 16.2915 23 15.662V9.5632C23 9.30904 22.899 9.06528 22.7193 8.88556C22.5396 8.70584 22.2958 8.60487 22.0417 8.60487ZM17.6956 20.2419C17.3104 20.6262 16.8232 20.8922 16.2917 21.0086V17.25C16.2917 16.9958 16.3926 16.7521 16.5723 16.5723C16.7521 16.3926 16.9958 16.2917 17.25 16.2917H21.0114C20.8929 16.8221 20.6272 17.3084 20.2448 17.6947L17.6956 20.2419Z" fill="#476FFF" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1887 3.275C20.5892 3.65539 20.6054 4.28835 20.225 4.68875L10.725 14.6888C10.5393 14.8843 10.2825 14.9965 10.0128 14.9999C9.74318 15.0034 9.48357 14.8978 9.29289 14.7071L4.79289 10.2071C4.40237 9.81658 4.40237 9.18342 4.79289 8.7929C5.18342 8.40237 5.81658 8.40237 6.20711 8.7929L9.98164 12.5674L18.775 3.31125C19.1554 2.91085 19.7883 2.89462 20.1887 3.275Z" fill="#476FFF" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='stage-name pt-4'>
                                            {/* stage 1 */}
                                            <div className='flex items-center' onClick={() => { handleClick1() }}>
                                                <div className=''>
                                                    <p className='poppins roadmap-responsive-title font-semibold text-base text-white'>Wallet</p>
                                                    <p className='opacity-[50%] text-white poppins roadmap-responsive-para font-normal text-sm'>Connect your wallet</p>
                                                </div>
                                            </div>
                                            {/* stage 2 */}
                                            <div className='flex pt-20 items-center' onClick={() => { handleClick2() }}>
                                                <div className=''>
                                                    <p className='poppins roadmap-responsive-title font-semibold text-base text-white'>Network</p>
                                                    <p className='opacity-[50%] text-white poppins roadmap-responsive-para font-normal text-sm'>Select your Network</p>
                                                </div>
                                            </div>
                                            {/* stage 3 */}
                                            <div className='flex  pt-20 items-center' onClick={() => { handleClick3() }}>
                                                <div className=''>
                                                    <p className='poppins roadmap-responsive-title font-semibold text-base text-white'>Token Details</p>
                                                    <p className='opacity-[50%] text-white poppins roadmap-responsive-para font-normal text-sm'>Select your Token</p>
                                                </div>
                                            </div>
                                            {/* stage 4*/}
                                            <div className='flex pt-24 items-center' onClick={() => { handleClick4() }}>
                                                <div className=''>
                                                    <p className='poppins roadmap-responsive-title font-semibold text-base text-white'>Done</p>
                                                    <p className='opacity-[50%] text-white poppins roadmap-responsive-para font-normal text-sm'>Enter more details</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='stage-path  flex flex-col justify-center items-center'>
                                            {/* stage 1 */}
                                            <div className='flex mt-8 items-center' onClick={() => { handleClick1() }}>
                                                <div className={`${road >= 1 ? 'border-[#476FFF]' : "border-[#476FFF4D]"} ${road > 1 ? 'bg-[#476FFF]' : 'bg-black'} border-[2px]  transition-all duration-1000 rounded-[50%] h-[13px] w-[13px]`}>

                                                </div>
                                            </div>
                                            <div className={`${road > 1 ? 'w-[1px] h-[122px] bg-[#476FFF] transition-all duration-1000' : 'w-[1px] h-[122px] bg-[#476FFF4D] transition-all duration-1000'}`}>

                                            </div>
                                            {/* stage 2 */}
                                            <div className='flex  items-center' onClick={() => { handleClick2() }}>
                                                <div className={`${road >= 2 ? 'border-[#476FFF]' : "border-[#476FFF4D]"} ${road > 2 ? 'bg-[#476FFF]' : 'bg-black'} border-[2px]  transition-all duration-1000 rounded-[50%] h-[13px] w-[13px]`}>

                                                </div>
                                            </div>
                                            <div className={`${road > 2 ? 'w-[1px] h-[122px] bg-[#476FFF] transition-all duration-1000' : 'w-[1px] h-[122px] bg-[#476FFF4D] transition-all duration-1000'}`}>

                                            </div>
                                            {/* stage 23*/}
                                            <div className='flex  items-center' onClick={() => { handleClick3() }}>
                                                <div className={`${road >= 3 ? 'border-[#476FFF]' : "border-[#476FFF4D]"} ${road > 3 ? 'bg-[#476FFF]' : 'bg-black'} border-[2px]  transition-all duration-1000 rounded-[50%] h-[13px] w-[13px]`}>


                                                </div>
                                            </div>
                                            <div className={`${road > 3 ? 'w-[1px] h-[122px] bg-[#476FFF] transition-all duration-1000' : 'w-[1px] h-[122px] bg-[#476FFF4D] transition-all duration-1000'}`}>

                                            </div>
                                            {/* stage 4*/}
                                            <div className='flex  items-center' onClick={() => { handleClick4() }}>
                                                <div className={`${road >= 4 ? 'border-[#476FFF]' : "border-[#476FFF4D]"} ${road >= 4 ? 'bg-[#476FFF]' : 'bg-black'} border-[2px]  transition-all duration-1000 rounded-[50%] h-[13px] w-[13px]`}>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='main-dapp w-full '>
                                    {/* <ConnectWallet /> */}
                                    {road === 1 ?
                                        <ConnectWallet setRoad={setRoad} />
                                        :
                                        road === 2 ?
                                            <SelectNetwork setRoad={setRoad} />
                                            :
                                            road === 3 ?
                                                <>
                                                    <TokenDetails setRoad={setRoad} />
                                                </>
                                                :
                                                road === 4 ?
                                                    <>
                                                        <Done setRoad={setRoad} />
                                                    </>
                                                    :
                                                    null

                                    }
                                </div>
                            </>}

                    </div>
                </div>
                <div className='w-[5%] fixed-height main3'>

                </div>
            </div>

            {/* <div className='flex relative'>
                <div className='w-[10%]'>

                </div>

                <div className='w-[80%]'>

                </div>
                <div className='w-[10%]'>

                </div>
            </div> */}


            <div className='lg:hidden mt-10 flex flex-col items-center'>
                <div>
                    <p className='font-normal text-2xl text-white'>Token Deployer</p>
                </div>


                {verify ?
                    <>
                        <div className='py-16 mt-8  w-full px-10  mob2 min-h-[440px]'>
                            <Verify />
                        </div>
                    </>
                    :
                    <>
                        <div className='mt-10 w-full py-6 pb-12 flex items-center mob1'>
                            <div className='w-[40%] '>
                                {road === 1 ?
                                    <>
                                        <p className='poppins font-semibold text-sm text-white ml-6'>Wallet</p>
                                        <div className='h-[2px] my-1 w-full '>

                                        </div>
                                        <p className='poppins font-normal text-xs ml-6  text-white opacity-50'>Connect your wallet</p>
                                    </>
                                    :
                                    road === 2 ?
                                        <>
                                            <p className='poppins font-semibold text-sm text-white ml-6'>Network</p>
                                            <div className='h-[2px] bg-[#476FFF] my-1 w-full '>

                                            </div>
                                            <p className='poppins font-normal text-xs ml-6  text-white opacity-50'>Select your network</p>
                                        </>
                                        :
                                        road === 3 ?
                                            <>
                                                <p className='poppins font-semibold text-sm text-white ml-6'>Tokens Details</p>
                                                <div className='h-[2px] bg-[#476FFF] my-1 w-full '>

                                                </div>
                                                <p className='poppins font-normal text-xs ml-6  text-white opacity-50'>Select your Token</p>
                                            </>
                                            :
                                            road === 4 ?
                                                <>
                                                    <p className='poppins font-semibold text-sm text-white ml-6'>Done</p>
                                                    <div className='h-[2px] bg-[#476FFF] my-1 w-full '>

                                                    </div>
                                                    <p className='poppins font-normal text-xs ml-6  text-white opacity-50'>Well done !</p>
                                                </>
                                                :
                                                null
                                }
                            </div>


                            <div className='flex w-[60%] items-center'>
                                <div className='border h-[54px] w-[54px] border-[#476FFF] bg-[#132448] flex justify-center items-center rounded-[50%] '>
                                    {road === 1 ?
                                        <>
                                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1688 2.63023H4.89321C3.19831 2.63023 1.82432 4.00422 1.82432 5.69912V13.8828C1.82432 15.5777 3.19831 16.9517 4.89321 16.9517H17.1688C18.8636 16.9517 20.2376 15.5777 20.2376 13.8828H12.3949C10.135 13.8828 8.30305 12.0508 8.30305 9.79098C8.30305 7.53111 10.135 5.69913 12.3949 5.69913H20.2376V5.69912C20.2376 4.00422 18.8637 2.63023 17.1688 2.63023ZM4.89321 0.925293C2.2567 0.925293 0.119385 3.06261 0.119385 5.69912V13.8828C0.119385 16.5193 2.2567 18.6566 4.89321 18.6566H17.1688C19.8053 18.6566 21.9426 16.5193 21.9426 13.8828V5.69912C21.9426 3.06261 19.8053 0.925293 17.1688 0.925293H4.89321ZM20.2376 7.40407H12.3949C11.0766 7.40407 10.008 8.47273 10.008 9.79098C10.008 11.1092 11.0766 12.1779 12.3949 12.1779H20.2376V7.40407ZM12.3949 9.10896C12.0182 9.10896 11.7129 9.41429 11.7129 9.79093C11.7129 10.1676 12.0182 10.4729 12.3949 10.4729H15.1228C15.4994 10.4729 15.8047 10.1676 15.8047 9.79093C15.8047 9.41429 15.4994 9.10896 15.1228 9.10896H12.3949Z" fill="#476FFF" />
                                            </svg>
                                        </>
                                        :
                                        road === 2 ?
                                            <>
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.9596 3.29508L11.0404 0.530351C10.4197 0.182871 9.7161 0 9 0C8.2839 0 7.58033 0.182871 6.95955 0.530351L2.04045 3.29508C1.42086 3.64457 0.906344 4.1462 0.548287 4.74985C0.19023 5.35351 0.00117202 6.03805 0 6.73509V12.2645C0.00119351 12.9617 0.190253 13.6463 0.548301 14.2501C0.906349 14.8539 1.42086 15.3557 2.04045 15.7054L6.95955 18.4693C7.58025 18.817 8.28385 19 9 19C9.71615 19 10.4197 18.817 11.0404 18.4693L15.9596 15.7054C16.5791 15.3557 17.0937 14.8539 17.4517 14.2501C17.8097 13.6463 17.9988 12.9617 18 12.2645V6.73509C17.9988 6.03805 17.8098 5.35351 17.4517 4.74985C17.0937 4.1462 16.5791 3.64457 15.9596 3.29508ZM7.77573 1.90715C8.14796 1.69797 8.57019 1.58784 9 1.58784C9.42981 1.58784 9.85204 1.69797 10.2243 1.90715L15.1434 4.67108C15.2681 4.74783 15.3853 4.83559 15.4935 4.93325L10.4389 7.77345C10.0013 8.019 9.5051 8.14826 9 8.14826C8.4949 8.14826 7.99867 8.019 7.56108 7.77345L2.50648 4.93325C2.61468 4.83559 2.73189 4.74783 2.85662 4.67108L7.77573 1.90715ZM2.85662 14.3286C2.48461 14.1187 2.17573 13.8175 1.96088 13.455C1.74603 13.0925 1.63274 12.6815 1.63236 12.263V6.73509C1.63802 6.59197 1.65743 6.44967 1.69031 6.31006L6.7449 9.15025C7.1913 9.39742 7.67803 9.56807 8.18382 9.65474V17.2569C8.04284 17.2149 7.90621 17.1601 7.77573 17.0933L2.85662 14.3286ZM16.3676 12.263C16.3673 12.6815 16.254 13.0925 16.0391 13.455C15.8243 13.8175 15.5154 14.1187 15.1434 14.3286L10.2243 17.0933C10.0938 17.1601 9.95716 17.2149 9.81618 17.2569V9.65474C10.322 9.56807 10.8087 9.39742 11.2551 9.15025L16.3097 6.31006C16.3426 6.44967 16.362 6.59197 16.3676 6.73509V12.263Z" fill="#476FFF" />
                                                </svg>

                                            </>
                                            :
                                            road === 3 ?
                                                <>
                                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11.1941" r="9.8806" stroke="#476FFF" stroke-width="2" />
                                                        <path d="M10.0059 8.37305L12.2089 10.4128L9.79102 12.4029" stroke="#476FFF" stroke-width="2" stroke-linecap="square" />
                                                    </svg>

                                                </>
                                                :
                                                road === 4 ?
                                                    <>
                                                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.2083 6.36012C17.9984 6.36012 17.797 6.43475 17.6485 6.56759C17.5001 6.70042 17.4167 6.88059 17.4167 7.06845V10.625H14.25C13.6201 10.625 13.016 10.8489 12.5706 11.2474C12.1252 11.6459 11.875 12.1864 11.875 12.75V15.5833H3.95833C3.32844 15.5833 2.72435 15.3594 2.27895 14.9609C1.83355 14.5624 1.58333 14.0219 1.58333 13.4583V3.54166C1.58333 2.97808 1.83355 2.43758 2.27895 2.03906C2.72435 1.64055 3.32844 1.41667 3.95833 1.41667H11.1166C11.3265 1.41667 11.5279 1.34204 11.6764 1.2092C11.8248 1.07636 11.9082 0.896194 11.9082 0.708333C11.9082 0.520471 11.8248 0.340304 11.6764 0.207466C11.5279 0.0746277 11.3265 0 11.1166 0L3.95833 0C2.9089 0.00112473 1.90282 0.374624 1.16076 1.03857C0.418698 1.70252 0.00125705 2.6027 0 3.54166L0 13.4583C0.00125705 14.3973 0.418698 15.2975 1.16076 15.9614C1.90282 16.6254 2.9089 16.9989 3.95833 17H12.9382C13.4583 17.0013 13.9734 16.9103 14.4539 16.7323C14.9345 16.5543 15.3707 16.2928 15.7375 15.963L17.8402 14.0802C18.2089 13.7522 18.5013 13.362 18.7003 12.9322C18.8994 12.5024 19.0013 12.0415 19 11.5763V7.06845C19 6.88059 18.9166 6.70042 18.7681 6.56759C18.6196 6.43475 18.4183 6.36012 18.2083 6.36012ZM14.6181 14.9614C14.2999 15.2454 13.8974 15.4421 13.4583 15.5281V12.75C13.4583 12.5621 13.5417 12.382 13.6902 12.2491C13.8387 12.1163 14.04 12.0417 14.25 12.0417H17.3573C17.2593 12.4337 17.0398 12.7931 16.7239 13.0787L14.6181 14.9614Z" fill="#476FFF" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5031 1.759C16.8258 2.06558 16.8389 2.57572 16.5323 2.89844L8.87556 10.9581C8.72587 11.1157 8.51889 11.2061 8.30156 11.2089C8.08424 11.2117 7.87501 11.1266 7.72133 10.9729L4.09446 7.34607C3.77971 7.03132 3.77971 6.52101 4.09446 6.20625C4.40921 5.8915 4.91952 5.8915 5.23428 6.20625L8.27643 9.24841L15.3636 1.78821C15.6702 1.4655 16.1803 1.45242 16.5031 1.759Z" fill="#476FFF" />
                                                        </svg>
                                                    </>
                                                    :
                                                    null
                                    }

                                </div>
                                {road === 1 ?
                                    <>
                                        <div className='h-[1px] w-[80%] bg-[#476FFF4D]'>

                                        </div>
                                    </>
                                    :
                                    road === 2 ?
                                        <>
                                            <div className='h-[1px] w-[80%] bg-[#476FFF4D]'>

                                            </div>

                                        </>
                                        :
                                        road === 3 ?
                                            <>
                                                <div className='h-[1px] w-[80%] bg-[#476FFF4D]'>

                                                </div>

                                            </>
                                            :
                                            road === 4 ?
                                                <>

                                                </>
                                                :
                                                null
                                }

                            </div>
                        </div>

                        <div className={`${road === 1  ? 'py-16  w-full px-10  mob2new min-h-[440px]' : 'py-16  w-full px-10  mob2 min-h-[440px]'}`} >
                            {/* <div className='w-full h-[800px] bg-black'>

                    </div> */}
                            {road === 1 ?
                                <ConnectWallet setRoad={setRoad} />
                                :
                                road === 2 ?
                                    <SelectNetwork setRoad={setRoad} />
                                    :
                                    road === 3 ?
                                        <>
                                            <TokenDetails setRoad={setRoad} />
                                        </>
                                        :
                                        road === 4 ?
                                            <>
                                                <Done setRoad={setRoad} />
                                            </>
                                            :
                                            null

                            }


                        </div>
                    </>

                }


                <div className='w-full lg:hidden py-6 mt-20 flex bg-[#475AFF] justify-center gap-6'>
                    <div>
                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7557 3.76345C30.5693 4.25591 29.3434 4.59684 27.9988 4.74837C29.3434 3.99074 30.3716 2.74064 30.8461 1.30114C29.5806 2.02089 28.1965 2.55123 26.6938 2.81641C25.5074 1.60419 23.8069 0.846558 21.9482 0.846558C18.3495 0.846558 15.4231 3.6498 15.4231 7.09704C15.4231 7.5895 15.4626 8.04408 15.5812 8.53654C10.1634 8.27137 5.3783 5.80906 2.17505 2.02089C1.6214 2.93005 1.30502 4.02862 1.30502 5.16507C1.30502 7.32433 2.45187 9.25629 4.19191 10.3549C3.12416 10.317 2.1355 10.0518 1.22594 9.55935C1.22594 9.59723 1.22594 9.59723 1.22594 9.63511C1.22594 12.6656 3.48007 15.1658 6.44604 15.7341C5.8924 15.8856 5.33875 15.9614 4.74556 15.9614C4.31055 15.9614 3.91508 15.9235 3.51962 15.8477C4.35009 18.31 6.76241 20.1283 9.60975 20.1662C7.39515 21.833 4.58737 22.8179 1.5423 22.8179C1.0282 22.8179 0.514102 22.7801 0 22.7422C2.88688 24.5226 6.28786 25.5454 9.96566 25.5454C21.9482 25.5454 28.4733 16.0371 28.4733 7.81679C28.4733 7.55162 28.4733 7.28644 28.4733 7.02127C29.7784 6.11211 30.8857 5.01354 31.7557 3.76345Z" fill="white" />
                        </svg>

                    </div>
                    <div>
                        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.5118 0.949232L1.60912 11.3943C0.743717 11.7325 0.781347 12.9723 1.68437 13.2353L8.53232 15.2642L11.0909 23.3423C11.3543 24.2064 12.4454 24.4319 13.0475 23.7931L16.5843 20.1862L23.5075 25.2585C24.3729 25.8972 25.577 25.4087 25.7651 24.3943L30.3555 2.45212C30.5812 1.43767 29.5277 0.535938 28.5118 0.949232ZM25.1254 5.79605L12.6336 16.8423C12.5207 16.955 12.4454 17.1053 12.4078 17.2556L11.9187 21.5388C11.881 21.6891 11.6929 21.6891 11.6553 21.5764L9.66111 15.1891C9.58585 14.8885 9.69874 14.5879 9.96212 14.4377L24.7116 5.30761C25.0878 5.08218 25.4265 5.53304 25.1254 5.79605Z" fill="white" />
                        </svg>

                    </div>
                    <div>
                        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8714 20.9797C10.982 20.4087 10.8714 20.6228 11.3504 20.4087C12.0873 20.5157 12.4189 20.9797 13.5243 21.3366C15.0717 21.9076 17.7246 21.8005 19.3089 21.0868C20.3774 20.7299 20.6353 19.909 21.4828 20.7299C20.7459 23.5493 12.1978 23.4066 10.8714 20.9797ZM26.42 1.60048C28.8149 0.779625 29.6623 4.27716 27.6359 4.88388C25.3515 5.56197 24.0251 2.42133 26.42 1.60048ZM17.0245 7.7747L18.7194 2.06444L23.9145 3.09942C24.1724 3.8132 24.283 5.66904 26.5674 6.02593C28.2622 6.38282 29.5886 5.20508 29.8097 4.02734C30.7677 0.743936 26.1989 -1.32604 24.283 2.02875L18.0193 0.851004L15.735 7.63194C12.8611 7.88177 9.83977 8.34573 7.29747 9.63054C5.86052 10.5585 6.70795 10.2016 5.23415 9.63054C3.0603 8.80969 1.2549 10.2016 0.665386 11.4864C-0.292582 13.592 0.923302 14.8768 1.9918 15.9118C1.88127 23.4779 10.0608 26.2974 16.6929 26.1903C20.4143 26.0832 23.9145 25.0126 26.4568 23.2638C31.6519 19.5164 29.8466 16.7327 30.5466 15.6977C30.5466 15.6977 33.4205 13.3779 31.2835 10.8083C30.694 10.0945 29.4781 9.30934 27.8938 9.52347C25.6094 9.77329 27.3043 10.8083 24.6514 9.52347C23.0671 8.73831 19.0878 7.4535 17.0245 7.7747ZM20.5248 13.2708C22.9197 12.557 24.2461 16.3044 21.8512 17.2323C19.4563 18.0532 17.6509 15.0196 19.7879 13.6277C20.0458 13.5207 20.2669 13.3779 20.5248 13.2708ZM10.6504 13.3779C13.3032 12.3429 14.6296 16.1617 12.3452 17.1253C10.9083 17.6963 9.80293 17.0182 9.47132 16.0903C8.84496 14.6627 9.69239 13.7348 10.6504 13.3779ZM27.1569 10.951C28.8517 9.45209 32.5731 12.2358 30.0308 14.6984C29.6623 14.3415 29.1833 13.3065 28.7044 12.5927C28.2254 12.0931 27.3779 11.2722 27.1569 10.951ZM2.21287 14.6627C0.0390238 12.6641 2.69186 9.4164 5.23415 10.9153L3.53929 12.6641C2.83924 13.5207 2.69186 14.1988 2.21287 14.6627Z" fill="white" />
                        </svg>

                    </div>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6619 0C16.0142 0 16.4324 0.0123379 17.7476 0.0740277C19.0616 0.135717 19.9561 0.341762 20.7433 0.647743C21.5576 0.961127 22.2436 1.38555 22.9296 2.07031C23.557 2.68708 24.0424 3.43315 24.3521 4.2566C24.6569 5.04252 24.8642 5.93826 24.9259 7.25225C24.9839 8.56748 24.9999 8.98573 24.9999 12.338C24.9999 15.6902 24.9876 16.1084 24.9259 17.4237C24.8642 18.7377 24.6569 19.6322 24.3521 20.4193C24.0433 21.2432 23.5577 21.9895 22.9296 22.6056C22.3126 23.2328 21.5666 23.7182 20.7433 24.0282C19.9574 24.3329 19.0616 24.5402 17.7476 24.6019C16.4324 24.6599 16.0142 24.6759 12.6619 24.6759C9.30971 24.6759 8.89145 24.6636 7.57623 24.6019C6.26223 24.5402 5.36773 24.3329 4.58057 24.0282C3.7568 23.7191 3.0106 23.2335 2.39428 22.6056C1.76678 21.9889 1.28132 21.2428 0.971717 20.4193C0.665736 19.6334 0.459692 18.7377 0.398002 17.4237C0.340014 16.1084 0.323975 15.6902 0.323975 12.338C0.323975 8.98573 0.336312 8.56748 0.398002 7.25225C0.459692 5.93703 0.665736 5.04376 0.971717 4.2566C1.28046 3.43264 1.76604 2.68637 2.39428 2.07031C3.01078 1.44259 3.75692 0.957092 4.58057 0.647743C5.36773 0.341762 6.261 0.135717 7.57623 0.0740277C8.89145 0.0160393 9.30971 0 12.6619 0ZM12.6619 6.16898C11.0258 6.16898 9.45671 6.81892 8.29981 7.97583C7.1429 9.13274 6.49295 10.7018 6.49295 12.338C6.49295 13.9741 7.1429 15.5432 8.29981 16.7001C9.45671 17.857 11.0258 18.5069 12.6619 18.5069C14.298 18.5069 15.8672 17.857 17.0241 16.7001C18.181 15.5432 18.8309 13.9741 18.8309 12.338C18.8309 10.7018 18.181 9.13274 17.0241 7.97583C15.8672 6.81892 14.298 6.16898 12.6619 6.16898ZM20.6816 5.86053C20.6816 5.4515 20.5191 5.05923 20.2299 4.77C19.9407 4.48077 19.5484 4.31828 19.1394 4.31828C18.7303 4.31828 18.3381 4.48077 18.0488 4.77C17.7596 5.05923 17.5971 5.4515 17.5971 5.86053C17.5971 6.26956 17.7596 6.66183 18.0488 6.95106C18.3381 7.24029 18.7303 7.40277 19.1394 7.40277C19.5484 7.40277 19.9407 7.24029 20.2299 6.95106C20.5191 6.66183 20.6816 6.26956 20.6816 5.86053ZM12.6619 8.63657C13.6436 8.63657 14.5851 9.02654 15.2792 9.72068C15.9734 10.4148 16.3633 11.3563 16.3633 12.338C16.3633 13.3196 15.9734 14.2611 15.2792 14.9552C14.5851 15.6494 13.6436 16.0393 12.6619 16.0393C11.6803 16.0393 10.7388 15.6494 10.0447 14.9552C9.35051 14.2611 8.96054 13.3196 8.96054 12.338C8.96054 11.3563 9.35051 10.4148 10.0447 9.72068C10.7388 9.02654 11.6803 8.63657 12.6619 8.63657Z" fill="white" />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainDapp;