import React, { useState } from "react";
import UserTable from "./components/tables/UserTable";
import AddUserForm from "./components/forms/adduserform";

const App = () => {
  const userData = [
    {
      id: 1,
      employeeid: 12345,
      firstname: "Jacob",
      lastname: "Batterman",
      email: "ctrjcb@gmail.com",
      phonenumber: "(801) 410-3798"
    },
    {
      id: 2,
      employeeid: 12346,
      firstname: "John",
      lastname: "Smith",
      email: "johnsmith@email.com",
      phonenumber: "(123) 456-7890"
    },
    {
      id: 3,
      employeeid: 12347,
      firstname: "Jennet",
      lastname: "Smith",
      email: "jennetsmith@email.com",
      phonenumber: "(123) 456-7890"
    }
  ];

  const [users, setUsers] = useState(userData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  return (
    <div className="container">
      <h1>Employee Management</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm adduser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
