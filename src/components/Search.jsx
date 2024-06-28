import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { TiMicrophoneOutline } from "react-icons/ti";



const Search = () => {
  return (
    <div className="absolute w-[50%] flex flex-col justify-center items-center top-48">
      <div className="flex flex-row bg-white pl-4 pr-4 rounded-full relative w-[100%]">
      <div className="flex m-auto justify-center h-[100%] pr-2">
      <IoIosSearch style={{ fontSize: '1.8rem' }}/>
      </div>
      
      <input
        type="text"
        name=""
        id=""
        className=" h-12 focus:outline-0 w-[100%]"
        placeholder="Search the web"
      />
      <div className="flex gap-2 m-auto justify-center items-center h-[100%] pr-2">
      <TiMicrophoneOutline style={{ fontSize: '1.6rem', color:"blue" }}/>
      <SiGooglelens style={{ fontSize: '1.3rem', color:"blue" }}/>
      </div>
      </div>
      <div className="text-white flex gap-2 text-xs absolute top-16 whitespace-pre-wrap">
        <span>Languages:</span>
        <a
          href="/?setlang=hi&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Hindi"
        >
          हिंदी
        </a>
        <a
          href="/?setlang=bn&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Bangla"
        >
          বাংলা
        </a>
        <a
          href="/?setlang=ur&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Urdu"
        >
          اردو
        </a>
        <a
          href="/?setlang=pa-guru&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Punjabi (Gurmukhi)"
        >
          ਪੰਜਾਬੀ
        </a>
        <a
          href="/?setlang=mr&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Marathi"
        >
          मराठी
        </a>
        <a
          href="/?setlang=te&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Telugu"
        >
          తెలుగు
        </a>
        <a
          href="/?setlang=ta&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Tamil"
        >
          தமிழ்
        </a>
        <a
          href="/?setlang=kn&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Kannada"
        >
          ಕನ್ನಡ
        </a>
        <a
          href="/?setlang=gu&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Gujarati"
        >
          ગુજરાતી
        </a>
        <a
          href="/?setlang=ml&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Malayalam"
        >
          മലയാളം
        </a>
        <a
          href="/?setlang=or&amp;cc=in&amp;cc=IN"
          data-h="ID=HpApp,32432.1"
          aria-label="Odia"
        >
          ଓଡ଼ିଆ
        </a>
      </div>
    </div>
  );
};

export default Search;
