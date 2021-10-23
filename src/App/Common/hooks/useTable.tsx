import React from "react";

interface Props {
  data: [{}];
  actions: [{ name: string; handler: Function }];
  columns: [{}]
}

const useTable = () => {
  const populate = (data: Props["data"], actions: Props["actions"]) =>
    data.map((obj:any) =>
      Object.assign(obj, {
        actions: actions.map(
          (action, key): JSX.Element => (
            <button key={key}  value={obj._id} onClick={(e) => action.handler(e.currentTarget.value)} className="btn-submit">
              {action.name}
            </button>
          )
        ),
      })
    );

    return {populate};
};

export default useTable;
