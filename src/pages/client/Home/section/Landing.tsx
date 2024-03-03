import React from "react";
import { LandingContainer } from "../../../../Styles";
import ArrivalCard from "../../../../components/Card/ArrivalCard";

export const Landing = () => {
  return (
    <LandingContainer>
      <ArrivalCard
        title="Discover Our New Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        slug="New arrival"
      />
    </LandingContainer>
  );
};
