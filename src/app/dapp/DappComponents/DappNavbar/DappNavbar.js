'use client'
import React, { useState, useEffect, useContext } from 'react'
import './DappNavbar.css';
import { usePathname } from 'next/navigation'
import { VerifyContext } from '../../context/VerifyContext';

const DappNabar = ({ handleToggleModal }) => {
    const pathname = usePathname();
    const [isDapp, setIsDapp] = useState(false);
    const { verify, setVerify } = useContext(VerifyContext);
    return (
        <>
            <div className= 'lg:bg-[transparent]  w-full md:flex justify-between py-3 lg:px-14 hidden' >
                <div className='flex justify-around items-center text-white '>
                    <div className='flex relative z-50 justify-around items-center font-normal lg:text-sm  md:text-sm'>
                        <div className='flex transform hover:scale-110 transition-transform ease-in duration-300 justify-center items-center'>
                            <a href='/'>
                                <img src='/Images/logo.png' className='max-w-[180px]'></img>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3 justify-center items-center  py-3 '>


                    <div className='relative z-50 transform hover:scale-110 transition-transform ease-in duration-300'>
                        <div onClick={() => { setVerify(true) }} className='bg-[#476fff]  text-white md:px-8 md:py-2 px-6 py-2  rounded-[5px] ' >
                            <p className='skew-div md:text-lg text-sm font-medium'>
                                Verify
                            </p>
                        </div>
                    </div>



                    <div className='relative z-50 transform hover:scale-110 transition-transform ease-in duration-300'>
                        <div className='bg-[#476fff]  text-white md:px-8 md:py-2 px-6 py-2  rounded-[5px] ' >
                            <p className='skew-div md:text-lg text-sm font-medium'>
                                Get stared
                            </p>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className='relative bg-[#475AFF1A] border-[8px] rounded-b-[20px] border-[#041534] md:hidden flex w-full justify-between px-4 py-7'>
                    <div className=''>
                        <img src='Images/logo.png' className='max-w-[160px]'></img>
                    </div>
                    <div className='absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 right-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none" onClick={() => { handleToggleModal() }}>
                            <rect width="21" height="3" rx="1" fill="white" />
                            <rect y="5" width="21" height="3" rx="1" fill="white" />
                            <rect y="10" width="21" height="3" rx="1" fill="white" />
                        </svg>
                    </div>
                </div>
        </>
    )
}

export default DappNabar