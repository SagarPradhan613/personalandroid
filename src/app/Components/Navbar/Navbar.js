'use client'
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { usePathname } from 'next/navigation'


const Navbar = ({ handleToggleModal }) => {
    const pathname = usePathname();
    const [isDapp, setIsDapp] = useState(false);

    useEffect(() => {
        if (pathname === '/dapp') {
            setIsDapp(true);
        } else {
            setIsDapp(false);
        }
    }, [])


    return (
        <>
            {/* <div  className='lg:bg-[transparent] absolute w-full md:flex justify-between py-3 lg:px-14 hidden'> */}
            <div className={`${isDapp ? 'lg:bg-[transparent]  w-full md:flex justify-between py-3 lg:px-14 hidden' : 'lg:bg-[transparent] absolute w-full md:flex justify-between py-3 lg:px-14 hidden'}`}>
                <div className='flex justify-around items-center text-white '>
                    <div className='flex relative z-50 justify-around items-center font-normal lg:text-sm  md:text-sm'>
                        <div className='flex transform hover:scale-110 transition-transform ease-in duration-300 justify-center items-center'>
                            <a href='/'>
                                <img src='/Images/logo.png' className='max-w-[105px]'></img>
                            </a>
                        </div>
                        {isDapp ?
                            <>
                                <></>
                            </>
                            :
                            <>
                                <div className='ml-20  cursor-pointer transform hover:scale-110 transition-transform ease-in duration-300'>What is AnDroid?</div>
                                <div className='mx-10  cursor-pointer transform hover:scale-110 transition-transform ease-in duration-300'>Features</div>
                                <div className='transform hover:scale-110 transition-transform ease-in duration-300 cursor-pointer'>System</div>
                            </>

                        }
                    </div>
                </div>

                <div className='flex gap-3 justify-center items-center  py-3 '>
                    {/* <svg className='hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300 relative lg:w-[162px] lg:h-[46px] md:w-[150px] md:h-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 46" fill="none">
                        <path d="M9.07526 4.32506C9.61781 2.08088 11.6264 0.5 13.9353 0.5H156.647C159.884 0.5 162.268 3.52875 161.507 6.67494L152.925 42.1749C152.382 44.4191 150.374 46 148.065 46H5.35283C2.116 46 -0.267776 42.9713 0.492843 39.8251L9.07526 4.32506Z" fill="#FF0000" />
                    </svg>
                    <p className='absolute text-white text-xs md:text-sm lg:text-base'>Open DAPP</p> */}
                    {isDapp ?
                        <>
                            <div className='relative z-50 transform hover:scale-110 transition-transform ease-in duration-300'>
                                <div className='bg-[#476fff]  text-white md:px-8 md:py-2 px-6 py-2  rounded-[5px] ' >
                                    <p className='skew-div md:text-lg text-sm font-medium'>
                                        Verify
                                    </p>
                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>

                    }

                    <div className='relative z-50 transform hover:scale-110 transition-transform ease-in duration-300'>
                        <div className='bg-[#476fff]  text-white md:px-8 md:py-2 px-6 py-2  rounded-[5px] ' >
                            <p className='skew-div md:text-lg text-sm font-medium'>
                                Get Stared
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='custom-div absolute top-0 z-50
            flex md:hidden bg-black py-2 px-4
            '>
                <div className='flex justify-center items-center'>
                    <img src='Images/jollyheaderlogohd.png' ></img>
                </div>
                <div className='flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none" onClick={() => { handleToggleModal() }}>
                        <rect width="21" height="3" rx="1" fill="white" />
                        <rect y="5" width="21" height="3" rx="1" fill="white" />
                        <rect y="10" width="21" height="3" rx="1" fill="white" />
                    </svg>
                </div>
            </div> */}
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

export default Navbar