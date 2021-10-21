import React from "react";
import Cards from "../../../Common/Components/Cards";

const Content = () => {
  return (
    <div className="flex flex-col md:w-full">
      {/* ...................heading */}
      <h2
        className="text-center italic mt-10 text-color
           text-4xl md:text-5xl font-black justify-around  md:tracking-wide xl:tracking-widest"
      >
        <span className="text-lime-400">KILIMO</span> Farm
        Buddy
      </h2>

      <h2
        className="font-extrabold ml-6 md:ml-20 text-3xl  md:text-4xl 
      md:tracking-wide xl:tracking-widest text-color mt-24 mb-0"
      >
        Stuff you can do here
      </h2>
      {/* ...................cards................ */}
      <div className="flex  flex-col mx-6 md:flex-wrap md:flex-row  justify-around mt-4">
        <Cards text="View your tasks of the day" imgUrl="tasks.jpg" />
        <Cards
          text="Update animal records with a few clicks and swipes"
          imgUrl="eggs.jpg"
        />
        <Cards text="Chat real-time with your manager" imgUrl="chat.jpg" />
      </div>

    </div>
  );
};

export default Content;
