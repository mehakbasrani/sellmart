"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";

interface ChatFormProps {
  email: string;
  userEmail: string;
}

// Define the ChatForm component
const ChatForm = ({ email, userEmail }: ChatFormProps) => {

  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); 
  const [messageType, setMessageType] = useState(""); 

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // console.log("Email to send:", email);
    // console.log("Email from:", userEmail);
    // console.log("Message to send:", message);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          userEmail,
          message,
        }),
      });

      // console.log(response);

      const data = await response.json();

      // console.log(data);
      if (data.success) {

        setMessage("");
        setStatusMessage("Message sent successfully!");
        setMessageType("success"); 

      } else {

        alert("Failed to send message.");
       setStatusMessage("An error occurred while sending the message.");
       setMessageType("error");

      }
    } catch (error) {
      console.error("Error:", error);
      // alert("An error occurred while sending the message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-5 text-sm">
        <textarea
          className="p-4 rounded-l focus:outline focus:outline-2 focus:outline-[#ebf2f7]"
          rows={5}
          cols={25}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          required
        />
        <button
          type="submit"
          className="btn w-full mt-2 bg-[#ebf2f7]  hover:bg-[#00b53f]"
        >
          Send
        </button>
            {statusMessage && messageType === 'success' ? (
  <Alert className="mt-4" severity="success">
    {statusMessage}
  </Alert>
) : (
  messageType === 'error' && (
    <Alert className="mt-4" severity="error">
      {statusMessage}
    </Alert>
  )
)}

      </div>
    </form>
  );
};

export default ChatForm;
