import React from "react";
import "./styles.css";

function Select({ icon, placeholder, options = [] }) {
  return (
    <div className="select">
      <span>{icon}</span>
      <select name="trammy-select">
        <option disabled="disabled" selected="selected">
          {placeholder}
        </option>

        {options.length > 1
          ? options.map((option) => (
              <optgroup label={option.label}>
                {option.children.map((item) => (
                  <option>{item.value}</option>
                ))}
              </optgroup>
            ))
          : options.map((option) =>
              option.children.map((item) => <option>{item.value}</option>)
            )}
      </select>
    </div>
  );
}

export default Select;
