import { useRef } from "react";
import Card from "../ui/Card";
import Classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props){
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();
    //ref is used to get current value from the form. ref is keyword.

    function submitHandler(event){
        //event prevents the browser to refresh and send http 
        event.preventDefault();

        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
    }


return <Card>
    <form className={Classes.form} onSubmit={submitHandler}>
        <div className={Classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text"  required id="title" ref={titleRef}></input>
        </div>

        <div className={Classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url"  required id="image" ref={imageRef}></input>
        </div>

        <div className={Classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text"  required id="address" ref={addressRef}></input>
        </div>

        <div className={Classes.control}>
            <label htmlFor="des">Description</label>
            <textarea id="des"  required rows='5' ref={descriptionRef}></textarea>
        </div>

        <div className={Classes.actions}>
            <button>Add Meetup</button>
        </div>
    </form>
</Card>
}

export default NewMeetupForm;