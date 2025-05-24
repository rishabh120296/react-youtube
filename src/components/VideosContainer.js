import { VIDEO_API } from "../utils/constants";
//import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeMenu());
  };
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(VIDEO_API);
    const data = await response.json();

    const videos = data?.items;

    setVideoList(videos);
  };

  if (videoList.length) {
    return (
      <div className="flex flex-wrap">
        {videoList.map((video) => (
          <Link
            key={video.id}
            to={"/watch?v=" + video.id}
            state={video}
            onClick={() => handleClick()}
          >
            <VideoCard className="cursor-pointer" key={video.id} info={video} />
          </Link>
        ))}
      </div>
    );
  }
};

export default VideoContainer;
