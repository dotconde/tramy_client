import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import useConfig from "../../hooks/useConfig";
import { updateLead } from "../../services/api/lead";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../helpers/validators/react-hook-form";
import "./styles.css";
import Button from "../UI/Button";

function ClientForm({ data, setIsOpen }) {
  const { config } = useConfig();
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      id: data?.id,
      name: data?.attributes?.name,
      email: data?.attributes?.email,
      phone: data?.attributes?.phone,
    },
  });

  const { mutate } = useMutation(async (updatedLead) =>
    updateLead(updatedLead.id, updatedLead, config)
  );

  const handleChange = (event, name) => setValue(name, event?.target?.value);

  const onSubmit = async (values) => {
    mutate(values);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <form className="client-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre</label>
      <input
        onChange={(event) => handleChange(event, "name")}
        placeholder="Nombre"
        name="name"
        {...register("name", validateName)}
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={(event) => handleChange(event, "email")}
        placeholder="Email"
        name="email"
        {...register("email", validateEmail)}
      />
      <label htmlFor="phone">Teléfono</label>
      <input
        name="phone"
        placeholder={"Teléfono"}
        type="phone"
        disabled
        {...register("phone", validatePhone)}
      />
      <Button
        content={"Guardar cambios"}
        backgroundColor={"#131313"}
        borderRadius={"0.3rem"}
      />
    </form>
  );
}

export default ClientForm;
