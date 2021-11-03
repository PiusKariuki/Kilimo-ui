import React, { useEffect } from "react";
import useFetch from "../../../Common/hooks/useFetch";
import { useSelector } from "react-redux";

interface Props {
  dept: "dairies" | "beefs" | "layers" | "pigs" | "all";
}

const Tasks: React.FC<{ dept: Props["dept"] }> = () => {
  const { data, getObject } = useFetch();
  const department = useSelector<any>((state) => state?.User?.department);

  /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                -Fetch function.
                    -calls the common axios function to get tasks on  mount
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
  useEffect(() => {
    getObject(`/tasks/departments/${department}`, "GET", {});
  }, []);
  console.log(data);
  
  return <div className="bg h-screen"></div>;
};

export default Tasks;
