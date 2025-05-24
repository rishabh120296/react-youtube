import { useSelector } from "react-redux";

const SideBar = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!menuOpen) return null;

  return (
    <div className="w-48 p-10 flex flex-col gap-8 shadow">
      <ul className="flex flex-col gap-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li className="font-bold">You ▶️</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
