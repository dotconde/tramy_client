// import { useState } from "react";
import useToken from "./useToken";

export default function useConfig() {
  const { token } = useToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return { config };
}
