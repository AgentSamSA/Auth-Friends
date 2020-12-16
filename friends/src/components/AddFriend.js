import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  name: "",
  age: "",
  email: "",
};

const AddFriend = () => {
  const [formValues, setFormValues] = useState(initialState);

  const history = useHistory();

  const handleChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
    axiosWithAuth()
      .post("/friends", formValues)
      .then((res) => {
        console.log(res);
        setFormValues({
          name: "",
          age: "",
          email: "",
        });
        history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formValues.name}
        onChange={handleChanges}
      />

      <input
        type="text"
        placeholder="Age"
        name="age"
        value={formValues.age}
        onChange={handleChanges}
      />

      <input
        type="text"
        placeholder="Email"
        name="email"
        value={formValues.email}
        onChange={handleChanges}
      />
      <button>Add Friend</button>
    </form>
  );
};

export default AddFriend;
