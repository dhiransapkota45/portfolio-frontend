import React from "react";

const Modal = ({
  setActive,
  state,
  setState,
  buttonText,
  modalMethod,
  authToken,
  endpoint,
}) => {
  const inputOnchangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //, modalMethod, state, endpoint
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const baseUrl = `http://localhost:3002`;
    // const methods = "PUT";
    const header = {
      "Content-Type": "application/json",
      authToken: authToken,
    };
    const dataRaw = await fetch(`${baseUrl}${endpoint}`, {
      method: modalMethod,
      headers: header,
      body: JSON.stringify(state),
    });
    const data = await dataRaw.json();
    // console.log(data);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="duration-500 border p-4 flex flex-col items-center shadow-md hover:shadow-xl"
    >
      <div className="w-full">
        {Object.entries(state).map(([key, value]) => {
          return (
            <input
              key={key}
              onChange={inputOnchangeHandler}
              name={key}
              type="text"
              placeholder={key}
              className="block border focus:outline-none lg:mr-4 mb-4 lg:mb-0 my-2 w-full p-2 rounded-md focus:border-black"
            />
          );
        })}

        <div className="flex justify-between my-4">
          <button
            onClick={() => setActive(false)}
            className="p-2  w-24 rounded-lg bg-red-600 hover:bg-red-800 text-white text-xl duration-500"
          >
            Close
          </button>
          <button
            type="submit"
            className="p-2 w-24 rounded-lg bg-green-600 hover:bg-green-800 text-white text-xl duration-500"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
