export enum InputType {
  Text = "text",
  Textarea = "textarea",
  Checkbox = "checkbox",
  Radio = "radio",
}

export type FormProps = {
  type: "text" | "textarea" | "email" | "tel" | "password" | "number";
  name: string;
  isRequired?: boolean;
  issubscribe?: boolean;
  label: string;
  isvalid?: (event: any) => void;
};

export type SubscribeFormProps = {
  label: string;
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

export function handleInputChange<
  T extends HTMLInputElement | HTMLTextAreaElement
>(
  event: React.ChangeEvent<T>,
  handleChange: (value: any, type: InputType) => void,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) {
  const value =
    event.target.type === "checkbox"
      ? (event.target as HTMLInputElement).checked
      : event.target.value;
  const type = (event.target as HTMLInputElement).type as InputType;
  handleChange(value, type);

  if (event.target.type === "email" && !isValidEmail(value.toString())) {
    setError(true);
  } else if (event.target.type === "tel" && !isValidPhone(value.toString())) {
    setError(true);
  } else if (value === "") {
    setError(true);
  } else {
    setError(false);
  }
}
