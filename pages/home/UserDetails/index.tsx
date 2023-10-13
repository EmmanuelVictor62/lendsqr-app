import React from "react";
import { useParams } from "react-router-dom";

interface UserDetailsProps {
  name?: string;
}

const UserDetails: React.FC<UserDetailsProps> = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is the {id} </p>
    </div>
  );
};

export default UserDetails;
