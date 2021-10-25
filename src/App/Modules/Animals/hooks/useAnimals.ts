import React, { useState } from "react";

const useAnimals = () => {
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState("");
  const [eggs, setEggs] = useState("");
  const [milk, setMilk] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case "weight": {
        setWeight(e.target.value);
        break;
      }
      case "history": {
        setHistory(e.target.value);
        break;
      }
      case "milk": {
        setMilk(e.target.value);
        break;
      }
      case "eggs": {
        setEggs(e.target.value);
        break;
      }
      default:
        return "Not found";
    }
  };

  const columns = [
    {
      name: "NAME",
      selector: (row: any) => row.name,
    },
    {
      name: "AGE  (Weeks)",
      selector: (row: any) => row.age_in_weeks,
    },
    {
      name: "BREED",
      selector: (row: any) => row.breed,
    },
    {
      name: "ACTIONS",
      selector: (row: any) => row.actions,
      field: "actions",
    },
  ];

  const updateObject = {
    weekly_weight: [{weight}],
    history,
    milk_daily: [{litres: milk}],
    eggs_weekly: eggs,
  };

  return { columns,updateObject,handleChange };
};

export default useAnimals;
