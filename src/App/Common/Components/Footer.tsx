import React from "react";

const reactIcon = process.env.PUBLIC_URL + "/img/react.png";
const tailwindIcon = process.env.PUBLIC_URL + "/img/wind.png";
const mongoIcon = process.env.PUBLIC_URL + "/img/mongo.png";
const nodeIcon = process.env.PUBLIC_URL + "/img/node.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col shadow-2xl bg-cards py-8 border">
      <p className="font-semibold text-color text-3xl text-center mb-6">
        Built using...
      </p>
      <div className="flex flex-row justify-around">
        <img src={reactIcon} alt="" className="icon" />
        <img src={tailwindIcon} alt="" className="icon" />
        <img src={mongoIcon} alt="" className="icon" />
        <img src={nodeIcon} alt="" className="icon" />
      </div>
    </div>
  );
};

export default Footer;
