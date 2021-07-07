import {useHistory} from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupPage() {

  const history = useHistory();

  function addMeetupHandler(meetupData){
    fetch(
      'https://react-meetup-121-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(
        ()=>{ history.replace('/') }
      )
      ;
  }

  return <section>
    <h1>Add new meetup!</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
  </section>
  
}

export default NewMeetupPage;
