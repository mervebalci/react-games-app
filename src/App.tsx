import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        /* get method returns a promise.
        If this promise is resolved, we'll get a response object.
        If the promise get rejected, we'll get an error.
        In JS, we can put AWAIT keyword in front of promise to get the result */
        const res = await axios.get<User[]>(
          "http://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
