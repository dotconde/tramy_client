import { useForm } from "react-hook-form";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import humps from "humps";
import axios from "axios";
import { ReactComponent as BusinessIcon } from "../../assets/icons/business.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp-v2.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/icons/world-wide-web.svg";
import "./BusinessForm.css";

export function BusinessForm({ preloadedValues }) {
  const endpoint = `${BASE_URL}/${ENDPOINTS.ORGANIZATION}`;
  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { register, handleSubmit } = useForm({
    defaultValues: humps.camelizeKeys(preloadedValues),
  });

  const onSubmit = async (data) => {
    await updateBusiness(humps.decamelizeKeys(data));
    window.location.reload();
  };

  function updateBusiness(data) {
    return axios.patch(endpoint, data, config);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="business-form">
      {/* Name */}

      <label For="name"> Nombre del negocio</label>
      <div className="input-container disabled">
        <input
          name="name"
          placeholder={"Nombre de tu organización"}
          type="text"
          disabled
          {...register("name", {
            required: true,
            minLength: {
              value: 2,
              message: "El nombre tu organización tener al menos 2 caracteres",
            },
            maxLength: {
              value: 100,
              message:
                "El nombre tu organización debe tener como máximo 100 caracteres",
            },
          })}
        />
        <BusinessIcon />
      </div>

      {/* Phone */}
      <label For="phone"> Línea de whatsapp</label>
      <div className="input-container disabled" disabled>
        <input
          name="phone"
          placeholder={"Teléfono de la organización (Código país + Número)"}
          type="text"
          disabled
          {...register("phone", {
            required: true,
            minLength: {
              value: 3,
              message: "El teléfono debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 50,
              message: "El teléfono debe tener como máximo 50 caracteres",
            },
          })}
        />
        <WhatsappIcon />
      </div>

      {/* Address */}
      <label For="address"> Dirección del negocio</label>
      <div className="input-container disabled">
        <input
          name="address"
          placeholder={"Dirección fiscal"}
          type="text"
          disabled
          {...register("address", {
            required: true,
            minLength: {
              value: 3,
              message: "Tu dirección debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 150,
              message:
                "Tu dirección fiscal debe tener como máximo 150 caracteres",
            },
          })}
        />
        <LocationIcon />
      </div>

      {/* Domain */}
      <label For="domain"> Website</label>
      <div className="input-container disabled">
        <input
          name="domain"
          placeholder={"Sitio web de tu organización (Ejm: www.midominio.com)"}
          type="text"
          disabled
          {...register("domain", {
            required: true,
            minLength: {
              value: 3,
              message: "Tu sitio web debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 256,
              message: "Tu sitio web debe tener como máximo 256 caracteres",
            },
          })}
        />
        <WebsiteIcon />
      </div>

      <button type="submit" disabled>
        Guardar cambios
      </button>
    </form>
  );
}
