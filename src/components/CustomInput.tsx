import react, { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

type CustomInputProps = {
  label?: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name: string;
};

const CustomInput = (props: CustomInputProps) => {
  const { type, name, label, value, placeholder, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default CustomInput;
