import React from "react";
import { useHistory } from "react-router-dom";
interface Props {
  img: string;
  text: string[];
  route: string;
}

const Cards: React.FC<{
  imgUrl: Props["img"];
  text: Props["text"];
  route: Props["route"];
}> = ({ imgUrl, text, route }) => {
  /*......................hook calls..............*/
  let history = useHistory();

  return (
    <div className="flex flex-col justify-center md:flex-row  lg:mx-44 my-12">
      <div
        className="xs:w-44 h-64  w-80 self-center md:h-96 md:w-2/4 
        bg-no-repeat bg-cover bg-center rounded-md"
        style={{
          background: `url('${process.env.PUBLIC_URL}/img/${imgUrl}')`,
        }}
      ></div>
      <div
        className="flex flex-col justify-between xs:w-44 self-center w-80  md:h-80 md:w-2/4 
         md:-ml-16 md:pl-8 border rounded-md  px-1 shadow-2xl  bg"
      >
        {text.map((txt, key) => (
          <p key={key} className="font-semibold  text-color">
            *{txt}
          </p>
        ))}
        <button className=" route-btn py-2 my-6" onClick={()=>history.push(route)}>Proceed</button>
      </div>
    </div>
  );
};

export default Cards;
