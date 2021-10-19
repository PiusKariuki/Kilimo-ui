import React from "react";
interface Props {
  img: string;
  text: string;
}

const Cards: React.FC<{ imgUrl: Props["img"]; text: Props["text"] }> = ({
  imgUrl,
  text,
}) => {
  return (
    <div className="flex flex-row md:flex-col  mb-12 shadow-2xl bg-cards rounded-xl">
      <div
        className=" h-40 w-44 md:h-72 md:w-72   bg-no-repeat bg-cover bg-center rounded-full"
        style={{
          background: `url('${process.env.PUBLIC_URL}/img/${imgUrl}')`,
        }}
      ></div>

      <div className=" h-16 w-44 md:h-24 md:w-72   rounded-md  px-1">
        <p className=" mt-8 font-semibold text-center text-color">{text}</p>
      </div>
    </div>
  );
};

export default Cards;
