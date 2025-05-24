import Button from "./Button";
import VideoContainer from "./VideosContainer";

const buttons = [
  "All",
  "Music",
  "Mixes",
  "Live",
  "Android",
  "Movies",
  "Watched",
  "New to you",
  "Apis",
  "Comedy",
];
const MainContainer = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 m-2">
        {buttons.map((button) => (
          <Button key={button} name={button} />
        ))}
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
