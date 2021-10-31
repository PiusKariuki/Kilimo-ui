import React, { useState } from "react";

const useAnimals = () => {
  const [weight, setWeight] = useState("");
  const [eggs, setEggs] = useState("");
  const [milk, setMilk] = useState("");
  const [op, setOp] = useState("");
  const [err, setErr] = useState("");
  /*...........................validate form fields on change.......................*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    the regex makes sure the string  is made of digits only
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
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
        /^\d+$/.test(e.target.value)
          ? setErr("")
          : setErr("milk in litres has to be a number");
        setMilk(e.target.value);
        setOp("milk");
        break;
      }
      case "eggs": {
        /^\d+$/.test(e.target.value)
          ? setErr("")
          : setErr("Egg Count has to be a number");
        setEggs(e.target.value);
        setOp("eggs");

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

  return {
    updateObject,
    handleChange,
    handleClose,
    weight,
    eggs,
    milk,
    err,
    setErr,
  };
};

export default useAnimals;
