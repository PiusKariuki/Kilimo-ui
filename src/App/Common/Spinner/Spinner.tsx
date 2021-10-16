import React from "react";

interface Props {
  loading: boolean;
}

const Spinner: React.FC<{ loading: Props["loading"] }> = ({
  loading,
}): JSX.Element => {
  return (
    <div className="">
      {loading ? (
        <>
        <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-gray-900"></div>
        <p className="font-extrabold">Loading...</p>
        </>
      ) : null}
    </div>
  );
};

export default Spinner;
