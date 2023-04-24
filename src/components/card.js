import Image from "next/image";
import React from "react";

function Card({}) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mr-3 ml-3 mb-6 w-15">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Name of the program</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href="" className="">
          Website
        </a>
      </div>
    </div>
  );
}

export default Card;
