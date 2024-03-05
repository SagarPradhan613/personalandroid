import './MainDapp.css'
import ConnectWallet from '../DappComponents/ConnectWallet/ConnectWallet';
import React, { useState, useEffect } from 'react';
import SelectNetwork from '../DappComponents/SelectNetwork';
import TokenDetails from '../DappComponents/TokenDetails';

const MainDapp = () => {
    const [road, setRoad] = useState(1);

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

console.log(road)

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
                        <p className='font-normal text-3xl -mt-20 text-white ml-36'>Token Deployer</p>
                    </div>


                    <div className='w-full gap-12 flex py-16 px-10'>
                        <div className='roadmap relative py-16 w-[40%] '>
                            <div className='h-full absolute z-10 top-16 left-8 flex '>
                                <div className=' h-[78%] w-[2px]  bg-[#476FFF4D]'>

                                </div>
                            </div>

                            <div className='h-full absolute z-10 top-24 right-[0.4rem] flex '>
                                <div className=' h-[68%] w-[2px]  bg-[#476FFF4D]'>

                                </div>
                            </div>

                            {/* {road === 1 ?
                                <>
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
                                    </div>
                                </>
                                :
                                road === 2 ?
                                    <>
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
                                                <div className='border-[2px] bg-[#476FFF] border-[#476FFF] rounded-[50%] h-[13px] w-[13px]'>

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
                                                <div className='border-[2px] border-[#476FFF] bg-black rounded-[50%] h-[13px] w-[13px]'>

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
                                        </div>
                                    </>
                                    :
                                    road === 3 ?
                                        <>
                                        </>
                                        :
                                        road === 4 ?
                                            <>
                                            </>
                                            :
                                            null



                            } */}

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
                            </div>
                        </div>

                        <div className='main-dapp w-full '>
                            {/* <ConnectWallet /> */}
                            {road === 1 ?
                                <ConnectWallet />
                                :
                                road === 2 ?
                                    <SelectNetwork />
                                    :
                                    road === 3 ?
                                        <>
                                           <TokenDetails/>
                                        </>
                                        :
                                        road === 4 ?
                                            <>
                                                <p>4</p>
                                            </>
                                            :
                                            null

                            }
                        </div>
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

                <div className='mt-10 w-full py-6 pb-12 flex items-center mob1'>
                    <div className='w-[40%] '>
                        <p className='poppins font-semibold text-sm text-white ml-6'>Wallet</p>
                        <div className='h-[2px] my-1 w-full '>

                        </div>
                        <p className='poppins font-normal text-xs ml-6  text-white'>Connect your wallet</p>
                    </div>


                    <div className='flex w-[60%] items-center'>
                        <div className='border h-[54px] w-[54px] border-[#476FFF] bg-[#132448] flex justify-center items-center rounded-[50%] '>
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1688 2.63023H4.89321C3.19831 2.63023 1.82432 4.00422 1.82432 5.69912V13.8828C1.82432 15.5777 3.19831 16.9517 4.89321 16.9517H17.1688C18.8636 16.9517 20.2376 15.5777 20.2376 13.8828H12.3949C10.135 13.8828 8.30305 12.0508 8.30305 9.79098C8.30305 7.53111 10.135 5.69913 12.3949 5.69913H20.2376V5.69912C20.2376 4.00422 18.8637 2.63023 17.1688 2.63023ZM4.89321 0.925293C2.2567 0.925293 0.119385 3.06261 0.119385 5.69912V13.8828C0.119385 16.5193 2.2567 18.6566 4.89321 18.6566H17.1688C19.8053 18.6566 21.9426 16.5193 21.9426 13.8828V5.69912C21.9426 3.06261 19.8053 0.925293 17.1688 0.925293H4.89321ZM20.2376 7.40407H12.3949C11.0766 7.40407 10.008 8.47273 10.008 9.79098C10.008 11.1092 11.0766 12.1779 12.3949 12.1779H20.2376V7.40407ZM12.3949 9.10896C12.0182 9.10896 11.7129 9.41429 11.7129 9.79093C11.7129 10.1676 12.0182 10.4729 12.3949 10.4729H15.1228C15.4994 10.4729 15.8047 10.1676 15.8047 9.79093C15.8047 9.41429 15.4994 9.10896 15.1228 9.10896H12.3949Z" fill="#476FFF" />
                            </svg>
                        </div>
                        <div className='h-[1px] w-[80%] bg-[#476FFF4D]'>

                        </div>
                    </div>

                </div>

                <div className=' w-full px-10 py-10 mob2 min-h-[440px]'>
                    {/* <div className='w-full h-[800px] bg-black'>

                    </div> */}
                    {road === 1 ?
                        <ConnectWallet />
                        :
                        road === 2 ?
                            <SelectNetwork />
                            :
                            road === 3 ?
                                <>
                                    <p>3</p>
                                </>
                                :
                                road === 4 ?
                                    <>
                                        <p>4</p>
                                    </>
                                    :
                                    null

                    }


                </div>

            </div>
        </>
    )
}

export default MainDapp;