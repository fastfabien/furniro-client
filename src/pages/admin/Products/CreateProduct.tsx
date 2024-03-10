import React, { useEffect } from "react";
import { AdminLayout } from "../Layout";
import {
  ErrorMessage,
  Form,
  FormContainer,
  FormContent,
  Wrapper,
} from "../../../Styles";
import { Input, InputFiles, SubmitButton } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { useNavigate } from "react-router-dom";
import { createProduct, reset } from "../../../features/product/product.slice";

export const CreateProduct = () => {
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state: RootState) => state.product
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isError, isSuccess, isLoading, message, dispatch, navigate]);

  const handleCreateProduct = async (e: any) => {
    e.preventDefault();

    const inputFile: HTMLInputElement | null = document.querySelector(
      'input[name="images"]'
    );
    const inputFilesValue: FileList | null = inputFile?.files || null;

    const formData = new FormData();

    for (let i = 0; i < e.target.length; i++) {
      const element = e.target[i];
      if (element.type !== "file") {
        formData.append(element.name, element.value);
      }
    }

    if (inputFilesValue) {
      for (let i = 0; i < inputFilesValue.length; i++) {
        formData.append("images", inputFilesValue[i]);
      }
    }

    dispatch(createProduct(formData));
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
                type="text"
                label="Short description"
                name="short_description"
              />
              <Input type="number" label="price" name="price" />
            </FormContent>
            <FormContent>
              <Input type="text" label="Size" name="size" />
              <Input type="text" label="Sku" name="sku" />
              <InputFiles label="Images" name="images" />
            </FormContent>
          </FormContainer>
          <ErrorMessage>{message}</ErrorMessage>
          <SubmitButton>Create product</SubmitButton>
        </Form>
      </Wrapper>
    </AdminLayout>
  );
};
