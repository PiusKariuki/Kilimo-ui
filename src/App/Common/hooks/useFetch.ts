import { useState } from "react";
import request from "../Shared/Request";
// import { columns } from "../shared/columns";
// import { dataWithActions } from "../shared/data";

interface Props {
  method: "GET" | "PUT";
}

const useFetch = () => {
  const [data, setData] = useState< [{}]>([{}]);
  const [err, setErr] = useState("");
  const [res, setRes] = useState("");

  const getObject:Function = (route: string, method: Props["method"], info: any) => {
    method === "GET"
      ? request
          .get(route)
          .then(
            (res) => setData(res.data),
            (err) => setErr(err.response.message)
          )
          .catch((err) => setErr(err.response.message))
      : request
          .put(route, info)
          .then(
            (res) => setRes("Update was successful!!!"),
            (err) => setErr(err.response.message)
          )
          .catch((err) => setErr(err.response.message));
  };

  return {data,err,res,getObject}
};

export default useFetch;