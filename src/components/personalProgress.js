import React from "react";
import { personalProgressContext } from "../context/personal-progress/personalPorgressContext";
export default function personalProgress() {
  const personalProgress = useContext(personalProgressContext);
  return <div>personalProgress</div>;
}
