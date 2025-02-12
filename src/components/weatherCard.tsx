import React from 'react';
import { ReactSVG } from 'react-svg';
import searchIcon from "../components/icons/search.svg";

function weatherCard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-blue-400 to-blue-700 p-6 rounded-lg h-screen max-h-[500px] w-[360px]">
        <div className="flex flex-col">
          <div className="flex justify-between mx-5">
            <input
              placeholder="search"
              className="bg-white rounded-full p-3"
            ></input>
            <button className="rounded-full p-3 bg-white">
              <ReactSVG className='' src={searchIcon}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default weatherCard;