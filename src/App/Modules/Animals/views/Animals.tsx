import React, {  useEffect } from "react";
import useFetch from "../../../Common/hooks/useFetch";
import { MDBDataTableV5 } from "mdbreact";
import { useSelector } from "react-redux";
import useTable from "../../../Common/hooks/useTable";
import useAnimals from "../hooks/useAnimals";

interface Props {
  dept: "dairies" | "beefs" | "layers" | "pigs" | "all";
  actions: [{ name: string; handler: Function }];
}

const Animals: React.FC<{ department: Props["dept"] }> = () => {
  /*........................ hook calls......................*/
  const { data, err, res, getObject } = useFetch();
  const { columns } = useAnimals();
  const { populate } = useTable();
  const department = useSelector<any>((state) => state?.User?.department);

  /*...............................................................................................
                    -Action buttons for the animals  datatable.
                    -These values will be passed to the  useTable hook.
  ...............................................................................................*/
  const actions: Props["actions"] = [
    { name: "UPDATE", handler: getObject(`/animals/${department}`, "GET", {}) },
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
  }, [data]);
  /*..............................datatable columns and rows.....*/
  const animals = { columns, rows: data };
  return (
    <div className="flex flex-col">
      <MDBDataTableV5
        hover
        responsive
        striped
        bordered
        entries={7}
        btn
        data={animals}
      />
    </div>
  );
};

export default Animals;
