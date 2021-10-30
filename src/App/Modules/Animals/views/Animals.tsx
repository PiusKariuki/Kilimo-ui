import React, { useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import useFetch from "../../../Common/hooks/useFetch";
import { useSelector } from "react-redux";
import useTable from "../../../Common/hooks/useTable";
import { columns } from "../shared/shared";
import UpdateDialog from "../components/UpdateDialog";

interface Props {
  dept: "dairies" | "beefs" | "layers" | "pigs" | "all";
  actions: string[];
  color: "light" | "dark";
}

createTheme("light", {
  text: {
    fontSize: "2rem",
    fontWeight: "2px",
    primary: "#000000",
  },
  background: {
    default: "inherit",
  },
});

const customStyles = {
  cells: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      fontSize: "1.2rem",
      // background: "white",
    },
  },
};

const Animals: React.FC<{ department: Props["dept"] }> = () => {
  /*........................ hook calls......................*/
  const { data, getObject } = useFetch();
  const { populate, target, open, setOpen } = useTable();

  const department = useSelector<any>((state) => state?.User?.department);

  /*...............................................................................................
                    -Action buttons for the animals  datatable.
                    -These values will be passed to the  useTable hook.
  ...............................................................................................*/
  const actions: Props["actions"] =
    department === "dairies"
      ? ["Milk", "weight"]
      : department === "layers"
      ? ["Eggs", "weight"]
      : ["weight"];
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
    <div className="flex flex-col flex-nowrap h-screen mt-6">
      <UpdateDialog
        open={open}
        department={department}
        setOpen={setOpen}
        target={target}
      />
      <div className="mx-24">
        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={populate(data, actions)}
          pagination
          responsive
          title="Animals"
          theme="light"
          fixedHeader
          fixedHeaderScrollHeight="450px"
          actions="Refresh"
          pointerOnHover
          className="bg text-color"
        />
      </div>
    </div>
  );
};

export default Animals;
