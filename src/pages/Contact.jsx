import "../pages/Contact.css"
import "../components/HeroComponent.css"
import contactHero from '../asset/contactHero.jpg'
import { useState } from "react";
export const Contact = () => {

  const [inputValue, setInputValue] = useState({
    userName: "",
    email: "",
    comments: ""
  })

  const handelForm = (e) => {
    setInputValue((prev) => ({
      ...inputValue, [e.target.name]: e.target.value
    }))
  }

  const handeSubmit = (e) => {
    e.preventDefault();

    setInputValue({
      userName: "",
      email: "",
      comments: ""
    })
    console.log(inputValue);
  }


  return (
    <section className='contactSection'>
      <div className="contact-hero">

        <img src={contactHero} alt="heroImg" />

        <div className="overlay ">
          <div className="heroContent">
            <h1>Contact Us</h1>
          </div>
        </div>


        <section className='formSection'>

          <div className='formComponent'>

            <div className='left-content'>

              <h1>Let’s Stay Connected</h1>

              <p>Have a question, suggestion, or simply want to share your love for cooking? We’d love to hear from you. Reach out and let’s make something delicious together.</p>

            </div>

            <div className='right-content'>
              <h1>Your Details</h1>
              <p>Let us know how to get back to you</p>



              <form onSubmit={handeSubmit}>

                <label >Name-</label>

                <input
                  type="text"
                  name="userName"
                  placeholder="John"
                  autoComplete="off"
                  required
                  onChange={handelForm}
                  value={inputValue.userName}
                />


                <label >Email Address-</label>
                <input
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                  autoComplete="off"
                  required
                  onChange={handelForm}
                  value={inputValue.email}
                />



                <label>Comments / Questions- </label>
                <textarea
                  name="comments"
                  placeholder="Tell us what's on your mind..."
                  onChange={handelForm}
                  value={inputValue.comments}
                  autoComplete="off"
                  required
                ></textarea>



                <button type="submit" className="contact-submit">
                  Send Message →
                </button>
              </form>


            </div>

          </div>
        </section>
      </div>
    </section>
  );
};