import React from "react";

function CustomSelect({
  classname = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  showLabel = false,
  label = "",
  options = [],
}) {
  return (
    <>
      {showLabel && label !== "" ? (
        <div
          className="flex flex-col text-center"
          style={{ maxWidth: "500px", alignSelf: "center", width: "375px" }}
        >
          <h2
            className="gibson text-center text-white text-xl font-bold p-1"

          >
            {label}
          </h2>
          <select
            placeholder={placeholder}
            className={`mx-10 my-1 p-3 px-6 rounded-full ${classname}`}
            value={value}
            onChange={onChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <select
          placeholder={placeholder}
          className={`mx-10 my-1 p-3 px-6 rounded-full ${classname}`}
          value={value}
          onChange={onChange}
          style={{ maxWidth: "500px", alignSelf: "center" }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default CustomSelect;
