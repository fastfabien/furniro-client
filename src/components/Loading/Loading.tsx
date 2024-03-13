import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LoadingContainer } from "../../Styles";

export const Loading = () => {
  return (
    <LoadingContainer data-testid="loading-container">
      <FontAwesomeIcon data-testid="loading-icon" icon={faSpinner} />
    </LoadingContainer>
  );
};
