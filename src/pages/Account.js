import React from 'react';
import SavedShow from './../components/SavedShow';

const Account = () => {
    return (
      <>
        <div className="w-full text-white">
          <img
            className="w-full h-[400px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/59fd5bf8-0338-47a5-abb2-c78d169fcd8f/VN-vi-20230515-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="/"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
        </div>
        <SavedShow />
      </>
    );
};

export default Account;