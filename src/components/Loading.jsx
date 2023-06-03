import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="w-screen h-screen text-center flex justify-center items-center bg-white dark:bg-black fixed left-0 top-0 z-[99999]">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
