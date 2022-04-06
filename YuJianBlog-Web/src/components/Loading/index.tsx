import React from "react";
import {
  LoadingContainer,
  LoadingBox,
  LoadingTrinity,
  LoadingCircle,
} from "./style";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBox>
        <LoadingTrinity>
          <LoadingCircle />
          <LoadingCircle />
          <LoadingCircle />
        </LoadingTrinity>
      </LoadingBox>
    </LoadingContainer>
  );
};

export default React.memo(Loading);
