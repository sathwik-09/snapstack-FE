import { useState } from "react";
import "../App.css";
import { Button } from "../components/UI/Button";
import { Card } from "../components/UI/Card";
import { CrateContentModel } from "../components/UI/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/UI/SideBar";
import { useContent } from "../hooks/useContent";

export const  Dashboard= ()=> {
  const [modelOpen, setModelOpen] = useState(false);
  const contents = useContent();
  console.log("Fetched contents:", contents);
  return (
    <div>
      <SideBar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CrateContentModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
        />
        <div className="flex justify-end pr-20 gap-4 pt-4">
          <Button
            onClick={() => setModelOpen(true)}
            startIcon={<PlusIcon size="lg" />}
            variant="primary"
            size="md"
            text="Add Content"
          />
          <Button
            startIcon={<ShareIcon size="lg" />}
            variant="secondary"
            size="md"
            text="Share Stack"
            onClick={() => {}}
          />
        </div>
        <div className="flex gap-3">
          {JSON.stringify(contents)}
        {contents.map(({ title, link, type }) => <Card title={title} link={link} type={type} />)}
        </div>
      </div>
    </div>
  );
}
