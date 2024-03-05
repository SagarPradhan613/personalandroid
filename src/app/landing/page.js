import './landing.css';


const Landing = () => {
    return (
        <>
            {/* hero section */}
            <div className="hero-section -mt-8 lg:mt-0">
                <div className="lg:flex hidden absolute w-full  justify-end">
                    {/* <div className="mt-0">
                        <div>
                            <img className="opacity-40" src="/Images/herotop.png"></img>
                        </div>
                        <div className="mt-6  ml-44">
                            <img className="w-[]" src="/Images/herobottom.png"></img>
                        </div>
                    </div>
                    <div>
                        <img src="/Images/heroright.png"></img>
                    </div> */}
                    <div >
                        <img src='/Images/wholeherobg.png'></img>
                    </div>
                </div>
                <div className="lg:px-16 px-8 py-10 relative z-30  lg:pt-24 lg:pb-36">
                    <div className="flex gap-8 items-center mt-8 lg:mt-10">
                        <div className="flex items-center">
                            <p className="text-white font-normal responsive-hero-text lg:text-[140px] whitespace-nowrap">Unlock the</p>
                        </div>
                        <div className="border border-[#476FFF] gap-6 rounded-[10px] transform hover:scale-110 transition-transform ease-in duration-300 lg:flex hidden items-center p-8">
                            <p className="text-white lg:text-3xl text-sm font-normal">open launcher</p>
                            <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M57.0607 13.0607C57.6465 12.4749 57.6465 11.5251 57.0607 10.9393L47.5147 1.39339C46.9289 0.807607 45.9792 0.807607 45.3934 1.39339C44.8076 1.97918 44.8076 2.92893 45.3934 3.51472L53.8787 12L45.3934 20.4853C44.8076 21.0711 44.8076 22.0208 45.3934 22.6066C45.9792 23.1924 46.9289 23.1924 47.5147 22.6066L57.0607 13.0607ZM1.31134e-07 13.5L56 13.5L56 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="#476FFF" />
                            </svg>
                        </div>
                    </div>
                    <div className="lg:-mt-16 ">
                        <div className="">
                            <p className=" font-normal responsive-hero-text lg:text-[130px] text-[#475AFF] whitespace-nowrap">Future of Tokens</p>
                        </div>
                    </div>

                    <div className="border max-w-[173px] border-[#476FFF] gap-3 rounded-[10px] flex lg:hidden mt-10 mb-6 items-center py-2 px-2 transform hover:scale-110 transition-transform ease-in duration-300 ">
                        <p className="text-white lg:text-3xl whitespace-nowrap text-sm font-normal">open launcher</p>
                        <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64644L21.1716 0.464464C20.9763 0.269202 20.6597 0.269202 20.4645 0.464464C20.2692 0.659727 20.2692 0.976309 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.73079 20.9763 7.73079 21.1716 7.53553L24.3536 4.35355ZM4.37114e-08 4.5L24 4.5L24 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#476FFF" />
                        </svg>
                    </div>

                    <div className="lg:flex  mt-6 relative z-[100] transform hover:scale-110 transition-transform ease-in duration-300 hidden items-center lg:gap-6 gap-2 ml-8">
                        <p className="text-[#476FFF] font-normal text-base lg:text-lg">Know more</p>
                        <svg className='know-more-down z-50' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34315C15.4616 7.95262 15.4616 7.31946 15.0711 6.92893C14.6805 6.53841 14.0474 6.53841 13.6569 6.92893L8 12.5858L2.34315 6.92893C1.95262 6.53841 1.31946 6.53841 0.928932 6.92893C0.538408 7.31946 0.538408 7.95262 0.928933 8.34315L7.29289 14.7071ZM7 4.37114e-08L7 14L9 14L9 -4.37114e-08L7 4.37114e-08Z" fill="#476FFF" />
                        </svg>

                    </div>

                    <div className="flex lg:hidden  items-center lg:gap-6 gap-2">
                        <p className="text-[#476FFF] font-normal text-base lg:text-lg">Know more</p>
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64645 9.35355C3.84171 9.54882 4.15829 9.54882 4.35355 9.35355L7.53553 6.17157C7.7308 5.97631 7.7308 5.65973 7.53553 5.46447C7.34027 5.2692 7.02369 5.2692 6.82843 5.46447L4 8.29289L1.17157 5.46447C0.976311 5.2692 0.659728 5.2692 0.464466 5.46447C0.269204 5.65973 0.269204 5.97631 0.464466 6.17157L3.64645 9.35355ZM3.5 0L3.5 9H4.5L4.5 0L3.5 0Z" fill="#476FFF" />
                        </svg>
                    </div>

                </div>
            </div>

            {/* second section */}
            <div className='w-full respponsive-scond-margin hidden  lg:block relative px-6'>
                <div className='absolute z-30 left-0 -top-72'>
                    <img src='/Images/leftmask.png'></img>
                </div>
                <div className='absolute z-30 right-0 -top-80'>
                    <img src='/Images/rightmask.png'></img>
                </div>
                <div className='flex w-full justify-start'>
                    <div className='bg-white top-white-portion w-[88%] p-8 rounded-tl-[20px]'>

                    </div>
                </div>
                <div className='flex w-full -mt-[2px]'>
                    <div className='bg-white relative py-6 w-full items-start px-16 justify- flex rounded-bl-[20px] rounded-tr-[10px]'>

                        <div className='font-normal mt-2 lg:text-7xl pb-16 '>
                            <p>What is</p>
                            <p className='text-[#9747FF] '>Android ?</p>
                        </div>

                        <div className='flex ml-8 justify-start mt-2 items-start responsive-text-width  w-[60%]'>
                            <p className='font-normal lg:text-xl leading-3 lg:leading-8 text-sm poppins opacity-50'>Droid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating straight forward processes with advanced technology, Droid removes the complexities of blockchain and smart contract development. With just a few clicks, users can connect their wallet, choose settings, and launch their own tokens, no coding </p>
                        </div>

                        <div className='right-10  absolute  ml-[13rem]  top-20  z-50 '>
                            <img src='/Images/droid.png'></img>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-end -mt-[30px]'>
                    <div className='bg-white  w-[80%] px-36 flex justify-between bottom-white-portion p-8 rounded-br-[20px]'>
                        <div className='flex gap-4' >
                            <div className='bg-[#eff0f4] transform hover:scale-110 transition-transform ease-in duration-300 relative z-[200] flex justify-center items-center rounded-[50%] h-[70px] w-[70px]'>
                                <img src='/Images/sec1.png' className='w-[30px] h-[30px]'></img>
                            </div>

                            <div className='bg-[#eff0f4] flex justify-center items-center rounded-[50%] h-[70px] w-[70px]'>
                                <img src='/Images/sec2.png' className='w-[30px] h-[30px]'></img>
                            </div>

                            <div className='bg-[#eff0f4] flex justify-center items-center rounded-[50%] h-[70px] w-[70px]'>
                                <img src='/Images/sec3.png' className='w-[30px] h-[30px]'></img>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src='/Images/sec4.png' className='w-[70px]'></img>
                            </div>
                            <div>
                                <img src='/Images/sec5.png' className='w-[70px]'></img>
                            </div>
                            <div>
                                <img src='/Images/sec6.png' className='w-[70px]'></img>
                            </div>
                            <div>
                                <img src='/Images/sec7.png' className='w-[70px]'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='px-16 hidden lg:block -mt-[3rem]'>
                <img src='/Images/barcode.png'></img>
            </div>

            {/* mob sec section */}
            <div className='lg:hidden block relative px-8'>
                <div className='w-full   bg-white py-3 mob-top'>

                </div>
                <div className='bg-white -mt-[1px] py-3 w-full px-6'>
                    <div className='flex justify-between'>
                        <div className='font-normal text-2xl leading-7'>
                            <p>What is</p>
                            <p className='text-[#475AFF]'>AnDroid?</p>
                        </div>


                        <div className='flex gap-4 items-center'>
                            <div className='bg-[#f2f3f4] rounded-[50%] flex justify-center items-center w-[40px] h-[40px]'>
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7773 7.40843L11.0789 7.0001L11.7779 6.59178C12.2633 6.31942 12.6392 5.90273 12.8466 5.40704C12.9764 5.0793 13.0248 4.7278 12.988 4.37962C12.9513 4.03144 12.8303 3.69588 12.6344 3.39878C12.4386 3.10168 12.1731 2.85098 11.8584 2.66599C11.5437 2.48099 11.1882 2.36665 10.8193 2.33176C10.2564 2.2883 9.69424 2.42249 9.22095 2.71325L8.9731 2.8585V2.43384C8.98355 1.84162 8.76168 1.26666 8.35015 0.819474C7.93862 0.372292 7.36648 0.0844532 6.7437 0.0112893C6.4002 -0.0207169 6.0534 0.0155154 5.72563 0.117654C5.39787 0.219792 5.0964 0.385573 4.84062 0.604325C4.58485 0.823076 4.38045 1.08995 4.24058 1.38777C4.1007 1.68558 4.02845 2.00774 4.02848 2.3335V2.8585L3.78125 2.71267C3.30805 2.42109 2.74556 2.28627 2.18229 2.32942C1.81332 2.36401 1.4577 2.47809 1.14283 2.66288C0.827963 2.84767 0.562261 3.09823 0.366209 3.39525C0.170157 3.69227 0.0489903 4.0278 0.0120492 4.376C-0.024892 4.72419 0.0233793 5.07574 0.153142 5.40354C0.360592 5.89938 0.736717 6.31612 1.22241 6.58827L1.9227 7.0001L1.22365 7.40843C0.738276 7.68079 0.362409 8.09748 0.154996 8.59316C0.0249796 8.92116 -0.023432 9.27297 0.0134988 9.62143C0.0504295 9.96989 0.171715 10.3057 0.367991 10.6029C0.564267 10.9001 0.830284 11.1507 1.1455 11.3355C1.46072 11.5202 1.81672 11.6342 2.186 11.6685C2.74761 11.7118 3.30859 11.5782 3.78125 11.2887L4.02848 11.1417V11.6667C4.02848 12.2855 4.28896 12.879 4.75261 13.3166C5.21625 13.7542 5.8451 14 6.50079 14C7.15649 14 7.78533 13.7542 8.24898 13.3166C8.71263 12.879 8.9731 12.2855 8.9731 11.6667V11.1417L9.22033 11.2881C9.69271 11.5778 10.2534 11.7118 10.815 11.669C11.1841 11.6346 11.54 11.5205 11.8551 11.3357C12.1701 11.1509 12.436 10.9002 12.6321 10.603C12.8283 10.3059 12.9495 9.97014 12.9863 9.62175C13.0232 9.27337 12.9747 8.92166 12.8447 8.59375C12.6377 8.09807 12.2623 7.6812 11.7773 7.40843ZM11.5851 9.98556C11.419 10.2371 11.1539 10.416 10.848 10.4831C10.5421 10.5502 10.2205 10.4998 9.95399 10.3431L8.68137 9.59531C8.5877 9.54035 8.48015 9.51005 8.36988 9.50754C8.25962 9.50504 8.15065 9.53043 8.05429 9.58108C7.95793 9.63173 7.87768 9.70579 7.82188 9.79559C7.76608 9.88538 7.73675 9.98763 7.73695 10.0917V11.6667C7.73695 11.9761 7.60671 12.2729 7.37488 12.4916C7.14306 12.7104 6.82864 12.8334 6.50079 12.8334C6.17294 12.8334 5.85852 12.7104 5.6267 12.4916C5.39488 12.2729 5.26464 11.9761 5.26464 11.6667V10.0917C5.26461 9.98773 5.23513 9.88563 5.17923 9.796C5.12334 9.70637 5.04308 9.63247 4.94676 9.58196C4.85043 9.53145 4.74155 9.50616 4.63139 9.50872C4.52123 9.51127 4.4138 9.54157 4.32022 9.59648L3.0476 10.3455C2.91562 10.423 2.76875 10.4753 2.61537 10.4993C2.46198 10.5233 2.3051 10.5185 2.15367 10.4853C2.00223 10.4521 1.85922 10.391 1.73279 10.3056C1.60635 10.2202 1.49898 10.1122 1.4168 9.9876C1.33462 9.86304 1.27924 9.72443 1.25382 9.57967C1.2284 9.43491 1.23344 9.28685 1.26865 9.14393C1.30386 9.00101 1.36855 8.86604 1.45903 8.74672C1.54951 8.62739 1.66401 8.52606 1.79599 8.4485L3.41844 7.49535C3.50788 7.44303 3.58169 7.37003 3.63288 7.28326C3.68406 7.19649 3.71093 7.09883 3.71093 6.99952C3.71093 6.90021 3.68406 6.80255 3.63288 6.71578C3.58169 6.62901 3.50788 6.55601 3.41844 6.50369L1.79599 5.55112C1.52945 5.39448 1.33976 5.14433 1.26865 4.85569C1.19753 4.56705 1.25083 4.26358 1.4168 4.01202C1.58277 3.76047 1.84783 3.58144 2.15367 3.51433C2.4595 3.44721 2.78106 3.49751 3.0476 3.65415L4.32022 4.40197C4.41366 4.45681 4.52093 4.4871 4.63093 4.48973C4.74093 4.49236 4.84968 4.46722 4.94595 4.41692C5.04221 4.36662 5.12251 4.29297 5.17853 4.20359C5.23456 4.11421 5.26428 4.01233 5.26464 3.90848V2.39592C5.25796 2.11193 5.35734 1.83477 5.54536 1.61295C5.73339 1.39114 5.99808 1.2388 6.29312 1.18261C6.47054 1.15407 6.65243 1.16244 6.82608 1.20714C6.99972 1.25184 7.16092 1.33178 7.29842 1.44139C7.43593 1.55099 7.54641 1.68762 7.62215 1.84171C7.6979 1.9958 7.73707 2.16364 7.73695 2.3335V3.90848C7.73708 4.01243 7.76665 4.11446 7.82258 4.204C7.87852 4.29355 7.95879 4.36736 8.0551 4.4178C8.1514 4.46824 8.26024 4.49348 8.37035 4.4909C8.48045 4.48832 8.58783 4.45803 8.68137 4.40314L9.95399 3.6559C10.086 3.57834 10.2328 3.52607 10.3862 3.50208C10.5396 3.47809 10.6965 3.48285 10.8479 3.51608C10.9994 3.54931 11.1424 3.61037 11.2688 3.69576C11.3952 3.78115 11.5026 3.88921 11.5848 4.01377C11.667 4.13833 11.7223 4.27694 11.7478 4.4217C11.7732 4.56646 11.7681 4.71452 11.7329 4.85744C11.6977 5.00036 11.633 5.13533 11.5426 5.25466C11.4521 5.37398 11.3376 5.47531 11.2056 5.55287L9.58314 6.50603C9.4937 6.55834 9.41989 6.63134 9.36871 6.71811C9.31752 6.80488 9.29066 6.90254 9.29066 7.00185C9.29066 7.10116 9.31752 7.19883 9.36871 7.2856C9.41989 7.37236 9.4937 7.44536 9.58314 7.49768L11.2056 8.45083C11.3376 8.52829 11.4522 8.62955 11.5428 8.74884C11.6333 8.86812 11.6981 9.00308 11.7333 9.14599C11.7686 9.28891 11.7736 9.43698 11.7482 9.58174C11.7228 9.7265 11.6673 9.86511 11.5851 9.98964V9.98556Z" fill="#476FFF" />
                                </svg>
                            </div>
                            <div className='bg-[#f2f3f4] rounded-[50%] flex justify-center items-center w-[40px] h-[40px]'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6281 1.33313L4.64188 8.32945C4.37506 8.59522 4.16352 8.91136 4.01952 9.25956C3.87552 9.60776 3.80193 9.98111 3.80299 10.358V11.1287C3.80299 11.2809 3.86336 11.4268 3.97082 11.5344C4.07828 11.6421 4.22403 11.7025 4.37601 11.7025H5.14556C5.5219 11.7036 5.89471 11.6299 6.24241 11.4857C6.5901 11.3415 6.90579 11.1296 7.17117 10.8624L14.1574 3.86608C14.4922 3.52991 14.6803 3.07445 14.6803 2.59961C14.6803 2.12477 14.4922 1.66931 14.1574 1.33313C13.8168 1.00713 13.3638 0.825195 12.8927 0.825195C12.4216 0.825195 11.9686 1.00713 11.6281 1.33313ZM13.3471 3.05467L6.36093 10.051C6.03782 10.3726 5.60112 10.5536 5.14556 10.5548H4.94902V10.358C4.95021 9.90178 5.13099 9.46444 5.45213 9.14087L12.4383 2.14455C12.5607 2.02746 12.7235 1.96212 12.8927 1.96212C13.062 1.96212 13.2247 2.02746 13.3471 2.14455C13.4674 2.26535 13.535 2.429 13.535 2.59961C13.535 2.77022 13.4674 2.93387 13.3471 3.05467Z" fill="#476FFF" />
                                    <path d="M14.1035 6.00453C13.9505 6.00453 13.8038 6.0653 13.6956 6.17348C13.5874 6.28165 13.5266 6.42837 13.5266 6.58136V9.4776H11.2193C10.7604 9.4776 10.3202 9.65992 9.99568 9.98445C9.67115 10.309 9.48884 10.7491 9.48884 11.2081V13.5154H3.72056C3.26161 13.5154 2.82146 13.3331 2.49693 13.0085C2.1724 12.684 1.99008 12.2439 1.99008 11.7849V3.70933C1.99008 3.25038 2.1724 2.81022 2.49693 2.4857C2.82146 2.16117 3.26161 1.97885 3.72056 1.97885H8.93624C9.08922 1.97885 9.23594 1.91808 9.34411 1.8099C9.45229 1.70173 9.51306 1.55501 9.51306 1.40202C9.51306 1.24904 9.45229 1.10232 9.34411 0.994144C9.23594 0.885968 9.08922 0.825195 8.93624 0.825195H3.72056C2.95592 0.826111 2.22286 1.13027 1.68218 1.67095C1.1415 2.21163 0.837342 2.94469 0.836426 3.70933L0.836426 11.7849C0.837342 12.5496 1.1415 13.2826 1.68218 13.8233C2.22286 14.364 2.95592 14.6681 3.72056 14.6691H10.2635C10.6424 14.6701 11.0178 14.5961 11.3679 14.4511C11.718 14.3061 12.0359 14.0932 12.3032 13.8246L13.8352 12.2914C14.1039 12.0242 14.3169 11.7065 14.462 11.3565C14.607 11.0064 14.6812 10.6312 14.6803 10.2523V6.58136C14.6803 6.42837 14.6195 6.28165 14.5113 6.17348C14.4032 6.0653 14.2564 6.00453 14.1035 6.00453ZM11.4875 13.0089C11.2557 13.2403 10.9624 13.4004 10.6425 13.4704V11.2081C10.6425 11.0551 10.7033 10.9084 10.8114 10.8002C10.9196 10.692 11.0663 10.6313 11.2193 10.6313H13.4834C13.412 10.9505 13.2521 11.2432 13.0219 11.4757L11.4875 13.0089Z" fill="#476FFF" />
                                </svg>

                            </div>
                            <div className='bg-[#f2f3f4] rounded-[50%] flex justify-center items-center w-[40px] h-[40px]'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.89243 13.9272C3.74996 13.9271 3.61143 13.8823 3.49804 13.7996C3.38465 13.7169 3.30264 13.6009 3.26456 13.4692C3.22649 13.3376 3.23445 13.1976 3.28722 13.0707C3.33999 12.9439 3.43467 12.837 3.55677 12.7666C5.86602 11.4367 5.86602 8.58068 5.86602 6.87455C5.86602 6.37731 6.07203 5.90043 6.43873 5.54882C6.80543 5.19721 7.30278 4.99968 7.82137 4.99968C8.33996 4.99968 8.8373 5.19721 9.204 5.54882C9.5707 5.90043 9.77671 6.37731 9.77671 6.87455C9.77671 7.0403 9.70804 7.19926 9.58581 7.31646C9.46357 7.43367 9.29779 7.49951 9.12493 7.49951C8.95206 7.49951 8.78628 7.43367 8.66405 7.31646C8.54182 7.19926 8.47315 7.0403 8.47315 6.87455C8.47315 6.7088 8.40448 6.54984 8.28224 6.43264C8.16001 6.31544 7.99423 6.2496 7.82137 6.2496C7.6485 6.2496 7.48272 6.31544 7.36049 6.43264C7.23826 6.54984 7.16959 6.7088 7.16959 6.87455C7.16959 8.7163 7.16959 12.1454 4.22745 13.8384C4.12621 13.8966 4.01042 13.9272 3.89243 13.9272ZM7.12722 14.8152C8.61458 13.3778 9.48341 11.3567 9.70892 8.80254C9.71653 8.72061 9.70718 8.63804 9.68144 8.55958C9.65569 8.48111 9.61403 8.40829 9.55887 8.34529C9.50371 8.2823 9.43611 8.23036 9.35997 8.19247C9.28382 8.15457 9.20063 8.13146 9.11515 8.12446C9.02962 8.11606 8.9432 8.12424 8.86104 8.14852C8.77888 8.17281 8.70266 8.2127 8.63691 8.26583C8.57117 8.31895 8.51725 8.38422 8.47836 8.45775C8.43948 8.53127 8.41643 8.61155 8.41058 8.6938C8.20787 10.9793 7.4857 12.6935 6.20234 13.9316C6.08048 14.0492 6.01232 14.2084 6.01287 14.3741C6.01342 14.5399 6.08263 14.6987 6.20528 14.8156C6.32792 14.9324 6.49396 14.9978 6.66686 14.9972C6.83975 14.9967 7.00535 14.9303 7.12722 14.8127V14.8152ZM10.5165 14.699C10.9118 14.0691 11.2411 13.4032 11.4994 12.711C11.5534 12.5562 11.542 12.3873 11.4678 12.2404C11.3936 12.0935 11.2624 11.9802 11.1022 11.9249C10.9421 11.8695 10.7657 11.8765 10.6108 11.9442C10.4559 12.0119 10.3348 12.1351 10.2734 12.2873C10.0439 12.901 9.75177 13.4916 9.40128 14.0503C9.35686 14.1205 9.32729 14.1984 9.31428 14.2796C9.30126 14.3608 9.30504 14.4436 9.3254 14.5234C9.34577 14.6031 9.38232 14.6783 9.43297 14.7445C9.48362 14.8107 9.54738 14.8667 9.62061 14.9093C9.76849 14.9953 9.94596 15.0215 10.114 14.9821C10.1972 14.9625 10.2755 14.9275 10.3446 14.8789C10.4136 14.8304 10.4721 14.7692 10.5165 14.699ZM12.0579 10.7437C12.2994 9.46742 12.4086 8.1714 12.3838 6.87455C12.3832 5.98918 12.1024 5.12482 11.5786 4.3957C11.0548 3.66658 10.3125 3.10703 9.44998 2.79099C8.58743 2.47494 7.64517 2.41729 6.74773 2.62563C5.85028 2.83398 5.03988 3.29853 4.42363 3.95788C4.36362 4.0185 4.31689 4.09005 4.28623 4.1683C4.25556 4.24654 4.24158 4.32989 4.2451 4.41341C4.24863 4.49693 4.26959 4.57892 4.30675 4.65453C4.3439 4.73014 4.3965 4.79784 4.46143 4.85362C4.52636 4.90939 4.6023 4.95211 4.68475 4.97925C4.7672 5.00638 4.85449 5.01739 4.94146 5.0116C5.02842 5.00582 5.1133 4.98336 5.19105 4.94557C5.2688 4.90778 5.33786 4.85541 5.39414 4.79157C5.83427 4.32053 6.41311 3.98863 7.05416 3.83974C7.69521 3.69085 8.36829 3.73198 8.98444 3.9577C9.60059 4.18341 10.1308 4.58308 10.505 5.10388C10.8792 5.62469 11.0798 6.24211 11.0803 6.87455C11.1043 8.09122 11.0034 9.3072 10.7791 10.5049C10.7462 10.6675 10.782 10.836 10.8785 10.9733C10.9751 11.1107 11.1245 11.2056 11.2941 11.2374C11.3355 11.2453 11.3776 11.2493 11.4198 11.2492C11.5708 11.2489 11.717 11.1983 11.8333 11.106C11.9497 11.0138 12.0291 10.8857 12.0579 10.7437ZM4.56246 6.87455C4.56227 6.70012 4.57732 6.52599 4.60744 6.35396C4.6269 6.27115 4.62856 6.1854 4.61232 6.10195C4.59608 6.0185 4.56228 5.9391 4.51298 5.86859C4.46369 5.79808 4.39992 5.73793 4.32558 5.69183C4.25125 5.64572 4.16789 5.61462 4.0806 5.60043C3.99332 5.58623 3.90393 5.58923 3.81789 5.60925C3.73185 5.62927 3.65097 5.66589 3.58018 5.71687C3.50939 5.76785 3.45017 5.83212 3.40614 5.90577C3.36211 5.97942 3.33419 6.06089 3.32408 6.14523C3.28106 6.38615 3.25925 6.63012 3.2589 6.87455C3.2589 9.77747 2.38161 11.2492 0.651781 11.2492C0.478918 11.2492 0.313135 11.3151 0.190902 11.4323C0.0686696 11.5495 0 11.7085 0 11.8742C0 12.04 0.0686696 12.1989 0.190902 12.3161C0.313135 12.4333 0.478918 12.4992 0.651781 12.4992C3.17352 12.4992 4.56246 10.4993 4.56246 6.87455ZM13.4919 14.6328C14.5645 12.1793 15.0757 9.53366 14.991 6.87455C14.994 5.83645 14.7487 4.81151 14.274 3.87851C14.2365 3.80465 14.1843 3.73858 14.1202 3.68408C14.0561 3.62958 13.9815 3.58771 13.9005 3.56087C13.8196 3.53403 13.7339 3.52274 13.6484 3.52765C13.5629 3.53256 13.4793 3.55356 13.4022 3.58947C13.3252 3.62537 13.2563 3.67548 13.1995 3.73692C13.1426 3.79836 13.099 3.86993 13.071 3.94755C13.043 4.02516 13.0312 4.10731 13.0363 4.18929C13.0414 4.27127 13.0633 4.35148 13.1008 4.42535C13.4886 5.18815 13.6893 6.02593 13.6874 6.87455C13.7694 9.35486 13.2986 11.8234 12.3063 14.1153C12.2709 14.1901 12.2513 14.2709 12.2486 14.353C12.2459 14.4351 12.26 14.517 12.2903 14.5938C12.3206 14.6707 12.3663 14.741 12.425 14.8009C12.4837 14.8608 12.5541 14.909 12.6322 14.9427C12.7166 14.98 12.8084 14.9992 12.9013 14.999C13.026 14.9985 13.1479 14.9637 13.2525 14.8988C13.3572 14.8339 13.4403 14.7416 13.4919 14.6328ZM1.95534 8.74942V6.87455C1.95707 5.38332 2.57565 3.95364 3.67537 2.89918C4.77508 1.84472 6.26613 1.2516 7.82137 1.24994C9.09128 1.24589 10.3276 1.64103 11.341 2.37487C11.4793 2.47432 11.6531 2.51702 11.8242 2.49358C11.9954 2.47014 12.1498 2.38247 12.2535 2.24987C12.3572 2.11728 12.4017 1.9506 12.3773 1.78652C12.3528 1.62244 12.2614 1.47439 12.1231 1.37494C10.8843 0.478387 9.37342 -0.00452144 7.82137 3.19068e-05C5.92056 0.00218205 4.09825 0.72715 2.75418 2.01591C1.41011 3.30466 0.654023 5.05198 0.651781 6.87455V8.74942C0.651781 8.91517 0.72045 9.07413 0.842683 9.19133C0.964915 9.30853 1.1307 9.37438 1.30356 9.37438C1.47642 9.37438 1.64221 9.30853 1.76444 9.19133C1.88667 9.07413 1.95534 8.91517 1.95534 8.74942Z" fill="#475AFF" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='poppins opacity-50 text-black font-normal text-sm pt-3 pb-5 leading-6 mt-6'>
                        <p>Droid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating straight forward processes with advanced technology, Droid removes the complexities of blockchain and smart contract development. With just a few clicks, users can connect their wallet, choose settings, and launch their own tokens, no coding </p>
                    </div>
                    <div className='mt-6 px-3 flex justify-between'>
                        <img src='/Images/sec4.png' className='w-[53px]'></img>
                        <img src='/Images/sec5.png' className='w-[53px]'></img>
                        <img src='/Images/sec6.png' className='w-[53px]'></img>
                        <img src='/Images/sec7.png' className='w-[53px]'></img>
                    </div>
                </div>
                <div className='bg-white border-b border-[#476FFF] -mt-[1px] mob-bottom w-full py-3'>

                </div>
            </div>

            {/* third section */}
            <div className='flex justify-between relative flex-col mt-20 px-4 lg:flex-row lg:gap-6 gap-10'>
                <div className='absolute left-0 -top-80'>
                    <img src='/Images/easeleft.png'></img>

                </div>
                <div className='relative'>
                    <div className='absolute transform hover:scale-110 transition-transform ease-in duration-300 z-50 gradient-bg lg:-top-12 -top-6 left-8 border border-white border-opacity-30 rounded-[50%] lg:h-[159px] h-[97px] w-[97px] flex justify-center items-center lg:w-[159px]'>
                        <img src='/Images/gradientpp1.png' className='lg:w-[66px] lg:h-[76px] w-[40px] h-[40px]'></img>
                    </div>
                    <div className='bg-[#475AFF] respponsive-boxes rounded-[25px] px-6 pb-10 lg:max-h-[445px] pt-24 lg:pt-32'>
                        <p className='font-normal text-2xl lg:text-4xl text-white responsive-box-title'>Ease of Use</p>
                        <p className='mt-6 poppins font-normal text-white opacity-50 text-xs responsive-box-para lg:text-lg'>AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating </p>

                        <div className='flex mt-6 gap-4 text-white items-center'>
                            <p className='font-normal text-xs lg:text-xl'>Know more</p>
                            <svg className='hidden  know-more  relative z-50 lg:block' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9H14V7L0 7L0 9Z" fill="white" />
                            </svg>
                            <svg className='lg:hidden block' width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div className='absolute transform hover:scale-110 transition-transform ease-in duration-300 z-50 gradient-bg lg:-top-12 -top-6 left-8 border border-white border-opacity-30 rounded-[50%] lg:h-[159px] h-[97px] w-[97px] flex justify-center items-center lg:w-[159px]'>
                        <img src='/Images/gradientpp2.png' className='lg:w-[66px] lg:h-[76px] w-[40px] h-[40px]'></img>
                    </div>
                    <div className='bg-[#475AFF] respponsive-boxes rounded-[25px] px-6 pb-10 lg:max-h-[445px] pt-20 lg:pt-32'>
                        <p className='font-normal text-2xl lg:text-4xl responsive-box-title text-white'>Customizable tokens</p>
                        <p className='mt-6 poppins font-normal text-white opacity-50 text-xs lg:text-lg responsive-box-para'>AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating </p>

                        <div className='flex mt-6 gap-4 text-white items-center'>
                            <p className='font-normal text-xs lg:text-xl'>Know more</p>
                            <svg className='hidden know-more  relative z-50 lg:block' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9H14V7L0 7L0 9Z" fill="white" />
                            </svg>
                            <svg className='lg:hidden block' width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div className='absolute transform hover:scale-110 transition-transform ease-in duration-300 z-50 gradient-bg lg:-top-12 -top-6 left-8 border border-white border-opacity-30 rounded-[50%] lg:h-[159px] h-[97px] w-[97px] flex justify-center items-center lg:w-[159px]'>
                        <img src='/Images/gradientpp3.png' className='lg:w-[66px] lg:h-[76px] w-[40px] h-[40px]'></img>
                    </div>
                    <div className='bg-[#475AFF]  respponsive-boxes rounded-[25px] px-6 pb-10 lg:max-h-[445px] pt-20 lg:pt-32'>
                        <p className='font-normal text-2xl lg:text-4xl text-white whitespace-nowrap responsive-box-title'>Automated Verification</p>
                        <p className='mt-6 poppins font-normal text-white opacity-50 text-xs lg:text-lg responsive-box-para'>AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating </p>

                        <div className='flex mt-6 gap-4 text-white items-center'>
                            <p className='font-normal text-xs lg:text-xl'>Know more</p>
                            <svg className='hidden know-more  relative z-50 lg:block' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9H14V7L0 7L0 9Z" fill="white" />
                            </svg>
                            <svg className='lg:hidden block' width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5L14 4.5V3.5L0 3.5L0 4.5Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>

            </div>

            {/* forth section */}
            <div className='lg:flex block mt-10 lg:mt-0 w-full responsive-big-paddings lg:px-40 px-8 lg:py-40'>
                <div className='flex updown justify-center items-center'>
                    <img src='/Images/unlock.png' className='lg:max-w-[363px] max-w-[245px]'></img>
                </div>

                <div className='lg:ml-40 mt-10'>
                    <p className='text-white font-normal text-3xl lg:text-7xl'>Unlock the </p>
                    <p className='text-[#475AFF] font-normal lg:text-7xl text-3xl'>Future of Tokens</p>

                    <div className='mt-10'>
                        <p className='text-white opacity-50 font-normal lg:text-[20px] text-sm leading-[26px] lg:leading-[38px] poppins '>AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating straightforward processes with advanced technology, Droid removes the complexities of blockchain and smart contract development. With just a few clicks, users can connect their wallet, choose settings, and launch their own tokens, no coding </p>
                    </div>
                    <div className='flex items-center mt-10'>
                        <p className='text-[#476FFF] font-normal  lg:text-xl mr-4 text-sm'>Know more</p>
                        <svg className=' know-more ' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9H14V7L0 7L0 9Z" fill="#476FFF" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* fifth section */}

            <div className='lg:flex relative block w-full responsive-big-paddings lg:px-40 px-8 lg:py-24'>
                <div className='absolute w-full -top-20 left-0'>
                    <img src='/Images/systemleft.png'></img>
                </div>
                <div className='absolute w-full flex justify-end -top-20 right-0'>
                    <img src='/Images/systemright.png'></img>
                </div>
                <div className='lg:hidden pt-20 flex justify-center h-[300px] relative items-center'>
                    <div className='relative -left-10 -mt-32 z-30 '>
                        <img src='/Images/systemtoppc.png' className='max-w-[257px] responsive-pc-size'></img>
                    </div>
                    <div className='absolute left-20 z-20 '>
                        <img src='/Images/systembottompc.png' className='max-w-[257px] responsive-pc-size'></img>
                    </div>
                </div>

                <div className='lg:mr-20 mb-10'>
                    <span className='text-white font-normal text-3xl lg:text-7xl'>The</span>
                    <span className='text-[#475AFF] ml-3 font-normal lg:text-7xl text-3xl'>system</span>

                    <div className='mt-10'>
                        <p className='text-white opacity-50 font-normal lg:text-[20px] text-sm leading-[26px] lg:leading-[38px] poppins '>AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. By integrating straightforward processes with advanced technology, Droid removes the complexities of blockchain and smart contract development. With just a few clicks, users can connect their wallet, choose settings, and launch their own tokens, no coding </p>
                    </div>
                    <div className='flex  items-center mt-10'>
                        <p className='text-[#476FFF] font-normal lg:text-xl mr-4 text-sm'>Know more</p>
                        <svg className='know-more relative z-50' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM0 9H14V7L0 7L0 9Z" fill="#476FFF" />
                        </svg>
                    </div>
                </div>

                <div className='lg:flex hidden justify-center relative items-center'>
                    <div className='relative -mt-96 z-30 '>
                        <img src='/Images/systemtoppc.png' className='min-w-[600px] responsive-pc-size'></img>
                    </div>
                    <div className='absolute left-28 z-20 '>
                        <img src='/Images/systembottompc.png' className='min-w-[600px] responsive-pc-size'></img>
                    </div>
                </div>
            </div>


            {/* sixth section */}

            <div className='relative w-full hidden lg:flex justify-center items-center relative-last-padding mt-32 px-60 flex-col'>
                <div className='absolute z-20 w-full -top-[13rem] left-0'>
                    <img src='/Images/lastleft.png'></img>
                </div>
                <div className='w-full justify-end flex'>
                    <div className='absolute z-20 w-full flex justify-end -top-[25rem] right-0'>
                        <img src='/Images/systemright.png'></img>
                    </div>
                </div>

                <div className='lg:max-w-[959px]'>
                    <div className='flex relative z-10 justify-start w-full'>
                        <div className='rounded-tl-[20px] w-[30%] bg-white py-8 lastfirst'>

                        </div>
                    </div>

                    <div className='-mt-[1px] minusmt relative z-10 w-full bg-white py-8 lastsecond'>

                    </div>
                    <div className='w-full minusmt -mt-[1px] bg-white px-28 py-6'>
                        <div className='flex relative z-[200] w-full gap-6 poppins font-normal text-xl'>
                            <input placeholder='Name' className='w-1/2 px-4 py-4 border border-black border-opacity-45 rounded-[8px]'>

                            </input>
                            <input placeholder='Email' className='w-1/2 px-4 py-4 border border-black border-opacity-45 rounded-[8px]'>

                            </input>
                        </div>
                        <div className='mt-8 px-4 w-full'>
                            <div className='w-full transform hover:scale-95 transition-transform ease-in duration-300 relative z-50 font-normal text-xl py-4 text-white flex justify-center rounded-[8px] items-center bg-[#476FFF]'>
                                <p>Submit Details</p>
                            </div>
                        </div>
                        <div className='poppins mt-10 text-center font-normal text-[18px] leading-8'>
                            <p className='opacity-50'>Subscribe to our newsletter, AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. </p>
                        </div>
                    </div>
                    <div className='w-full relative z-10  -mt-[1px] bg-white py-8 lastclip'>

                    </div>
                </div>


            </div>

            <div className='lg:hidden block relative px-8'>
                <div className='absolute z-10 left-0'>
                    <img src='/Images/moblastleft.png'></img>
                </div>
                <div className='w-full justify-end flex'>
                    <div className='absolute z-20 w-full flex justify-end  right-0'>
                        <img src='/Images/moblastright.png'></img>
                    </div>
                </div>
                <div className='w-full  relative z-20 bg-white py-3 mob-top'>

                </div>
                <div className='bg-white relative z-20 -mt-[2px] py-3 w-full px-6'>
                    <div className='flex mt-4 flex-col w-full gap-3 poppins font-normal text-sm'>
                        <input placeholder='Name' className=' px-4 py-3 border border-black border-opacity-45 rounded-[8px]'>

                        </input>
                        <input placeholder='Email' className=' px-4 py-3 border border-black border-opacity-45 rounded-[8px]'>

                        </input>
                    </div>
                    <div className='mt-8  w-full'>
                        <div className='w-full font-normal text-sm py-4 text-white flex justify-center rounded-[8px] items-center bg-[#476FFF]'>
                            <p>Submit Details</p>
                        </div>
                    </div>
                    <div className='poppins mt-10 text-center font-normal text-[13px] leading-6'>
                        <p className='opacity-50'>Subscribe to our newsletter, AnDroid is an innovative and user-friendly platform that simplifies creating digital tokens for both individuals and organizations. </p>
                    </div>
                </div>
                <div className='bg-white relative z-20 border-b border-[#476FFF] -mt-[1px] mob-bottom w-full py-3'>

                </div>
            </div>


            {/* footer */}
            <div className='w-full lg:block hidden mt-[20rem] lg:px-14'>
                <div className='flex bg-[#475AFF] py-6 mb-6 rounded-[20px] items-center justify-between w-full px-2'>
                    <div className='flex items-center'>
                        <div >
                            <img src='/Images/footerlogo.png' className='w-[37px]'></img>
                        </div>
                        <p className='font-normal text-xl ml-4 text-white'>Droid</p>
                    </div>

                    <div className='font-normal text-base poppins text-white'>
                        @2024 All rights are reserved
                    </div>

                    <div className='flex gap-6 items-center'>
                        <img src='/Images/footer1.png' className='transform hover:scale-110 transition-transform ease-in duration-300 relative z-40'></img>
                        <img src='/Images/footer2.png' className='transform hover:scale-110 transition-transform ease-in duration-300 relative z-40'></img>
                        <img src='/Images/footer3.png' className='transform hover:scale-110 transition-transform ease-in duration-300 relative z-40'></img>
                        <img src='/Images/footer4.png' className='transform hover:scale-110 transition-transform ease-in duration-300 relative z-40'></img>
                    </div>
                </div>
            </div>

            {/* footer mob */}

            <div className='flex w-full py-4 bg-[#475AFF] justify-center lg:hidden mt-[12rem] items-center gap-6'>
                <img src='/Images/footer1.png'></img>
                <img src='/Images/footer2.png'></img>
                <img src='/Images/footer3.png'></img>
                <img src='/Images/footer4.png'></img>
            </div>
        </>
    )
}

export default Landing;