import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
  Twitter = "twitter",
  Youtube = "youtube"
}

export const CrateContentModel = ({open, onClose}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Twitter);
  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    if(!title || !link){
      alert("Please enter title and link");
      return;
    }
    try{
      await axios.post(`${BACKEND_URL}/api/v1/content`, {link,title, type}, {
        headers: {
          "Authorization":  localStorage.getItem("token")
      }})
    }
    catch (error:any) {
      alert(`Content creation failed: ${error.response?.data?.message || error.message}` )
    }
  }
  return <div>
    {open && <div>
     <div className="w-screen h-screen absolute top-0 left-0 bg-slate-500 opacity-60 flex justify-center"> </div> 
      <div className="w-screen h-screen absolute top-0 left-0 flex justify-center">
      <div className="flex flex-col justify-center">
        <span className="bg-white p-4 rounded-md fixed">
          <div className="flex justify-end">
            <div onClick={onClose} className="cursor-pointer">
            <CrossIcon size="md"/>
            </div>
          </div>
          <div>
          <Input reference={titleRef} placeholder="Title"/>
          <Input reference={linkRef} placeholder="Link"/>
        </div>
        <div>
          <h1>Type</h1>
          <div className="flex gap-2 p-4 justify-center">
            <Button variant={type===ContentType.Twitter ? "primary":"secondary"} size="md" text="Twitter" onClick={()=>setType(ContentType.Twitter)}/>
            <Button variant={type===ContentType.Youtube ? "primary":"secondary"} size="md" text="Youtube" onClick={()=>setType(ContentType.Youtube)}/>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={addContent} variant="primary" size="md" text="Submit"/>
        </div>
        </span>
      </div>
      </div> 
    </div>
    }
  </div>
}

