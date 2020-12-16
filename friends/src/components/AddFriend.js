import React, { useState } from "react";
import axios from "axios";

const AddFriend = () => {
  const [formValues, setFormValues] = useState("");

  const handleChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {

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
