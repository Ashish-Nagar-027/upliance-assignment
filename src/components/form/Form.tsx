import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userDataWithId = { id: Date.now(), ...formData };
    console.log("Form Data Submitted:", userDataWithId);
    localStorage.setItem("formData", JSON.stringify(userDataWithId));
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (Object.values(formData).some((value) => value)) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [formData]);

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
        height: "70vh",
        gap: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        User Data Form
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </form>
    </Container>
  );
};

export default Form;
