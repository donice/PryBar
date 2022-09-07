import React from "react";
import { BsForwardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dog from "../assets/dog.png";

const DogCard = () => {
  return (
    <Link to="/dashboard/posted-dogs/iiii">
      <div className="w-[290px] h-[290px] border-[1px] rounded-primary text-primary text-center p-8">
        <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden mx-auto shadow-primary">
          <img src={Dog} alt="Dog" />
        </div>

        <p className="mt-4 font-bold">Bingo.</p>
        <p className="my-2">Age: 6years.</p>
        <p>Posted by : John Doe.</p>
        <div className="flex justify-between mt-2">
          <div></div>

          <div className="rounded-[50%] bg-brown h-[30px] w-[30px] text-white text-large flex justify-center items-center shadow-primary">
            <BsForwardFill />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DogCard;
