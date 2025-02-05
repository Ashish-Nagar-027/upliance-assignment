import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface DashboardDataProp {
  logout: () => void;
  userInfo: {
    name: string | null;
    email: string | null;
  } | null;
}

type dataType = {
  name: string;
  address: string;
  email: string;
  phone: string;
};

const DashboardData = ({ logout, userInfo }: DashboardDataProp) => {
  const count = localStorage.getItem("counter");
  const [formData, setFormData] = useState<dataType | null>(null);

  useEffect(() => {
    const userSavedData = localStorage.getItem("formData");
    if (userSavedData) {
      const parsedData = JSON.parse(userSavedData);
      setFormData({ ...parsedData });
    }
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderRadius: "10px",
          padding: "1rem",
          minWidth: "350px",
          width: "50vw",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem",
          }}
        >
          <h1 style={{ flex: "1" }}>Hi , {userInfo?.name}</h1>

          <Button
            onClick={logout}
            type="submit"
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        </div>
        <hr style={{ marginBottom: "1rem" }} />
        <div>
          <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>
            User Information
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p>Email : {userInfo?.email}</p>
            {formData && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p>Full Name: {formData?.name}</p>
                <p>address: {formData?.address}</p>
                <p>Form Email: {formData.email}</p>
                <p>phone: {formData.phone}</p>
              </div>
            )}
            {count && <p>Count value on counter : {count}</p>}
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default DashboardData;
