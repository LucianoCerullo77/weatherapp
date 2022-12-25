import React from "react";
import Image from "next/image";
import spinner from "../public/spinner.gif";

const Spinner = () => {
  return (
    <>
      <Image className="w-[200px] m-auto" src={spinner} alt="Loading..." />
    </>
  );
};

export default Spinner;
