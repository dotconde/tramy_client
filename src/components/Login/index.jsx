// import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await console.log(data);
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
          maxLength: 254,
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
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
