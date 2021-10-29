import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, loadUsersByName } from "../actions/usersAction";
import { UserByNameUrl, usersUrl } from "../api";
import User from "../components/User";

function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(loadUsers(usersUrl()));
  }, []);

  const data = useSelector((state) => state.users.users);
  const slicedUsers = data.slice(0, 12);

  const isLoading = useSelector((state) => state.isLoading);
  const [isSearched, setIssearched] = useState(
    useSelector((state) => state.isSearched)
  );
  const searched = useSelector((state) => state.searched);

  return (
    <div className=" mx-12 ">
      <div className="my-12">
        <h1 className="text-white text-center my-4">GitHub User</h1>
        <div className="m-auto flex justify-center">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="max-h-7 rounded-l w-1/6"
            type="text"
            placeholder="user"
          />
          <button
            onClick={() => {
              dispatch(loadUsersByName(UserByNameUrl(name)));
            }}
            className="text-white px-3 bg-gray-500 rounded-r"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {!isLoading &&
          !isSearched &&
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
    </div>
  );
}

export default Home;
