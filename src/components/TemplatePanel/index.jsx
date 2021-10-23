import React, { useState } from "react";
import TemplateForm from "../TemplateForm";
import { v4 as uuidv4 } from "uuid";

function TemplatePanel({ data }) {
  const [currentTemplate, setCurrentTemplate] = useState(
    "Seleccione plantilla"
  );

  // Handle current template
  const handleTemplate = (template) => {
    setCurrentTemplate(template);
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "16rem 1fr" }}>
      <ul>
        {data?.waba_templates
          .filter(
            (template) =>
              template.components.length <= 1 && template.status === "approved"
          )
          .map((template) => (
            <li
              key={uuidv4()}
              style={{ cursor: "pointer" }}
              onClick={async () => handleTemplate(template)}
            >
              {
                template.components.filter(
                  (component) => component.type === "BODY"
                )[0].text
              }
            </li>
          ))}
      </ul>
      <TemplateForm templateData={currentTemplate} />
    </div>
  );
}

export default TemplatePanel;
