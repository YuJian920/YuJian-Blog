import React from "react";
import "./index.less";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__box">
        <div className="loading__box-trinity">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loading);
