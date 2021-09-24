import { useForm } from "react-hook-form";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import humps from "humps";
import axios from "axios";
import "./ProfileForm.css";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as BusinessIcon } from "../../assets/icons/business.svg";

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
      <label For="firstName">Nombre</label>

      <div className="input-container enabled">
        <input
          name="firstName"
          placeholder={"Nombre"}
          type="text"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 2,
              message: "¡Hey tú! Tu nombre debe tener al menos 5 caracteres",
            },
            maxLength: {
              value: 100,
              message:
                "¡Hey tú! Tu nombre debe tener como máximo 100 caracteres",
            },
          })}
        />
        <EditIcon />
      </div>

      {/* Last name */}
      <label For="lastName">Primer apellido</label>
      <div className="input-container enabled">
        <input
          name="lastName"
          placeholder={"Apellido"}
          type="text"
          {...register("lastName", {
            required: true,
            minLength: {
              value: 2,
              message: "¡Hey tú! Tu apellido debe tener al menos 5 caracteres",
            },
            maxLength: {
              value: 100,
              message:
                "¡Hey tú! Tu apellido debe tener como máximo 100 caracteres",
            },
          })}
        />
        <EditIcon />
      </div>

      {/* Email */}
      <label For="email">Email</label>
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
      <label For="organizationName">Nombre del negocio</label>
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

      <button type="submit">Guardar cambios</button>
    </form>
  );
}
