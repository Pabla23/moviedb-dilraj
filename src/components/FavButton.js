import { ReactComponent as Heart } from "../svgs/heart.svg";

function FavButton() {
  return (
    <button>Button
        <Heart className='fav-btn'/>
    </button>
  );
}

export default FavButton;