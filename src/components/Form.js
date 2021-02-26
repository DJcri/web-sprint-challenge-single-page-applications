import React from "react";

const sauces = [
  {
    label: "Original Ranch",
    value: "ranch",
  },
  {
    label: "Garlic Ranch",
    value: "garlic-ranch",
  },
  {
    label: "BBQ Sauce",
    value: "bbq",
  },
  {
    label: "Spinach Alfredo",
    value: "spinach-alfredo",
  },
];

const toppings = ["pepperoni", "sausage", "pineapple", "onions"];

const Form = (props) => {
  const { change, values, submit, errors, disabled } = props;

  const onChange = (e) => {
    const { name, type } = e.target;
    const valueToUse = type === "checkbox" ? "checked" : "value";
    change(name, e.target[valueToUse]);
  };

  return (
    <form>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
      </div>
      <br />
      <input name="name" type="text" value={values.name} onChange={onChange} />
      <br />
      <select
        name="size"
        className="select-size"
        value={values.size}
        onChange={onChange}
      >
        <option value="">Select</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <br />
      {sauces.map((sauce) => {
        return (
          <>
            <input
              name="sauce"
              type="radio"
              value={sauce.value}
              id={sauce.value}
              onChange={onChange}
            />
            <label for={sauce.value}>{sauce.label}</label>
          </>
        );
      })}
      <br />
      {toppings.map((topping) => {
        return (
          <>
            <label>{topping.toUpperCase()}</label>
            <input
              name={topping}
              type="checkbox"
              value={values[topping]}
              onChange={onChange}
            />
          </>
        );
      })}
      <br />
      <input
        name="special"
        type="text"
        value={values.special}
        onChange={onChange}
      />
      <br />
      <button
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        disabled={disabled}
      >
        order
      </button>
    </form>
  );
};

export default Form;
