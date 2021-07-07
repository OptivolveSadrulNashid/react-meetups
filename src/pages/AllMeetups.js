import { useState, useEffect } from "react";
import MeetupList from "../components/meetup/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupPage() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedData, setLoadeddata] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://react-meetup-121-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setisLoading(false);
        setLoadeddata(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Is loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>All meetups !</h2>
      <MeetupList meetups={loadedData}></MeetupList>
    </section>
  );
}

export default AllMeetupPage;
