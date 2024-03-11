import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LoadingContainer } from "../../Styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faSpinner} />
    </LoadingContainer>
  );
};
