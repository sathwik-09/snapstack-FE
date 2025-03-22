import { useRef, useState } from "react";
import { Button } from "../components/UI/Button"
import { Input } from "../components/UI/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [loading,setLoading] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const signup = async () => {
    if (!usernameRef.current?.value || !emailRef.current?.value || !passwordRef.current?.value) {
      alert("Please enter email and password");
      return;
    }
    setLoading(true); 
    try{
      const username = usernameRef.current?.value;
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {username, email, password})
      navigate("/signin");
      alert("You are Signed Up")
    }
    catch (error) {
      alert("Signup failed: " )
    } 
    finally{
      setLoading(false);
    }
  }

  return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
    <div className="bg-white rounded-md min-w-48 p-8">
      <Input reference={usernameRef} placeholder="Username" />
      <Input reference={emailRef} placeholder="Email" />
      <Input reference={passwordRef} placeholder="Password"/>
      <div className="flex justify-center pt-4">
        <Button loading={loading}  variant="primary" size="md" text="Sign Up" fullWidth={true} onClick={signup} className="cursor-pointer" />
      </div>
    </div>
  </div>
}