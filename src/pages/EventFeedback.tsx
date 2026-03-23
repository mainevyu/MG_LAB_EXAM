import { useRef } from "react";

interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
}

function EventFeedback() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  const handleUncontrolledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current && emailRef.current && feedbackRef.current) {
      const data: FeedbackData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        feedback: feedbackRef.current.value,
      };
      console.log("Uncontrolled Form Data:", data);
      alert("Check the console for submitted data.");
    }
  };

  return (
    <section>
      <div className="title-top">
        <h2>Event Feedback</h2>
        <p>Submit your feedback about university events below:</p>
      </div>

      <div className="content form">
        <form onSubmit={handleUncontrolledSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" ref={nameRef} />
          </div>

          <div>
            <label>Email:</label>
            <input type="text" ref={emailRef} />
          </div>

          <div>
            <label>Feedback:</label>
            <textarea ref={feedbackRef} />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </section>
  );
}

export default EventFeedback;