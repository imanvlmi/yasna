import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-72">
        <Link
          className=" px-5 py-2 bg-blue-400 rounded text-center w-full text-white  hover:text-white hover:bg-blue-700"
          href={"/quiz/1"}
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
