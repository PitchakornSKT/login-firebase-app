import React, { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { resetPassword } from "./auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Container maxWidth="xs">
      <Paper elevation={5} sx={{ padding: 4, marginTop: 8, backgroundColor: "#fff", color: "#333", borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#FF5722" }}>
          ลืมรหัสผ่าน
        </Typography>
        <TextField fullWidth label="กรอกอีเมล" variant="outlined" margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#FF5722", color: "#fff" }} onClick={() => resetPassword(email)}>
          ส่งลิงก์รีเซ็ต
        </Button>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
