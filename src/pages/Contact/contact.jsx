import { useState } from "react";



export default function Contact() {

  const [displayError, setDisplayError] = useState(false);
  const [displayEmailError, setDisplayEmailError] = useState(false);
  const textFieldNull = (event) => {

    if(!event.srcElement.value) {
      setDisplayError(true)
    }
    else{
      setDisplayError(false)
    }
    if(event.srcElement.id === "email"){
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      setDisplayEmailError(!pattern.test(event.srcElement.value));
    }

  }



    return (
      <div>
        <form className="contact-card" action="/submit-contact" method="post">
          <div>
          <label className="project-card-para" for="name">Name:</label>
          
          <input type="text" id="name" name="name" pattern=".+@globex\.com" required onBlur={() => textFieldNull(event)}/>
          </div>
          <div>
          <label className="project-card-para" for="email">Email:</label>
          <input type="email" id="email" name="email" required onBlur={() => textFieldNull(event)}/>
          </div>
          <div>
          <label className="project-card-para" for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required onBlur={() => textFieldNull(event)}></textarea>
          </div>
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </form>
        {displayError ? (<div>
          All fields must be filled before submitting.
        </div>) : null}
        {displayEmailError ? (<div>
          Please enter a valid email address.
        </div>) : null}
      </div>
    )
  };

