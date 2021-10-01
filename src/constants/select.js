export const tramySelectStyles = {
  container: (provided) => ({
    ...provided,
    fontSize: "0.8rem",
    color: "#5a5a5a",
  }),

  groupHeading: (provided) => ({
    ...provided,
    fontSize: "0.65rem",
    borderBottom: "1px solid rgb(167, 167, 167, 0.25)",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#5a5a5a",
    width: "6rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: "7rem",
  }),

  control: (provided) => ({
    ...provided,
    fontSize: "0.8rem",
    color: "#5a5a5a",
    cursor: "pointer",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    borderColor: "#dfdfdf",
    "&:hover": {
      borderColor: "#dfdfdf",
    },
  }),
};
