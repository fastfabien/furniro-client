import React from "react";
import { Button, PageLayout } from "../../../components";
import { H2, P, ThankYouContainer, Wrapper } from "../../../Styles";

export const ThankYou = () => {
  return (
    <PageLayout pageName="thank you">
      <Wrapper>
        <ThankYouContainer>
          <H2>Your order is confirmed.</H2>
          <P>Click here to see all information about your order.</P>
          <Button primary="false" href="/shop">
            Return Shopping
          </Button>
        </ThankYouContainer>
      </Wrapper>
    </PageLayout>
  );
};
