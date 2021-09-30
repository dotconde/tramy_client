import React from "react";
import "./styles.css";

function Select({
  icon,
  color,
  borderColor,
  backgroundColor,
  placeholder,
  options = [],
}) {
  return (
    <div
      className="tramy-select"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
    >
      <span
        style={{
          fill: color,
        }}
      >
        {icon}
      </span>
      <select
        style={{
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
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
