import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

export const login = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("เข้าสู่ระบบสำเร็จ!");
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};

export const register = async (email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("ส่งลิงก์รีเซ็ตรหัสผ่านไปที่อีเมลแล้ว");
  } catch (error) {
    alert(error.message);
  }
};

export const logout = async (navigate) => {
  try {
    await signOut(auth);
    alert("ออกจากระบบสำเร็จ!");
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};
