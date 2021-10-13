export const validateName = {
  validate: (value) => {
    return !!value.trim();
  },
  required: true,
  minLength: {
    value: 2,
    message: "¡Ups! Tu nombre debe tener al menos 2 caracteres",
  },
  maxLength: {
    value: 100,
    message: "¡Ups! Tu nombre debe tener como máximo 100 caracteres",
  },
};

export const validateEmail = {
  minLength: {
    value: 3,
    message: "¡Hey! Tu email debe tener al menos 3 caracteres",
  },
  maxLength: {
    value: 100,
    message: "¡Hey! Su email debe tener como máximo 100 caracteres",
  },
};

export const validatePhone = {
  required: true,
  minLength: {
    value: 3,
    message: "El teléfono debe tener al menos 3 caracteres",
  },
  maxLength: {
    value: 50,
    message: "El teléfono debe tener como máximo 50 caracteres",
  },
};
