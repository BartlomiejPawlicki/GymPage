import React, { useState, useEffect } from "react";
import "../style/UsersPage.css";
import ReactLoading from "react-loading";

const UsersPage = () => {
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=15")
        .then((response) => response.json())
        .then((response) => {
          if (isSubscribed) {
          setDone(true);
          setPosts(response.results);
        }})
       
    
    }, 2500);
    return () => isSubscribed = false
  }, []);

  return (
    <>
      {!done ? (
        <div className="loader">
          <ReactLoading type={"bars"} color={"black"} width={400} />
        </div>
      ) : (
        <div className="users">
          {posts.map((item, id) => (
            <div className="users__container" key={id}>
              <div className="users__header">
                <h2>{item.login.username}</h2>
              </div>
              <div className="users__data">
                <img
                  alt={item.login.username}
                  width="70px"
                  src={item.picture.thumbnail}
                />
                <div className="users__paragraph">
                  <p>
                    Hej, jestem bardzo zadowolony z usług siłowni gold's gym !
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersPage;
