import axios from "axios";
const API_URL = "/api/variants/";

export const addImageToContainer = (
  container: HTMLElement,
  url: string,
  index: number,
  files: FileList | null,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setInputFiles: React.Dispatch<React.SetStateAction<FileList | null>>
): void => {
  // create div: image container
  const div = document.createElement("div");
  div.className = "image-container";

  // create span: used to remove the image from the div
  const span = document.createElement("span");
  span.textContent = "x";

  // create img: the image content
  const img = document.createElement("img");
  img.src = url;

  //add image & span to the image container
  div.appendChild(img);
  div.appendChild(span);

  // remove image from the div container
  span.onclick = () =>
    removeImage(container, div, index, files, setInputValue, setInputFiles);
  // remove the image from the input value

  if (container) {
    //   add the div to the container
    container.appendChild(div);
  }
};

const removeImage = (
  container: HTMLElement,
  content: HTMLElement,
  index: number,
  files: FileList | null,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setInputFiles: React.Dispatch<React.SetStateAction<FileList | null>>
): void => {
  // let newFilesValues: FileList[] | null;
  if (files) {
    const filesArray = Array.from(files);
    const newValue = filesArray.slice(index, 1);
    const filesNames = newValue.map((file) => file.name);
    const value = filesNames.join(", ");

    // for (let i = 0; i < files.length; i++) {
    //   if (files[i] !== files[index]) {
    //     newFilesValues!.concat(newValue);
    //   }
    // }

    setInputValue(value);
    container.removeChild(content);
  }
};

export const setInputFilesValue = (
  files: FileList | null,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
) => {
  let filesArray: File[] = [];
  if (files && files.length > 0) {
    filesArray = Array.from(files);
  }
  const filesNames = filesArray.map((file) => file.name);
  const fileValue = filesNames.join(", ");
  setInputValue(fileValue);
};

export const getBase64 = (image: any) => {
  return `data:image/jpg;base64,${btoa(
    new Uint8Array(image).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  )}`;
};

export const getVariantCouverture = async (name: string) => {
  const URL = API_URL + name;
  try {
    const response = await axios.get(URL);
    return response.data.data; // Retourne data.data.data directement
  } catch (error: any) {
    return error.message; // Retourne le message d'erreur en cas d'erreur
  }
};

export const handleGetVariantCouverture = async (name: string) => {
  const image = await getVariantCouverture(name);
  const image64 = getBase64(image);
  return image64;
};

export const getImageSrc = async (
  setImage: React.Dispatch<React.SetStateAction<string>>,
  name: string
) => {
  try {
    const base64Image = await handleGetVariantCouverture(name);
    setImage(base64Image);
  } catch (error: any) {
    return error.message;
  }
};
