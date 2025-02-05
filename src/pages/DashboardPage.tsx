import { Button, Container } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.ts";
import { useEffect, useState } from "react";
import DashboardData from "../components/DashboardData.tsx";

interface LoginUserInformation {
  name: string | null;
  email: string | null;
}

const DashboardPage = () => {
  const [userInfo, setUserInfo] = useState<LoginUserInformation | null>(null);

  const handleLoginWithGoogle = async () => {
    console.log("google");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { displayName, email } = user;
      const loginUserInformation = { name: displayName, email: email };
      setUserInfo(loginUserInformation);
      localStorage.setItem(
        "loginUserInformation",
        JSON.stringify(loginUserInformation)
      );
    } catch (error) {
      console.log(error);
      alert("got an error while login");
    }
  };

  const logout = () => {
    localStorage.removeItem("loginUserInformation");
    setUserInfo(null);
  };

  useEffect(() => {
    const user = localStorage.getItem("loginUserInformation");
    if (user) {
      const parsedData = JSON.parse(user);
      setUserInfo(parsedData);
    }
  }, []);

  // const isLogin = false;

  return userInfo ? (
    <DashboardData userInfo={userInfo} logout={logout} />
  ) : (
    <Container sx={{ ml: "4rem", mt: "4rem" }}>
      <h1>Login with google to view the dashboard data</h1>
      <Button
        onClick={handleLoginWithGoogle}
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Login with Google
      </Button>
    </Container>
  );
};

export default DashboardPage;
