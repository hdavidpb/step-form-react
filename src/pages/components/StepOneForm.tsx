import * as SC from "../styled-components/styles";
import useSimpleForm from "../../hooks/useSimpleForm";
export const StepOneForm = () => {
  const { name, address, description, onChange } = useSimpleForm({
    name: "",
    address: "",
    description: "",
  });

  return (
    <SC.FieldsContainer>
      <SC.FieldContainer>
        <label>Nombre</label>
        <input
          name="name"
          type="text"
          placeholder="ej: Jhon Doe"
          value={name}
          onChange={onChange}
        />
      </SC.FieldContainer>
      <SC.FieldContainer>
        <label>Dirección</label>
        <input
          name="address"
          type="address"
          placeholder="ej: carrera 1 # 40-12"
          value={address}
          onChange={onChange}
        />
      </SC.FieldContainer>
      <SC.FieldContainer>
        <label>Descripción</label>
        <textarea
          value={description}
          name="description"
          placeholder="ej: Edificio 1 apt 02 - Pago por transferencia"
          onChange={onChange}
          maxLength={200}
        />
      </SC.FieldContainer>
    </SC.FieldsContainer>
  );
};
