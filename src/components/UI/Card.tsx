import { ShareIcon } from "../../icons/ShareIcon";

interface cardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({title,link,type}: cardProps) => {
  return <div className="bg-white rounded-md border-gray-200 max-w-78 border p-4">
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="pr-2 text-gray-500 text-md">
          <ShareIcon size="md"/>
        </div>
        {title}
      </div>
      <div className="flex items-center">
        <div className="pr-2 text-gray-500">
          <a href={link} target="_blank">
            <ShareIcon size="md"/>
          </a>
        </div>
        <div className="pr-2 text-gray-500">
          <ShareIcon size="md"/>
        </div>
      </div>
    </div> 
    <div className="pt-4">
      {type==="youtube" && <iframe className="w-full" src={link.replace("watch","embed")} title="YouTube video player" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
      
      
      {type==="twitter" && <blockquote className="twitter-tweet">
        <a href={link.replace("x.com","twitter.com")}></a> 
      </blockquote>
      }

    </div>
    
  </div>;
}