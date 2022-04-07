import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import modalInput from "./modalInput.json";
const baseUrl = "http://localhost:3002";

const Message = ({ authToken, message }) => {
  console.log(message, "hello");
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
    <div key={message._id} className=" m-3 shadow-lg flex flex-col p-2">
      <div className="text-2xl font-bold">
        <span>Name:</span>
        {message.name}
      </div>
      <div>
        <span>Email:</span>
        {message.email}
      </div>
      <div>
        <span>Phone:</span>
        {message.phone}
      </div>
      <div>
        <span>Subject:</span>
        {message.subject}
      </div>
      <div>
        <span>Message:</span>
        {message.message}
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

const Admin = ({ authToken, setAuthToken }) => {
  //for login
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, []);
  // const [modal, setModal] = useState(false);

  //to identify which button is clicked
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContactInfo, setActiveContactInfo] = useState(false);
  const [activeAddWork, setActiveAddWork] = useState(false);

  const [profile, setProfile] = useState({
    title1: "",
    title2: "",
    title3: "",
    twitterUrl: "",
    facebookUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
  });

  const [about, setAbout] = useState({
    aboutRole: "",
    description: "",
    aboutImage: "",
  });

  const [contactInfo, setContactInfo] = useState({
    address: "",
    phone: "",
    email: "",
    website: "",
  });

  const [addWork, setAddWork] = useState({
    workImage: "",
    workTitle: "",
    description: "",
  });
  const [readWork, setReadWork] = useState(null);

  //read all works
  const readallworkHandler = async () => {
    const dataRaw = await fetch(`${baseUrl}/getwork`);
    const data = await dataRaw.json();
    console.log(data);
    setReadWork(data.allWork);
  };

  //update induvisual work
  const [updateWorkModal, setUpdateWorkModal] = useState({
    activeUpdateWork: false,
    id: "",
  });
  const updateWorkModalHandler = (id) => {
    setUpdateWorkModal({
      activeUpdateWork: true,
      id: id,
    });
  };

  const [updateWork, setUpdateWork] = useState({
    workImage: "",
    workTitle: "",
    description: "",
  });

  const onchangeUpdateHandler = (e) => {
    setUpdateWork({ ...updateWork, [e.target.name]: e.target.value });
  };
  const updateworkHandler = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const dataRaw = await fetch(`${baseUrl}/updatework/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authToken: authToken,
      },
      body: JSON.stringify(updateWork),
    });
    const data = await dataRaw.json();
    console.log(data);
  };

  const deleteWorkHandler = async (e, id) => {
    e.preventDefault();
    const dataRaw = await fetch(`${baseUrl}/deleteWork/${id}`, {
      method: "DELETE",
      headers: {
        authToken: authToken,
      },
    });
    const data = await dataRaw.json();
    console.log(data);
  };

  const [readMessages, setReadMessages] = useState(null);
  const readallmessages = async (e) => {
    e.preventDefault();
    const dataRaw = await fetch(`${baseUrl}/getcontactform`, {
      headers: {
        authToken: authToken,
      },
    });
    const data = await dataRaw.json();
    console.log(data.contactFormDetail);
    setReadMessages(data.contactFormDetail);
  };

  // // const [markState, setMarkState] = useState(false);
  // const markonclickHandler = async (id) => {
  //   const dataRaw = await fetch(`${baseUrl}/contactformunreadmessage/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //       authToken: authToken,
  //     },
  //     body: JSON.stringify({ mark: true }),
  //   });
  //   const data = await dataRaw.json();
  //   console.log(data);
  //   // setMarkState(data.success);
  // };

  const [unreadMessages, setUnReadMessages] = useState(null);
  const readallunreadmessages = async (e) => {
    e.preventDefault();
    const dataRaw = await fetch(`${baseUrl}/getunreadmessage`, {
      headers: {
        authToken: authToken,
      },
    });
    const data = await dataRaw.json();
    console.log(data.contactFormDetail);
    setUnReadMessages(data.contactFormDetail);
  };
  return (
    <>
      {/* {setInterval(() => {
        markState && <div className="mt-28">message read successfully</div>;
      }, 3000)} */}
      <div className="mt-28 p-3 flex flex-wrap">
        <button
          onClick={() => setActiveProfile(true)}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Update Banner
        </button>

        <button
          onClick={() => setActiveAbout(true)}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Update About Section
        </button>

        <button
          onClick={() => setActiveContactInfo(true)}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Update Contact Information
        </button>

        <button
          onClick={() => setActiveAddWork(true)}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Add Work
        </button>

        <button
          onClick={readallworkHandler}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Read All Work
        </button>

        <button
          onClick={readallmessages}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Read All messages
        </button>
        <button
          onClick={readallunreadmessages}
          className="mt-4 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Read Unread messages
        </button>
      </div>

      {/* modal */}

      <div className="h-fit flex justify-center ">
        {activeProfile && (
          <Modal
            setActive={setActiveProfile}
            state={profile}
            setState={setProfile}
            buttonText="Update"
            modalMethod="put"
            authToken={authToken}
            endpoint="/updateProfileDetail"
          />
        )}
        {activeAbout && (
          <Modal
            setActive={setActiveAbout}
            state={about}
            setState={setAbout}
            buttonText="Update"
            modalMethod="put"
            authToken={authToken}
            endpoint="/updateAbout"
          />
        )}

        {activeContactInfo && (
          <Modal
            setActive={setActiveContactInfo}
            state={contactInfo}
            setState={setContactInfo}
            buttonText="Update"
            modalMethod="put"
            authToken={authToken}
            endpoint="/updatecontactinfo"
          />
        )}
        {activeAddWork && (
          <Modal
            setActive={setActiveAddWork}
            state={addWork}
            setState={setAddWork}
            buttonText="Add"
            modalMethod="post"
            authToken={authToken}
            endpoint="/postwork"
          />
        )}
      </div>

      {readWork && (
        <div className="flex flex-col mt-6 justify-center ">
          <div className="flex flex-wrap">
            {readWork.map((work) => {
              return (
                <div key={work._id} className="border-2 m-3 p-3 text-2xl">
                  <div>{work.workImage}</div>
                  <div>{work.workTitle}</div>
                  <div>{work.description}</div>
                  <button
                    onClick={() => updateWorkModalHandler(work._id)}
                    className="mt-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    update Work
                  </button>
                  <button
                    onClick={(e) => deleteWorkHandler(e, work._id)}
                    className="mt-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Delete Work
                  </button>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setReadWork(null)}
            className="mt-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Close All
          </button>
        </div>
      )}

      {updateWorkModal.activeUpdateWork && (
        <div className="flex justify-center">
          <form
            onSubmit={(e) => updateworkHandler(e, updateWorkModal.id)}
            className="border-2 border-gray-800 md:w-1/2 w-9/12 p-4"
          >
            <input
              name="workImage"
              onChange={onchangeUpdateHandler}
              type="text"
              placeholder="workImage"
              className="block border focus:outline-none lg:mr-4 mb-4 lg:mb-0 my-2 w-full p-2 rounded-md focus:border-black"
            />
            <input
              onChange={onchangeUpdateHandler}
              name="workTitle"
              type="text"
              placeholder="workTitle"
              className="block border focus:outline-none lg:mr-4 mb-4 lg:mb-0 my-2 w-full p-2 rounded-md focus:border-black"
            />
            <input
              name="description"
              onChange={onchangeUpdateHandler}
              type="text"
              placeholder="description"
              className="block border focus:outline-none lg:mr-4 mb-4 lg:mb-0 my-2 w-full p-2 rounded-md focus:border-black"
            />
            <button
              type="submit"
              className="mt-2 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Update
            </button>
          </form>
        </div>
      )}

      {readMessages && (
        <>
          <div className="p-8 flex flex-wrap font-mono">
            {readMessages.map((message) => {
              return (
                <div
                  key={message._id}
                  className=" m-3 shadow-lg flex flex-col p-2"
                >
                  <div className="text-2xl font-bold">
                    <span>Name:</span>
                    {message.name}
                  </div>
                  <div>
                    <span>Email:</span>
                    {message.email}
                  </div>
                  <div>
                    <span>Phone:</span>
                    {message.phone}
                  </div>
                  <div>
                    <span>Subject:</span>
                    {message.subject}
                  </div>
                  <div>
                    <span>Message:</span>
                    {message.message}
                  </div>
                  {/* {markState ? (
                    <button className=" font-serif text-green-600 cursor-pointer text-right">
                      marked as read
                    </button>
                  ) : (
                    <button
                      onClick={() => markonclickHandler(message._id)}
                      className=" font-serif text-blue-600 cursor-pointer text-right"
                    >
                      mark as read
                    </button>
                  )} */}
                </div>
              );
            })}
          </div>
          <button
            className="mt-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => setReadMessages(null)}
          >
            Close
          </button>
        </>
      )}
      {unreadMessages && (
        <>
          <div className="p-8 flex flex-wrap font-mono">
            {unreadMessages.map((message) => {
              return (
                <Message authToken={authToken} message={message} />
              );
            })}
          </div>
          <button
            className="mt-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => setUnReadMessages(null)}
          >
            Close
          </button>
        </>
      )}
    </>
  );
};

export default Admin;

{
  /* <div className="mt-28">
      <div className="border-2">
        <form onSubmit={onSumbmitHandler}>
          <div>
            <label htmlFor="title1">Title1</label>
            <input
              onChange={onChangeHandler}
              className="border-2"
              type="text"
              name="title1"
              value={profile.title1}
              id="title1"
            />
          </div>
          <div>
            <label htmlFor="title2">Title2</label>
            <input
              onChange={onChangeHandler}
              className="border-2"
              type="text"
              name="title2"
              value={profile.title2}
              id="titl2"
            />
          </div>
          <div>
            <label htmlFor="title3">Title3</label>
            <input
              onChange={onChangeHandler}
              className="border-2"
              type="text"
              name="title3"
              value={profile.title3}
              id="title3"
            />
          </div>
          <div>
            <label htmlFor="facebook">facebookLink</label>
            <input
              onChange={onChangeHandler}
              className="border-2"
              type="text"
              name="facebookUrl"
              value={profile.facebookUrl}
              id="facebook"
            />
          </div>
          <label htmlFor="twitter">twitterLink</label>
          <input
            onChange={onChangeHandler}
            className="border-2"
            type="text"
            name="twitterUrl"
            value={profile.twitterUrl}
            id="twitter"
          />
          <div>
            <label htmlFor="instagram">instagramLink</label>
            <input
              onChange={onChangeHandler}
              className="border-2"
              type="text"
              name="instagramUrl"
              value={profile.instagramUrl}
              id="instagram"
            />
          </div>
          <div>
            <label htmlFor="bgImage">BackGround Image</label>
            <input
              onChange={onChangeHandler}
              className="border-2"
              type="text"
              name="backgroundImage"
              value={profile.backgroundImage}
              id="bgImage"
            />
          </div>
          <div>
            <button className="border-2" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div> */
}
