import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(1);
  useEffect(() => {
    //Api call
  });
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h3>count= {count}</h3>

      <h3>Kanpur</h3>
      <h3>keshavsingh123</h3>
    </div>
  );
};
export default User;
