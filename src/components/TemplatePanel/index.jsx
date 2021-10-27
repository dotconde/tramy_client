import React, { useState } from "react";
import TemplateForm from "../TemplateForm";
import { v4 as uuidv4 } from "uuid";
// import Search from "../UI/Search";
import "./styles.css";

function TemplatePanel({ chatId, data, setIsOpen }) {
  const [selectedTemplate, setSelectedTemplate] = useState(undefined);

  // Handle current template
  const handleTemplate = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="template-panel">
      <div className="template-list">
        {/* <Search placeholder={"Buscar plantilla"} margin={"1rem"} /> */}
        <ul>
          {data?.waba_templates
            .filter(
              (template) =>
                template.components.length <= 1 && // Standard mode or text-only has only 1 component (called BODY)
                template.status === "approved" // Status approved-only
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
      </div>
      <TemplateForm
        chatId={chatId}
        template={selectedTemplate}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default TemplatePanel;
