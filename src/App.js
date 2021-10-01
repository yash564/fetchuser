import React, { useEffect, useState } from "react";
import Users from "./Components/Users/Users";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [obj, setObj] = useState({});
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(async () => {
    let res = await fetch(`https://reqres.in/api/users?page=${page}`);
    let users = await res.json();
    setObj(users);
    setUsers(users.data);
    console.log(users);
  }, []);

  useEffect(async () => {
    let res = await fetch(`https://reqres.in/api/users?page=${page}`);
    let users = await res.json();
    setUsers(users.data);
    console.log(users);
  }, [page]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10px", marginBottom: 0 }}>
        List of Users
      </h1>
      <div className="app">
        {users.length > 0 ? (
          users.map((user) => {
            return <Users key={uuidv4()} user={user}></Users>;
          })
        ) : (
          <h1>Loading Users</h1>
        )}
      </div>
      <div className="pages">
        <Stack spacing={2}>
          <Pagination
            count={obj.total_pages}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
