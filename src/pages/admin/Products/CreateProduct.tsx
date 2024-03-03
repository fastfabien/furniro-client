import React, { useEffect } from "react";
import { AdminLayout } from "../Layout";
import {
  ErrorMessage,
  Form,
  FormContainer,
  FormContent,
  Wrapper,
} from "../../../Styles";
import { Input, SubmitButton } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { useNavigate } from "react-router-dom";
import {
  Product,
  createProduct,
} from "../../../features/product/product.slice";

export const CreateProduct = () => {
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) console.log("mandona");
  }, [isError, isSuccess, isLoading, message, dispatch, navigate]);

  const handleCreateProduct = (e: any): void => {
    e.preventDefault();

    const formData = e.target;

    const formValue: any = {};

    for (let i = 0; i < formData.length; i++) {
      formValue[formData[i].name] = formData[i].value;
    }

    dispatch(createProduct(formValue));
  };
  return (
    <AdminLayout pageName="Create product">
      <Wrapper>
        <Form onSubmit={(e) => handleCreateProduct(e)}>
          <FormContainer>
            <FormContent>
              <Input type="text" label="Product name" name="name" />
              <Input type="textarea" label="Description" name="description" />
              <Input
                type="textarea"
                label="Short description"
                name="short_description"
              />
              <Input type="number" label="price" name="price" />
            </FormContent>
            <FormContent>
              <Input type="text" label="Size" name="size" />
              <Input type="text" label="Sku" name="sku" />
            </FormContent>
          </FormContainer>
          {isError && <ErrorMessage>{message}</ErrorMessage>}
          <SubmitButton>Create product</SubmitButton>
        </Form>
      </Wrapper>
    </AdminLayout>
  );
};
