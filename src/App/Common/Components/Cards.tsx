import React from "react";
interface Props {
  img: string;
  text: string[];
}

const Cards: React.FC<{ imgUrl: Props["img"]; text: Props["text"] }> = ({
  imgUrl,
  text,
}) => {
  return (
    <div className="flex flex-col justify-center md:flex-row  md:mx-44 my-24">
      <div
        className="h-64 w-80 self-center md:h-64 md:w-2/4 bg-no-repeat bg-cover bg-center rounded-md"
        style={{
          background: `url('${process.env.PUBLIC_URL}/img/${imgUrl}')`,
        }}
      ></div>
      <div
        className="self-center w-80 mt-4 md:h-44 md:w-2/4 md:align-self-baseline md:-ml-16  border rounded-md  
      px-1 shadow-2xl  bg"
      >
        {text.map((txt, key) => (
          <p key={key} className=" mt-8 font-semibold  text-color">
            *{txt}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cards;
