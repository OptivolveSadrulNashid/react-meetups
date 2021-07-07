import MeetupItem from "./MeetupItem";
import Classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <div>
      <ul className={Classes.list}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            desp={meetup.description}
          ></MeetupItem>
        ))}
      </ul>
    </div>
  );
}

export default MeetupList;
