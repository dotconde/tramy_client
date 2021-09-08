import { BASE_URL, ENDPOINTS } from "../../config";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./styles.css";

function Login({ setToken }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function loginUser(user) {
    return axios
      .post(
        `${BASE_URL}/${ENDPOINTS.LOGIN}`,
        { user },
        {
          headers: {},
        }
      )
      .then((response) => {
        const token = response.headers.authorization.split(" ")[1];
        return token;
      });
  }

  const onSubmit = async (data) => {
    const token = await loginUser(data);
    setToken(token);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Tramy Login</h1>
      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        {...register("email", {
          required: true,
          minLength: {
            value: 5,
            message: "El email debe tener al menos 5 caracteres",
          },
          maxLength: {
            value: 254,
            message: "El email debe tener como máximo 254 caracteres",
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message:
              "El email ingresado no coincide con el formato válido de Tramy",
          },
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}

      {/* Password */}
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        {...register("password", {
          required: true,
          minLength: {
            value: 5,
            message: "La contraseña debe tener al menos 5 caracteres",
          },
          maxLength: {
            value: 30,
            message: "La contraseña debe tener como máximo 30 caracteres",
          },
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
