import React from "react";
import { useForm } from "react-hook-form";
import useConfig from "../../hooks/useConfig";
import Button from "../UI/Button";
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
    return <p>Seleccione plantilla</p>;
  }
  return (
    <div>
      <p>{template?.components[0]?.text} </p>
      <form className="client-form" onSubmit={handleSubmit(onSubmit)}>
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
          content={"Enviar plantilla"}
          backgroundColor={"#131313"}
          borderRadius={"0.3rem"}
        />
      </form>
    </div>
  );
}

export default TemplateForm;
