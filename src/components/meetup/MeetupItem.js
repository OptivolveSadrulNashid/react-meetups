import { useContext } from "react";
import Card from "../ui/Card";
import Classes from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourite-context";

function MeetupItem(props) {

  const favContx = useContext(FavouriteContext);
  const itemIsFavourite = favContx.itemIsFavourite(props.id);

  function toggleFavStatusHandler(){
    if(itemIsFavourite){
      favContx.removeFavourite(props.id);
    }else{
      favContx.addFavourite({
        id: props.id,
        image: props.image,
        description: props.desp,
        address: props.address,
        title: props.title
      });
    }
  }

  return (
    <li className={Classes.item}>
      <Card>
        <div className={Classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={Classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.desp}</p>
        </div>
        <div className={Classes.actions}>
          <button onClick={toggleFavStatusHandler}>{itemIsFavourite ? 'Remove from Favourite!' : 'Add to favourite!'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
