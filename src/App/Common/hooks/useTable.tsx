import React from "react";

interface Props {
  data: [{}];
  actions: [{ name: string; handler: Function }];
  columns: [{}]
}

const useTable = () => {
  const populate = (data: Props["data"], actions: Props["actions"]) =>
    data.map((obj) =>
      Object.assign(obj, {
        actions: actions.map(
          (action, key): JSX.Element => (
            <button key={key}  onClick={(e) => action.handler(e)}>
              {action.name}
            </button>
          )
        ),
      })
    );

    return {populate};
};

export default useTable;
