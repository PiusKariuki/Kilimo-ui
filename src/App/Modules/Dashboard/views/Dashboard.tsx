import React from "react";
import Cards from "../../../Common/Components/Cards";
const chicken = process.env.PUBLIC_URL + "/img/chicken.jpg";

const taskTxt=["View your tasks of the day"];
const animalTxt=["Quick animal identification","Record animal weight", "Record products daily or weekly"];
const chatTXT = ["Deliver urgent information to vets and managers", "keep in touch with the foreman"];



const Dashboard = () => {
  return (
    <div className="mt-28">
      {/* ...................HERO SECTION............. */}
      <div className="flex flex-col md:flex-row  justify-center mb-32">
        <div className="w-full mb-8 md:w-1/5">
          <p className="font-black text-7xl mb-6 text-center text-color">
            Livestock farming simplified
          </p>
          <p className="font-medium text-lg mb-6 text-center text-color">
            View you tasks, deliver urgent information to your manager,register
            animal products and record weight
          </p>
          <div className="flex justify-center">
            <button className="action-btn ">Get started</button>
          </div>
        </div>
        <div className="mx-12 md:w-1/2 shadow-lg">
          <img src={chicken} alt="" />
        </div>
      </div>

 
      {/* ...................cards................ */}
      <p className="font-bold text-6xl mx-6 md:text-8xl text-left text-color md:mx-52 -mb-6">Features</p>
      <div className="flex flex-col justify-around mt-4">
        <Cards text={taskTxt} imgUrl="tasks.png" />
        <Cards text={animalTxt} imgUrl="milk.jpg" />
        <Cards text={chatTXT} imgUrl="chat.jpg" />
      </div>
    </div>
  );
};

export default Dashboard;
