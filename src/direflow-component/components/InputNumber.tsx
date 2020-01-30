import React, { ChangeEvent } from "react";

export interface InputNumberProps {
  label: string;
  placeholder: string;
  value: number;
  setValue: Function;
}

const InputNumber: React.FC<InputNumberProps> = props => {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    props.setValue(event.target.value);
  }

  return (
    <div>
      <label className="sr-only" htmlFor="number-input">
        {props.label}
      </label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <div className="input-group-addon">€</div>
        <input
          id="number-input"
          className="form-control"
          type="number"
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputNumber;
