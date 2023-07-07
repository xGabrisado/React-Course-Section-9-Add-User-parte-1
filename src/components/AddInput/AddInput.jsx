import { useState } from "react";
import style from "./Addinput.module.css";

const initialState = {
  id: "",
  name: "",
  age: "",
};

const AddInput = (props) => {
  const [userInput, setUserInput] = useState(initialState);

  const inputChangeHandler = (input, valor) => {
    setUserInput((prevUser) => {
      return {
        ...prevUser,
        [input]: valor,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !userInput.name.trim() ||
      !userInput.age.trim() ||
      +userInput.age > 90 ||
      +userInput.age < 0
    ) {
      props.onInvalidData();
      return;
    }

    props.onAddingUser(userInput);

    setUserInput(initialState);
  };

  return (
    <form onSubmit={submitHandler} className={style["user-form"]}>
      <div>
        <label htmlFor="">Username</label>
        <input
          type="text"
          id="name"
          value={userInput["name"]}
          onChange={(e) => inputChangeHandler("name", e.target.value)}
        />
        <label htmlFor="">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={userInput["age"]}
          onChange={(e) => inputChangeHandler("age", e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddInput;
