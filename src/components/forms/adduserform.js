import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = {
    id: null,
    employeeid: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>New Employee ID</label>
      <input type="number" value="" onChange={handleInputChange} />
      <label>First Name</label>
      <input type="text" value="" onChange={handleInputChange} />
      <label>Last Name</label>
      <input type="text" value="" onChange={handleInputChange} />
      <label>Email Address</label>
      <input type="email" value="" onChange={handleInputChange} />
      <label>Phone Number</label>
      <input type="tel" value="" onChange={handleInputChange} />
      <button>Add New User</button>
    </form>
  );
};

export default AddUserForm;
