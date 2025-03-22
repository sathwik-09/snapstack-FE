import { useRef, useState } from "react";
import { Button } from "../components/UI/Button"
import { Input } from "../components/UI/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [loading,setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const signin = async () => {
    if (!emailRef.current?.value || !passwordRef.current?.value) {
      alert("Please enter email and password");
      return;
    }
    setLoading(true); 
    try{
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {email, password})
      alert("You are Signed in")
      const jwt = (response.data as { token: string }).token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");

    }
    catch (error:any) {
      alert(`Signin failed: ${error.response?.data?.message || error.message}` )

    } 
    finally{
      setLoading(false);
    }
  }
  return (<div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
      <div className="bg-white rounded-md min-w-48 p-8">
        <Input reference={emailRef} placeholder="Email" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
        <Button loading={loading}  variant="primary" size="md" text="Sign In" fullWidth={true} onClick={signin} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}