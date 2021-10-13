import React from "react";

interface Props {
  loading: boolean;
}

const Spinner: React.FC<{ loading: Props["loading"] }> = ({ loading }) => {
  return (
    <div className="bg-rose-600">
      {loading ? (
        <button type="button" className="bg-rose-600 " disabled>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          processing
        </button>
      ) : null}
    </div>
  );
};

export default Spinner;
