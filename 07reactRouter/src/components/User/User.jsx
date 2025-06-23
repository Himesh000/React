import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <>
      <h1 className="bg-gray-900 text-white rounded-full py-3 px-3">User : {userId}</h1>
    </>
  );
}

export default User;
