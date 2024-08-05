import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}

function Like({ onClick }: LikeProps) {
  const [likeStatus, setLikeStatus] = useState(false);

  function toggle() {
    setLikeStatus(!likeStatus);
    onClick();
  }

  if (likeStatus)
    return <IoMdHeart color="#ff6b81" size={35} onClick={toggle} />;
  return <IoMdHeartEmpty color="#ff6b81" size={35} onClick={toggle} />;
}

export default Like;
