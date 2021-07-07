import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import MeetupList from "../components/meetup/MeetupList";

function FavouritePage() {
  const favContx = useContext(FavouriteContext);

  let content;

  if (favContx.totalFav === 0) {
    content = <p>You do not have any favourite meetup now! Wanna add some?</p>;
  } else {
    content = <MeetupList meetups={favContx.favourites}></MeetupList>;
  }

  return (
    <section>
      <h1>My Favourite List of Meetups</h1>
      {content}
    </section>
  );
}

export default FavouritePage;
