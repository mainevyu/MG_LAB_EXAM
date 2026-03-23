import { useState } from "react";

interface FeedbackData {
  studentName: string;
  studentID: string;
  bookTitle: string;
  author: string;
  reasonForRequest: string;
}

function BookRequest() {
  const [studentName, setStudentName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reasonForRequest, setReasonForRequest] = useState("");
  const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);

  const handleControlledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FeedbackData = { studentName, studentID, bookTitle, author, reasonForRequest };
    setSubmittedData(data);
    setStudentName("");
    setStudentID("");
    setBookTitle("");
    setAuthor("");
    setReasonForRequest("");
  };

  return (
    <section>
      <div className="title-top">
        <h2>Book Request Form</h2>
        <p>Submit your book request below:</p>
      </div>

      <div className="content form">
        <form onSubmit={handleControlledSubmit}>
          <div>
            <label>Student Name:</label>
            <input type="text" value={studentName} 
            onChange={e => setStudentName(e.target.value)} />
          </div>

          <div>
            <label>Student ID:</label>
            <input type="text" value={studentID} 
            onChange={e => setStudentID(e.target.value)} />
          </div>

          <div>
            <label>Book Title:</label>
            <textarea value={bookTitle} 
            onChange={e => setBookTitle(e.target.value)} />
          </div>

          <div>
            <label>Author:</label>
            <textarea value={author} 
            onChange={e => setAuthor(e.target.value)} />
          </div>

          <div>
            <label>Reason:</label>
            <textarea value={reasonForRequest} 
            onChange={e => setReasonForRequest(e.target.value)} />
          </div>

          <button type="submit">Submit Request</button>
        </form>

        {submittedData && (
          <div className="box">
            <h3>Submitted Requests:</h3>
            <p><strong>Student Name:</strong> 
            {submittedData.studentName}</p>

            <p><strong>Student ID:</strong> 
            {submittedData.studentID}</p>

            <p><strong>Book Title:</strong> 
            {submittedData.bookTitle}</p>

            <p><strong>Author:</strong> 
            {submittedData.author}</p>

            <p><strong>Reason:</strong> 
            {submittedData.reasonForRequest}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BookRequest;