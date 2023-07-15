import type { NextPage } from "next";
import LoginPage from "./login/index";

const Home: NextPage = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Home;
