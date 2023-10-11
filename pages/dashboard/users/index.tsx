import React from "react";

import Layout from "@/components/Layout";

interface UsersProps {
  name?: string;
}

const Users: React.FC<UsersProps> = () => {
  return (
    <div>
      <Layout>
        <h1>Users</h1>
      </Layout>
    </div>
  );
};

export default Users;
