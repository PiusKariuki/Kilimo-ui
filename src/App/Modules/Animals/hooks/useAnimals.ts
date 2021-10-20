import { useState } from "react";
import swal from "sweetalert";
import useFetch from "../../../Common/hooks/useFetch";
import request from "../../../Common/Shared/Request";
// import { columns } from "../shared/columns";
// import { dataWithActions } from "../shared/data";

interface Props {
  dept: "dairies" | "beefs" | "layers" | "pigs";
}

const useAnimals = () => {
  const columns = [
  {
    label: "Name",
    field: "name",
    sort: "asc",
    width: 120,
  },
  {
    label: "Age in weeks",
    field: "age_in_weeks",
    width: 100,
  },
  {
    label: "Breed",
    field: "breed",
    sort: "asc",
    width: 50,
  },
  {
    label: "Actions",
    field: "actions",
    sort: "asc",
    width: 200,
  },
]
  return {columns}


};

export default useAnimals;