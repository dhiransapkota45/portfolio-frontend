import { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
// import useFetch from '../../CustomHooks/useFetch'
import { useNavigate } from "react-router-dom";

const baseUrl = `http://localhost:3002`;
const avatar =
  "https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg";






const Login = ({authToken, setAuthToken}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()
  const credentailHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const loginUrl = `${baseUrl}/login`;
    const fetcher = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const fetchData = await fetcher.json();
    console.log(fetchData);
    setAuthToken(fetchData.authToken)
    if(fetchData.success){
      navigate("/admin")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center justify-center max-w-lg "
      >
        <img src={avatar} alt="" className=" w-16 rounded-full mb-6" />
        <div className=" font-sans text-2xl mb-6">Login Form</div>

        <div className=" border border-gray-200 w-full p-2 mb-6 flex items-center  rounded-md">
          <FaUserAlt className="mx-3" />
          <input
            onChange={credentailHandler}
            name="username"
            value={credentials.username}
            placeholder="Username"
            type="text"
            className=" focus:outline-none w-full"
          />
        </div>

        <div className=" border border-gray-200 w-full p-2 mb-6 flex items-center  rounded-md">
          <FaLock className="mx-3" />
          <input
            name="password"
            onChange={credentailHandler}
            value={credentials.password}
            placeholder="Password"
            type="text"
            className=" focus:outline-none w-full"
          />
        </div>

        <div className="w-full">
          <button
            className="w-full bg-emerald-600 p-2 text-md text-white
                 hover:bg-emerald-700 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
