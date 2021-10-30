import React from "react";
import Cards from "../../../Common/Components/Cards";
const chicken = process.env.PUBLIC_URL + "/img/chicken.jpg";

const taskTxt = [
  "View your tasks of the day",
  "Get your instructions at dawn",
  "View only what is relevant to you",
  "Check off those tasks that you've completed",
  "Get broadcast information"
];
const animalTxt = [
  "Quick animal identification",
  "Record animal weight",
  "Update weekly egg  count for each bird",
  "Update daily milk yild for each animal",
];
const chatTXT = [
  "Deliver urgent information to vets and managers",
  "Keep in touch with the foreman",
  "Worry less about the manager not picking your calls when a bull has ECF",
  "Give your feedback and suggestions to the management. Complements and critism...all welcome",
];

const Dashboard = () => {
  const taskRoute = "/kilimo/tasks";
  const animalRoute = "/kilimo/animals";
  const chatRoute = "/kilimo/chat";

  return (
    <div className="mt-28">
      {/* ...................HERO SECTION............. */}
      <div className="flex flex-col md:flex-row  justify-center mb-32 xs:mx-4 md:mx-6 lg:mx-44">
        <div className="flex flex-col flex-nowrap w-full mb-8 lg:mr-8">
          <p className=" text-5xl mb-6 text-left text-color">
            Livestock farming simplified
          </p>
          <p className="font-medium text-lg mb-6 text-left text-color">
            View you tasks, deliver urgent information to your manager,register
            animal products and record weight. 
            View you tasks, deliver urgent information to your manager,register
            animal products and record weight. 
          </p>
          <div className="flex justify-start">
            <button className="action-btn ">Get started</button>
          </div>
        </div>
        <div className="flex  sm:mx-12 lg:mx-auto  shadow-lg max-w-lg rounded-2xl">
          <img src={chicken} alt=""  className="object-cover rounded-2xl shadow-lg"/>
        </div>
      </div>

      {/* ...................cards................ */}
      <p className="font-bold text-6xl mx-6 lg:text-8xl text-left text-color lg:mx-52 -mb-6">
        Features
      </p>
      <div className="flex flex-col justify-around ">
        <Cards text={taskTxt} imgUrl="tasks.png" route={taskRoute} />
        <Cards text={animalTxt} imgUrl="milk.jpg" route={animalRoute} />
        <Cards text={chatTXT} imgUrl="chat.jpg" route={chatRoute} />
      </div>

    </div>
  );
};

export default Dashboard;
