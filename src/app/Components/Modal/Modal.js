'use client'
import React, { useState, useEffect,useContext } from 'react'
import { usePathname } from 'next/navigation'
import { VerifyContext } from '@/app/dapp/context/VerifyContext';


const Modal = ({ isOpen, onClose, setOpenPrivacy, handleToggleModal }) => {
    const [userChoice, setUserChoice] = useState(null);
    const [activeModal, setActiveModal] = useState(false);
    const pathname = usePathname();
    const [isDapp, setIsDapp] = useState(false);
    const { verify, setVerify } = useContext(VerifyContext);

    useEffect(() => {
        if (pathname === '/dapp') {
            setIsDapp(true);
        } else {
            setIsDapp(false);
        }
    }, [])

    const handleAccept = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'accept');
        // setUserChoice('accept');
        // onClose();
        setOpenPrivacy(false)
    };

    const handleDecline = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'decline');
        // setUserChoice('decline');
        // onClose();
        setOpenPrivacy(false);
    };

    // useEffect(() => {

    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //         document.documentElement.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //         document.documentElement.style.overflow = 'auto';
    //     }

    //     return () => {
    //         document.body.style.overflow = 'auto';
    //         document.documentElement.style.overflow = 'auto';
    //     };
    // }, [isOpen]);



    if (!isOpen || userChoice) {
        return null; // Do not render the modal if user has made a choice or it's not open
    }
    return (
        <div className="modal lg:hidden flex justify-end fixed inset-0   bg-black bg-opacity-25 z-[100] backdrop-blur-sm">

            <div className='bg-white h-screen w-[80vw] relative py-20  px-10 flex flex-col pt-20'>
                <button
                    onClick={() => { handleToggleModal() }}
                    className="absolute top-4 right-6 text-black hover:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <img src='Images/blacktextlogo.png' className='z-10 hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300' ></img>
                </div>
                <div className='h-[1px]  w-[100%] bg-black mt-6'>
                </div>
                <div className="flex flex-col justify-between h-full lg:space-x-10 space-y-5 align-middle items-center mt-16 text-center">
                    <div className='flex flex-col gap-6'>
                        <div>
                            <a href="/" className=" text-sm font-semibold text-black hover:transform hover:scale-110 transform transition-transform duration-300">What is AnDroid?</a>
                        </div>
                        <div>
                            <a href="/" target='_blank' className="text-sm font-semibold hover:transform hover:scale-110 transform transition-transform duration-300">Features</a>
                        </div>
                        <div>
                            <a href="/" className="text-sm font-semibold hover:transform hover:scale-110 transform transition-transform duration-300">System</a>
                        </div>
                    </div>

                    {isDapp ?

                        <>
                            <div className='flex gap-4   flex-col justify-center items-center'>
                                <div className='text-center font-normal text-xs opacity-50'>
                                    <p>Contract already Deployed? <br/> Verify here!</p>
                                </div>

                                <div className=' hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300'>
                                   
                                        <div onClick={()=>{setVerify(true)}} className='bg-[#476FFF] min-w-[147px] text-white md:px-6 md:py-2 px-6 py-3  rounded-[5px]  ' >
                                            <p className='md:text-lg text-sm font-medium'>
                                               Verify
                                            </p>
                                        </div>
                                
                                </div>
                                <div className=' hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300'>
                                    <a href='/dapp'>
                                        <div className='bg-[#476FFF] min-w-[147px] text-white md:px-6 md:py-2 px-6 py-3  rounded-[5px] ' >
                                            <p className='md:text-lg text-sm font-medium'>
                                               Home
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </>

                        :
                        <>
                            <div className='flex justify-center items-center'>

                                <div className=' hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300'>
                                    <a href='/dapp'>
                                        <div className='bg-[#476FFF] text-white md:px-6 md:py-2 px-6 py-2  rounded-[5px] mt-20 ' >
                                            <p className='md:text-lg text-sm font-medium'>
                                                Open DAPP
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </>

                    }


                </div>
            </div>
        </div>
    );
};

export default Modal;
