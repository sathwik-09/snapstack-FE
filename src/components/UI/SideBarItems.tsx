import { ReactElement } from "react";

interface SideBarItemProps {
  text: string;
  icon: ReactElement;
}

export const SideBarItems = ({text, icon}: SideBarItemProps) => {
  return <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-700">
    <div className="pr-2 pb-2 ">
      {icon}
    </div>
    <div className="cursor-pointer">
      {text}
    </div> 
  </div>
}