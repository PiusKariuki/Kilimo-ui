import React, { useState } from "react";

const useAnimals = () => {
  const [weight, setWeight] = useState("");
  const [eggs, setEggs] = useState("");
  const [milk, setMilk] = useState("");
  const [op, setOp] = useState("");
  const [err, setErr] = useState("");

  /*...........................validate form fields on change.......................*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case "weight": {
        /^\d+$/.test(e.target.value)
          ? setErr("")
          : setErr("weight has to be a number");
        setWeight(e.target.value);
        setOp("weight");

        break;
      }
      case "milk": {
        setMilk(e.target.value);
        setOp("milk");
        typeof e.target.value !== "number"
          ? setErr("milk has to be number")
          : setErr("");
        break;
      }
      case "eggs": {
        setEggs(e.target.value);
        setOp("eggs");
        typeof e.target.value !== "number"
          ? setErr("eggs has to be number")
          : setErr("");
        break;
      }
      default:
        return "Not found";
    }
  };

  const handleClose = () => {
    setWeight("");
    setEggs("");
    setMilk("");
    setErr("");
  };

  const updateObject = {
    weekly_weight: { weight },
    milk_daily: { litres: milk },
    eggs_weekly: { number: eggs },
    op,
  };

  return { updateObject, handleChange, handleClose, weight, eggs, milk, err };
};

export default useAnimals;
