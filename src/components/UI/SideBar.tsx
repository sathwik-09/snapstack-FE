import { LogoIcon } from "../../icons/LogoIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SideBarItems } from "./SideBarItems"


export const SideBar = ()=> {
  return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
    <div className="text-2xl pt-8 flex items-center">
      <div className="pr-2 ">
      <LogoIcon/>
      </div>
      Snap Stack
    </div>
    <div className="pt-8 pl-4">
      <SideBarItems text="Twitter" icon={<TwitterIcon/>}/>
      <SideBarItems text="Youtube" icon={<YoutubeIcon/>}/>

    </div>
  </div>
}