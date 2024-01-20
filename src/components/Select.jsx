/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId();

  return (
    <div>
      {label && (
        <lable htmlFor={id} className="">
          Select
        </lable>
      )}
      <select
        className={`select  text-[1.05rem] select-bordered w-full max-w-xs ${className}`}
        {...props}
        id={id}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
