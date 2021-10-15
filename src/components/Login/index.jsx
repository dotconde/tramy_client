import { BASE_URL, ENDPOINTS } from "../../config";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./styles.css";
import { ReactComponent as TramyLogo } from "../../assets/logo/tramy_logo.svg";
import { ReactComponent as BlackTramyLogo } from "../../assets/logo/black_tramy_logo.svg";
import TramyLoginWallpaper from "../../assets/img/tramy_login_wallpaper.svg";
import Button from "../UI/Button";

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
    <div className="login">
      <section className="login__form">
        <TramyLogo />
        <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.password && (
            <span role="alert">{errors.password.message}</span>
          )}

          <Button content={"Iniciar Sesión"} backgroundColor={"#109cf1"} />
        </form>
      </section>
      <section className="login__welcome">
        <p>
          Bienvenidos a&nbsp; <BlackTramyLogo />
        </p>
        <img src={TramyLoginWallpaper} alt="imagen de fondo de Tramy" />
      </section>
    </div>
  );
}

export default Login;
