import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineCollections } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { GoLock } from "react-icons/go";
import { VscBeaker } from "react-icons/vsc";
import { GoHistory } from "react-icons/go";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { VscBlank } from "react-icons/vsc";


const ExpandMenu = ({ show, isMobile, toggleShow }) => {
  const menuClass = `text-gray-800 text-sm absolute right-0 md:top-9 z-50 sm:top-24 h-[70vh] transition-transform duration-300 transform ${show ? 'translate-x-0' : 'translate-x-full'}`;

  return (
    <div className={menuClass}>
      {show && (
        <div className="bg-white sm:h-[100%] rounded-lg h-[70vh] w-80 p-4 gap-4 flex flex-col text-base overflow-scroll">
          {!isMobile && (
            <div className="flex flex-col">
              <span onClick={toggleShow} className="cursor-pointer h-10"><GiHamburgerMenu style={{ fontSize: '1.3rem' }}/>
              </span>
              <div className="m-auto flex flex-col">
                <BiSolidUserCircle style={{ fontSize: '8rem' }}/>
                <p className="m-auto">Sign in</p>
              </div>
              
            </div>
          )}
          {!isMobile && <span className="flex gap-2 items-center "> <PiMedalMilitaryDuotone /> <p>Rewards</p></span>}
          <span className="flex gap-2 items-center"> <MdOutlineCollections /> <p>Collections</p></span>
          <div className="w-full border-b-2"></div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2 items-center"> <AiOutlineUserAdd /> <p>My Bing</p></li>
            <li className="flex gap-2 items-center"> <GoGear /> <p>Settings</p></li>
            <li className="flex gap-2 items-center"> <GoLock /> <p>SafeSearch</p></li>
            <li className="flex gap-2 items-center"> <VscBeaker /> <p>Labs</p></li>
            <li className="flex gap-2 items-center"><GoHistory /> <p>Search history</p></li>
            {!isMobile && <li className="flex gap-2 items-center"> <WiMoonAltThirdQuarter /> <p>Themes</p></li>}
            <li className="flex gap-2 items-center"><MdOutlinePrivacyTip /> <p>Privacy</p></li>
            <li className="flex gap-2 items-center"><RiFeedbackLine /> <p>feedback</p></li>
            {isMobile && (
              <>
                <li className="flex gap-2 items-center"> <BiSolidUserCircle style={{ fontSize: '1.1rem' }} /> Personalize</li>
                <li className="flex gap-2 items-center"> <IoMdHome /> 
                <p>Customize homepage</p>
                </li>
                <li className="flex gap-2 items-center"><VscBlank />
                
                Show menu bar
                </li>
                <li className="flex gap-2 items-center"><p><VscBlank />
                </p>Show news and Interests</li>
                <li className="flex gap-2 items-center"><p><VscBlank />
                </p>Show Menu Image

                
                </li>
              </>
            )}
          </ul>
          {isMobile && (
            <>
              <div className="w-full border-b-2"></div>
              <p className="text-xs pr-10">
                Privacy and Cookies• Legal• Advertise• About our ads• Help
              </p>
              <p className="text-xs">© 2024 Microsoft</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpandMenu;
