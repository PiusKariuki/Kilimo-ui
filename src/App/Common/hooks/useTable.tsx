import React, { useState } from "react";

interface Props {
  data: [{}];
  actions: string[];
  columns: [{}];
}

const useTable = () => {
  /*..........target variable to store selected item ...........*/
  const [target, setTarget] = useState<any>("");
  const [open, setOpen] = useState<boolean>(false);

  const populate = (data: Props["data"], actions: Props["actions"]) =>
    data.map((obj: any) =>
      Object.assign(obj, {
        actions: actions.map(
          (action, key): JSX.Element => (
              <button
              key={key}
                id={obj.name}
                value={obj._id}
                onClick={(e) => {
                  setTarget(e.currentTarget);
                  setOpen(true);
                }}
                className="action-btn"
              >
                {action}
              </button>
          )
        ),
      })
    );

  return { populate, target, open, setOpen };
};

export default useTable;
