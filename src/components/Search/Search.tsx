import React, { useState } from "react";
import { NoLinkText } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchContainer } from "../../Styles/components/Search";
import { InputSearch } from "../Forms";

export const Search = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <>
      <NoLinkText onClick={() => setShowSearch(!showSearch)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </NoLinkText>
      {showSearch && (
        <SearchContainer>
          <InputSearch />
        </SearchContainer>
      )}
    </>
  );
};
