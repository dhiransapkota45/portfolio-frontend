import React, {useState} from 'react'
const baseUrl = process.env.REACT_APP_SERVER_BASE_URL

const MarkMessage = ({ authToken, message }) => {
    // console.log(message, "hello");
    const [markState, setMarkState] = useState(false);
  
    const markonclickHandler = async () => {
      const dataRaw = await fetch(
        `${baseUrl}/contactformunreadmessage/${message._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authToken: authToken,
          },
          body: JSON.stringify({ mark: true }),
        }
      );
      const data = await dataRaw.json();
      setMarkState(data.success);
    };
    return (
      <div key={message._id} className=" m-3 shadow-lg flex flex-col p-2 font-montserrat">
        <div className="text-xl font-bold">
          <span>Name:</span>
          &nbsp;{message.name}
        </div>
        <div>
          <span>Email:</span>
          &nbsp; {message.email}
        </div>
        <div>
          <span>Phone:</span>
          &nbsp; {message.phone}
        </div>
        <div>
          <span>Subject:</span>
          &nbsp;{message.subject}
        </div>
        <div className='font-oxygen font-bold text-gray-800'>
          <span>Message:</span>
          &emsp;{message.message}
        </div>
        {markState ? (
            <button className=" font-serif text-green-600 cursor-pointer text-right">
              marked as read
            </button>
          ) : (
            <button
              onClick={markonclickHandler}
              className=" font-serif text-blue-600 cursor-pointer text-right"
            >
              mark as read
            </button>
          )}
      </div>
    );
  };

export default MarkMessage