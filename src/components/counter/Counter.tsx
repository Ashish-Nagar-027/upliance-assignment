import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Typography variant="h1" sx={{}}>
        {count}
      </Typography>
      <Container
        sx={{
          justifyContent: "center",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Button onClick={() => setCount(count - 1)} variant="contained">
          decrease
        </Button>
        <Button onClick={() => setCount(count + 1)} variant="contained">
          increase
        </Button>
      </Container>
    </Container>
  );
};
