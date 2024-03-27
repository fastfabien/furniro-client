import React from "react";
import { Input, InputSelect } from "../Forms";
import { BillingContainer, BillingForm, H2, UserName } from "../../Styles";

export const BillingAddress = () => {
  return (
    <BillingContainer>
      <H2>Billing details</H2>
      <BillingForm>
        <UserName>
          <Input label="first name" type="text" name="first_name" />
          <Input label="last name" type="text" name="last_name" />
        </UserName>
        <Input label="company name(optional)" type="text" name="last_name" />
        <InputSelect
          label="country / region"
          name="region"
          items={[
            { name: "madagascar", value: "madagascar" },
            { name: "France", value: "france" },
          ]}
        />
        <Input label="Street address" type="text" name="street" />
        <Input label="town city" type="text" name="city" />
        <InputSelect
          label="province"
          name="province"
          items={[
            { name: "madagascar", value: "madagascar" },
            { name: "France", value: "france" },
          ]}
        />
        <Input label="ZIP code" type="number" name="zip_code" />
        <Input label="phone" type="tel" name="phone" />
        <Input label="email address" type="email" name="email" />
        <Input
          label="additional information"
          type="textarea"
          name="additional_information"
        />
      </BillingForm>
    </BillingContainer>
  );
};
