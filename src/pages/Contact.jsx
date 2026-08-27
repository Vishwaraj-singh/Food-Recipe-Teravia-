import "../pages/Contact.css";
import "../components/HeroComponent.css";
import contactHero from "../asset/contactHero.jpg";
import { useState } from "react";
import { supabase } from "../library/SupabaseClient";

export const Contact = () => {

  const [inputValue, setInputValue] = useState({
    userName: "",
    email: "",
    comments: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handelForm = (e) => {

    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  // Submit form
  const handeSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      const { data, error } =
        await supabase.functions.invoke(
          "send-contact-email",
          {
            body: {
              name: inputValue.userName,
              email: inputValue.email,
              message: inputValue.comments
            }
          }
        );


      if (error) {
        throw error;
      }


      if (!data?.success) {
        throw new Error(
          data?.message || "Something went wrong."
        );
      }


      // Success message
      setSuccess(
        "Thank you! Your message has been sent successfully."
      );


      // Clear form
      setInputValue({
        userName: "",
        email: "",
        comments: ""
      });

    } catch (err) {

      console.error("Contact form error:", err);

      setError(
        err.message ||
        "Unable to send your message. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <section className="contactSection">

      <div className="contact-hero">

        <img
          src={contactHero}
          alt="heroImg"
        />


        <div className="overlay">

          <div className="heroContent">

            <h1>
              Contact Us
            </h1>

          </div>

        </div>


        <section className="formSection">

          <div className="formComponent">


            {/* LEFT CONTENT */}

            <div className="left-content">

              <h1>
                Let’s Stay Connected
              </h1>

              <p>
                Have a question, suggestion, or simply want
                to share your love for cooking? We’d love to
                hear from you. Reach out and let’s make
                something delicious together.
              </p>

            </div>


            {/* RIGHT CONTENT */}

            <div className="right-content">

              <h1>
                Your Details
              </h1>

              <p>
                Let us know how to get back to you
              </p>


              <form onSubmit={handeSubmit}>


                {/* NAME */}

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="userName"
                  placeholder="John"
                  autoComplete="off"
                  required
                  onChange={handelForm}
                  value={inputValue.userName}
                />


                {/* EMAIL */}

                <label>
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                  autoComplete="off"
                  required
                  onChange={handelForm}
                  value={inputValue.email}
                />


                {/* MESSAGE */}

                <label>
                  Comments / Questions
                </label>

                <textarea
                  name="comments"
                  placeholder="Tell us what's on your mind..."
                  onChange={handelForm}
                  value={inputValue.comments}
                  autoComplete="off"
                  required
                />


                {/* BUTTON */}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={loading}
                >

                  {loading
                    ? "Sending..."
                    : "Send Message →"
                  }

                </button>


                {/* SUCCESS */}

                {success && (
                  <p className="success-message">
                    {success}
                  </p>
                )}


                {/* ERROR */}

                {error && (
                  <p className="error-message">
                    {error}
                  </p>
                )}

              </form>

            </div>

          </div>

        </section>

      </div>

    </section>
  );
};