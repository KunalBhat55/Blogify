/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from "react";


const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props }, ref) {

  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        className={`input input-md input-bordered w-full ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
