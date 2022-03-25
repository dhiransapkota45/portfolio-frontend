import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";

const Admin = ({ authToken, setAuthToken }) => {
  const [profile, setProfile] = useState({
    title1: "",
    title2: "",
    title3: "",
    twitterUrl: "",
    facebookUrl: "",
    instagramUrl: "",
    backgroundImage: "",
  });

  //for login
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const onChangeHandler = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSumbmitHandler = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3002/updateProfileDetail`;
    const methods = "PUT";
    const header = {
      "Content-Type": "application/json",
      authToken: authToken,
    };
    const dataRaw = await fetch(url, {
      method: methods,
      headers: header,
      body: JSON.stringify(profile),
    });
    const data = await dataRaw.json();
    console.log(data);
  };

  return (
    <div className="mt-28">
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
    </div>
  );
};

export default Admin;
