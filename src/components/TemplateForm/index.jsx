import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import useConfig from "../../hooks/useConfig";
import Button from "../UI/Button";
import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
import { useMutation } from "react-query";
import { postMessage } from "../../services/api/chat";
import { templateFieldCounter } from "../../helpers/formatters/template";

function TemplateForm({ chatId, template, setIsOpen }) {
  const { config } = useConfig();

  const { mutate } = useMutation(async (newMessage) =>
    postMessage(chatId, newMessage, config)
  );

  const { register, handleSubmit } = useForm();

  const valuesObjectToArrayParameters = (values) => {
    let arrayParameters = [];
    let valuesArray = Object.values(values);
    valuesArray.map((value) =>
      arrayParameters.push({ type: "text", text: value })
    );
    return arrayParameters;
  };

  const onSubmit = async (values) => {
    mutate({
      type: "template",
      message: {
        namespace: template?.namespace,
        name: template?.name,
        language: {
          code: template?.language,
          policy: "deterministic",
        },
        components: [
          {
            type: "body",
            parameters: valuesObjectToArrayParameters(values),
          },
        ],
      },
      options: { template: template?.components[0]?.text },
    });
    setIsOpen(false);
  };

  if (template?.components === undefined) {
    return (
      <div className="template-form__steps">
        <TemplateIcon />
        <h2>¿Cómo usar mis plantillas?</h2>
        <ol>
          <li>Seleccione una plantilla</li>
          <li>Inserte los parámetros para completar el mensaje</li>
          <li>
            Haz click en <b>Enviar</b>
          </li>
        </ol>
      </div>
    );
  }
  return (
    <div className="template-form__container">
      <h1>Editar plantilla</h1>
      <h2>{template?.components[0]?.text} </h2>
      <form className="template-form" onSubmit={handleSubmit(onSubmit)}>
        {Array.apply(null, {
          length: templateFieldCounter(template?.components[0]?.text),
        }).map((_, i) => (
          <input
            name={i}
            key={i}
            placeholder={`{{${i + 1}}}: Inserte el parámetro`}
            {...register(`${i}`)}
          ></input>
        ))}
        <Button
          content={"Enviar"}
          backgroundColor={"#1a1a1a"}
          borderRadius={"0.3rem"}
          margin={"0 auto"}
        />
      </form>
    </div>
  );
}

export default TemplateForm;
