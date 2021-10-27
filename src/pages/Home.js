import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../actions/usersAction";
import User from "../components/User";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const data = useSelector((state) => state.users.users);
  const slicedUsers = data.slice(0, 12);
  const isLoading = useSelector((state) => state.isLoading);
  console.log("Users : ", data);
  console.log("Sliced : ", slicedUsers);
  return (
    <div className=" mx-12 ">
      <div className="my-12">
        <h1 className="text-white text-center my-4">GitHub User</h1>
        <div className="m-auto flex justify-center">
          <input
            className="max-h-7 rounded-l w-1/6"
            type="text"
            placeholder="user"
          />
          <button className="text-white px-3 bg-gray-500 rounded-r">
            Search
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {!isLoading &&
          slicedUsers.map((user, id) => {
            return (
              <User
                key={id}
                name={user.login}
                image={user.avatar_url}
                link={user.html_url}
                followersUrl={user.followers_url}
                followingUrl={user.following_url}
                reposUrl={user.repos_url}
              />
            );
          })}
      </div>
      {/* {!isLoading &&
        slicedUsers.map((user, id) => {
          return (
            <User
              key={id}
              name={user.login}
              image={user.avatar_url}
              link={user.html_url}
              nbRfollowers={user.followers_url.length}
            />
          );
        })} */}
    </div>
  );
}

export default Home;
