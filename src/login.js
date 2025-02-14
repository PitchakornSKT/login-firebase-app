import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "./auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Paper elevation={5} sx={{ padding: 4, marginTop: 8, backgroundColor: "#fff", color: "#333", borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#FF5722", fontWeight: "bold" }}>
          เข้าสู่ระบบ
        </Typography>
        <TextField fullWidth label="อีเมล" variant="outlined" margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="รหัสผ่าน" type="password" variant="outlined" margin="normal" onChange={(e) => setPassword(e.target.value)} />
        <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#FF5722", color: "#fff" }} onClick={() => login(email, password, navigate)}>
          เข้าสู่ระบบ
        </Button>
        <Typography align="center" mt={2}>
          <a href="/reset-password" style={{ color: "#FF5722", textDecoration: "none" }}>ลืมรหัสผ่าน?</a>
        </Typography>
        <Typography align="center" mt={1}>
          <a href="/register" style={{ color: "#FF5722", textDecoration: "none" }}>สมัครสมาชิก</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
