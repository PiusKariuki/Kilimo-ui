import { useState } from "react";
import request from "../Shared/Request";
import useTable from "./useTable";

interface Props {
  method: "GET" | "PUT";
  info: any | undefined;
}

interface MongoErr {
  weekly_weight:
    | {
        errors: {
          weight: { message: string };
        };
      }
    | any;
  eggs: {};
}

const useFetch = () => {
  const [data, setData] = useState<[{}]>([{}]);
  const [mongoErr, setMongoErr] = useState<MongoErr>();
  const [status, setStatus] = useState<number>();

  const getObject: Function = (
    route: string,
    method: Props["method"],
    info: Props["info"]
  ) => {
    method === "GET"
      ? request
          .get(route)
          .then(
            (res) => {
              setData(res.data);
              setMongoErr(undefined);
            },
            (err) => setMongoErr(err?.response?.message)
          )
          .catch((err) => {
            setMongoErr(err?.response?.message);
          })
      : request
          .put(route, info)
          .then(
            (res) => {
              setStatus(res.status);
            },
            (err) => {
              setStatus(err?.response?.status);
              setMongoErr(err?.response?.data?.errors);
            }
          )
          .catch((err) => {
            setMongoErr(err?.response?.data?.errors);
            setStatus(err?.response?.status);
          });
  };

  return { data, mongoErr, setMongoErr, getObject, status, setStatus };
};

export default useFetch;
