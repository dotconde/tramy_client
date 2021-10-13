import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import useConfig from "../../hooks/useConfig";
import { updateLead } from "../../services/api/lead";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../helpers/validators/react-hook-form";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          onChange={(event) => handleChange(event, "name")}
          placeholder="Nombre"
          name="name"
          {...register("name", validateName)}
        />
        <input
          onChange={(event) => handleChange(event, "email")}
          placeholder="Email"
          name="email"
          {...register("email", validateEmail)}
        />
        <input
          name="phone"
          placeholder={"Teléfono"}
          type="phone"
          disabled
          {...register("phone", validatePhone)}
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default ClientForm;
