import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFav: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupID) => {},
  itemIsFavourite: (meetupID) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourite, setFavourite] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setFavourite((prevUserFavourite) => {
      return prevUserFavourite.concat(favouriteMeetup);
    });
  }

  function removeFavouritehandler(meetupID) {
    setFavourite((prevUserFavourite) => {
      return prevUserFavourite.filter((meetup) => meetup.id !== meetupID);
    });
  }

  function itemIsFavHandler(meetupID) {
    return userFavourite.some((meetup) => meetup.id === meetupID);
  }

  const context = {
    favourites: userFavourite,
    totalFav: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouritehandler,
    itemIsFavourite: itemIsFavHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
