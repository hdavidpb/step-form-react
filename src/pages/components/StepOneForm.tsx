import * as SC from "../styled-components/styles";
import useSimpleForm from "../../hooks/useSimpleForm";
export const StepOneForm = () => {
  const { name, email, phoneNumber, onChange } = useSimpleForm({
    name: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <SC.FieldsContainer>
      <SC.FieldContainer>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={onChange}
        />
      </SC.FieldContainer>
      <SC.FieldContainer>
        <label>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="e.g. stephenKing@lorem.com"
          value={email}
          onChange={onChange}
        />
      </SC.FieldContainer>
      <SC.FieldContainer>
        <label>Phone Number</label>
        <input
          value={phoneNumber}
          name="phoneNumber"
          type="number"
          placeholder="e.g. +1 23123 0898"
          onChange={onChange}
        />
      </SC.FieldContainer>
    </SC.FieldsContainer>
  );
};
