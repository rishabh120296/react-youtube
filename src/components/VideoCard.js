const VideoCard = (props) => {
  //console.log(props);
  const { snippet, statistics } = props?.info;

  return (
    <div className="m-3 shadow-lg flex flex-col w-72">
      <img alt="video-img" src={snippet.thumbnails.medium.url} />
      <div className="text-wrap">{snippet.title}</div>
      <div>{snippet.channelTitle}</div>
      <div>{statistics.viewCount + " views"}</div>
      <div>{snippet.publishedAt}</div>
    </div>
  );
};

export default VideoCard;
