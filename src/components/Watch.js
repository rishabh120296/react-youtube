import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import ChatComponent from "./ChatComponent";

const Watch = () => {
  let [searchParams] = useSearchParams();

  return (
    <div className="m-4 flex flex-col w-full">
      <div className="flex">
        <iframe
          width="900px"
          height="400px"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <ChatComponent />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
