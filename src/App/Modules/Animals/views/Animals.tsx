import React, { useEffect,useState } from "react";
import DataTable, {createTheme} from "react-data-table-component";
import useFetch from "../../../Common/hooks/useFetch";
import { useSelector } from "react-redux";
import useTable from "../../../Common/hooks/useTable";
import useAnimals from "../hooks/useAnimals";

interface Props {
  dept: "dairies" | "beefs" | "layers" | "pigs" | "all";
  actions: [{ name: string; handler: Function }];
  color: "light" | "dark"
}



createTheme("dark", {
  font: {
    fontWeight: "bold",
    fontSize: "5rem"
  },
  text: {
    fontWeight: "bold",
    primary: "#32cd32",
    secondary: "inherit",
  },
  background: {
    default: "inherit",
  },
});

const Animals: React.FC<{ department: Props["dept"] }> = () => {
  /*........................ hook calls......................*/
  const { data, getObject } = useFetch();
  const { columns } = useAnimals();
  const { populate } = useTable();

  
  
  const department = useSelector<any>((state) => state?.User?.department);

  /*...............................................................................................
                    -Action buttons for the animals  datatable.
                    -These values will be passed to the  useTable hook.
  ...............................................................................................*/
  const actions: Props["actions"] = [
    {
      name: "UPDATE",
      handler: (e:string) => getObject(`/animals/${department}/${e}`, "PUT", {}),
    },
  ];
  /*..............................................................................................
                    -Fetch function.
                    -calls the common axios function to get animals on  mount
  ................................................................................................*/
  useEffect(() => {
    getObject(`/animals/${department}`, "GET", {});
  }, []);
  /*..............................................................................................
                      -Adds action buttons and handlers to the table dynamically
                      -calls the common populate fn in useTable
  ................................................................................................*/
  useEffect(() => {
    populate(data, actions);
  }, []);
  /*..............................datatable columns and rows.....*/

  return (
    <div className="flex flex-col flex-nowrap justify-center mt-20 md:mx-44">
      <DataTable
        columns={columns}
        data={populate(data, actions)}
        pagination
        responsive
        title="Animals"
        theme="dark"
        fixedHeader
        fixedHeaderScrollHeight="450px"
      />
    </div>
  );
};

export default Animals;
