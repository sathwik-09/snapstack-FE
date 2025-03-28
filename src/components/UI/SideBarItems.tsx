import { ReactElement } from "react";

interface SideBarItemProps {
  text: string;
  icon: ReactElement;
}

export const SideBarItems = ({ text, icon }: SideBarItemProps) => {
  return (
    <div className="flex items-center text-gray-700 py-3 px-4 cursor-pointer hover:bg-indigo-500 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105">
      <div className="mr-4 p-2 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-lg font-medium">{text}</div>
    </div>
  );
};
