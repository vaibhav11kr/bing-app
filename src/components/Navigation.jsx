import React, { useState, useEffect } from 'react'
import Logo from "../assets/Microsoft-Bing-Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import ExpandMenu from './ExpandMenu';
import { PiUserCircleDuotone } from "react-icons/pi";
import { CiMobile1 } from "react-icons/ci";
import { PiMedalMilitaryThin } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";


const Navigation = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative flex flex-col md:flex-row md:top-0 justify-between items-center font-serif w-[100%]'>
      <div className='flex absolute justify-center items-center mb-6 left-0 md:top-0'>
      <img src={Logo} alt="logo" className='h-8' />
      {isMobile && <ul className='flex gap-6 text-xs text-white mt-1 ml-8'>
        <li>Copilot</li>
        <li>Images</li>
        <li>Videos</li>
        <li>Shopping</li>
        <li>Maps</li>
        <li>News</li>
        {/* <li>{Logo}</li> */}
      </ul>}
      </div>
      {isMobile && <ul className='flex absolute md:right-0 text-white text-xs gap-6 md:top-0 top-12 right-8'>
        <li className="flex gap-1 items-center"><p>Kolkata</p> <TiWeatherPartlySunny style={{ fontSize: '2.3rem' }}/></li>
        <li className="flex gap-1 items-center"><p>Sign in</p> <PiUserCircleDuotone style={{ fontSize: '2.3rem' }}/></li>
        <li className="flex gap-1 items-center"><p>Rewards</p> <PiMedalMilitaryThin style={{ fontSize: '2.3rem' }}/></li>
        <li className="flex gap-1 items-center"><p>Mobile</p> <CiMobile1 style={{ fontSize: '2.3rem' }}/></li>
        <li className='cursor-pointer pt-1'> <span onClick={toggleShow}><GiHamburgerMenu style={{ fontSize: '1.8rem', color:"white"}}/></span></li>
      </ul>}
      {!isMobile && !show && <span onClick={toggleShow} className='absolute right-0 top-2'><GiHamburgerMenu style={{ fontSize: '1.3rem', color:"white" }}/></span> }
      <ExpandMenu show={show} isMobile={isMobile} toggleShow={toggleShow}/>
    </div>
  )
}

export default Navigation
