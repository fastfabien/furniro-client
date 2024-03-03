import React, { useEffect, useState } from "react";
import {
  ErrorMessage,
  InputContainer,
  InputContent,
  Label,
  Textarea,
  InputSubscribeContent,
  InputFilesContainer,
  InputFile,
  LabelInputfiles,
  InputImageContent,
} from "../../Styles";
import {
  FormProps,
  SubscribeFormProps,
  addImageToContainer,
  handleInputChange,
  setInputFilesValue,
} from "../../common";

export const Input = ({
  type,
  name,
  isRequired = false,
  isvalid,
  issubscribe,
  label,
}: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  return (
    <InputContainer>
      <Label>{label}</Label>
      {type === "textarea" ? (
        <Textarea
          name={name}
          className={error ? "error" : ""}
          value={inputValue}
          onChange={(event) =>
            handleInputChange(event, setInputValue, setError)
          }
        />
      ) : (
        <InputContent
          className={error ? "error" : ""}
          type={type}
          value={inputValue}
          name={name}
          onChange={(event) =>
            handleInputChange(event, setInputValue, setError)
          }
        />
      )}
      {error && <ErrorMessage>Invalid {type} value</ErrorMessage>}
    </InputContainer>
  );
};

export const InputSubscribe = ({ label }: SubscribeFormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  return (
    <InputContainer>
      <InputSubscribeContent
        type="email"
        placeholder={label}
        value={inputValue}
        onChange={(event) => handleInputChange(event, setInputValue, setError)}
      />
      {error && <ErrorMessage>Invalid email value</ErrorMessage>}
    </InputContainer>
  );
};

interface InputFilesProps {
  label: string;
}

export const InputFiles = ({ label }: InputFilesProps) => {
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  const [inputValue, setInputValue] = useState("");
  const imageContainer = document.getElementById("form-image-content");

  useEffect(() => {
    if (inputFiles) {
      for (let i: number = 0; i < inputFiles.length; i++) {
        const file = inputFiles[i];
        const url = URL.createObjectURL(file);

        if (imageContainer) {
          addImageToContainer(
            imageContainer,
            url,
            i,
            inputFiles,
            setInputValue,
            setInputFiles
          );
        }
      }
    }
  }, [inputFiles, imageContainer, inputValue]);

  const handleInputFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setInputFiles(files);
    setInputFilesValue(files, setInputValue);
  };

  return (
    <InputFilesContainer>
      <LabelInputfiles htmlFor="images">{label}</LabelInputfiles>
      <InputFile
        id="images"
        type="file"
        accept="image/*"
        defaultValue={inputValue}
        onChange={(e) => handleInputFilesChange(e)}
        multiple={true}
      />
      <InputImageContent id="form-image-content"></InputImageContent>
    </InputFilesContainer>
  );
};
