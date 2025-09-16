import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (err) {
        setisError(true);
      } finally {
        setisLoading(false);
      }
    };
    getUser();
  }, [id]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something Wrong ?</h2>;

  return (
    <div style={{ marginTop: "30px" }}>
      <h1>User Details</h1>
      <h2>ID: {user.id}</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

      <Link to="/users">⬅ Back to Users</Link>
    </div>
  );
}

export default UserDetails;
