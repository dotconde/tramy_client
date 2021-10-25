import { useForm } from "react-hook-form";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import humps from "humps";
import axios from "axios";
import "./ProfileForm.css";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as BusinessIcon } from "../../assets/icons/business.svg";
import { validateName } from "../../helpers/validators/react-hook-form";
import Button from "../UI/Button";

export function ProfileForm({ preloadedValues }) {
  const endpoint = `${BASE_URL}/${ENDPOINTS.PROFILE}`;
  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { register, handleSubmit } = useForm({
    defaultValues: humps.camelizeKeys(preloadedValues),
  });

  const onSubmit = async (data) => {
    await updateProfile(humps.decamelizeKeys(data));
    window.location.reload();
  };

  function updateProfile(data) {
    return axios.patch(endpoint, data, config);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
      {/* First name */}
      <label htmlFor="firstName">Nombre</label>

      <div className="input-container enabled">
        <input
          name="firstName"
          placeholder={"Nombre"}
          type="text"
          {...register("firstName", validateName)}
        />
        <EditIcon />
      </div>

      {/* Last name */}
      <label htmlFor="lastName">Primer apellido</label>
      <div className="input-container enabled">
        <input
          name="lastName"
          placeholder={"Apellido"}
          type="text"
          {...register("lastName", validateName)}
        />
        <EditIcon />
      </div>

      {/* Email */}
      <label htmlFor="email">Email</label>
      <div className="input-container disabled">
        <input
          name="email"
          placeholder={"Email"}
          type="email"
          disabled
          {...register("email", {
            required: true,
            minLength: {
              value: 4,
              message: "¡Hey! Tu email debe tener al menos 4 caracteres",
            },
            maxLength: {
              value: 100,
              message: "¡Hey! Su email debe tener como máximo 100 caracteres",
            },
          })}
        />
        <EmailIcon />
      </div>

      {/* Organization */}
      <label htmlFor="organizationName">Nombre del negocio</label>
      <div className="input-container disabled">
        <input
          name="organizationName"
          placeholder={"Tu organización"}
          type="text"
          disabled
          {...register("organizationName", {
            minLength: {
              value: 1,
              message: "Su organización debe tener al menos 1 caracter",
            },
            maxLength: {
              value: 100,
              message: "Su organización debe tener como máximo 100 caracteres",
            },
          })}
        />
        <BusinessIcon />
      </div>

      <Button
        content={"Guardar cambios"}
        backgroundColor={"#1a1a1a"}
        borderRadius={"0.3rem"}
        margin={"0 auto"}
      />
    </form>
  );
}
