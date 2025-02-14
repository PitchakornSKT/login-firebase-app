import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register } from "./auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Paper elevation={5} sx={{ padding: 4, marginTop: 8, backgroundColor: "#fff", color: "#333", borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#FF5722", fontWeight: "bold" }}>
          สมัครสมาชิก
        </Typography>
        <TextField fullWidth label="อีเมล" variant="outlined" margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="รหัสผ่าน" type="password" variant="outlined" margin="normal" onChange={(e) => setPassword(e.target.value)} />
        <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#FF5722", color: "#fff" }} onClick={() => register(email, password, navigate)}>
          สมัครสมาชิก
        </Button>
        <Typography align="center" mt={2}>
          <a href="/" style={{ color: "#FF5722", textDecoration: "none" }}>กลับไปหน้าเข้าสู่ระบบ</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
