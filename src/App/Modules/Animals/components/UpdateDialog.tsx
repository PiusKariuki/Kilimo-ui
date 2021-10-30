import React from "react";
import useFetch from "../../../Common/hooks/useFetch";
import useAnimals from "../hooks/useAnimals";

interface Props {
  department: any;
  open: boolean;
  setOpen: Function;
  target: any;
  actions: string[];
}

const UpdateDialog: React.FC<{
  department: Props["department"];
  open: Props["open"];
  setOpen: Props["setOpen"];
  target: Props["target"];
}> = ({ department, open, setOpen, target }) => {
  const { updateObject, handleChange, handleClose, weight, eggs, milk, err } =
    useAnimals();
  const { getObject, mongoErr, setMongoErr, status, setStatus } = useFetch();
  

  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      }  flex-col flex-nowrap  justify-center items-center
      fixed overflow-x-hidden overflow-y-auto  inset-0 z-50 w-auto 
       backdrop-filter backdrop-blur-sm`}
    >
      {/* ............content................. */}
      <div
        className="justify-center border-4 borders  px-24 pt-2 
      pb-14 bg rounded-2xl shadow-2xl"
      >
        <h1 className="font-semibold err-text my-16">
          Update animal details for:{" "}
          <span className="font-extrabold text-2xl text-lime-400 italic">
            {target.id}
          </span>
        </h1>
        <form>
          {/* ................PRODUCTS IE DAIRIES AND LAYERS................................ */}
          {target.innerHTML === "Milk" ? (
            <div className="justify-center flex-col flex my-6">
              <input
                type="number"
                placeholder="Milk today"
                className="input"
                id="milk"
                value={milk}
                onChange={handleChange}
              />
              <p className="err-text">{err}</p>
            </div>
          ) : null}
          {target.innerHTML === "Eggs" ? (
            <div className="justify-center flex-col flex my-6">
              <input
                type="eggs"
                placeholder="Eggs this week"
                className="input"
                id="eggs"
                value={eggs}
                onChange={handleChange}
              />
              <p className="err-text">{err}</p>
            </div>
          ) : null}
          {/* ................weekly weight................................ */}
          {target.innerHTML === "weight" ? (
            <div className="justify-center flex-col flex mb-16">
              <input
                type="weight"
                placeholder="Weight"
                className="input"
                id="weight"
                value={weight}
                onChange={handleChange}
              />
              <p className="err-text">{err}</p>
              <p className="err-text">
                {mongoErr?.weekly_weight?.errors?.weight?.message}
              </p>
            </div>
          ) : null}
          {/* .................buttons................... */}
          <div className="flex justify-between">
            {err === "" ? (
              <button
                type="button"
                className="btn-submit"
                onClick={(e) => {
                  getObject(
                    `/animals/${department}/${target.value}`,
                    "PUT",
                    updateObject
                  );
                  status===200
                    ? setOpen(false)
                    : setMongoErr(undefined);
                }}
              >
                SUBMIT
              </button>
            ) : null}
            <button
              type="button"
              className="rounded-lg bg-red-400 w-20 p-2"
              onClick={() => {
                setOpen(false);
                handleClose();
                setMongoErr(undefined);
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
      {/* ..............content end............... */}
    </div>
  );
};

export default UpdateDialog;
