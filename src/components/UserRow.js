import React, { useState, useEffect } from "react";
import axios from "axios";

function UserRow({ person }) {
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      let followingUrl = person.following_url.replace("{/other_user}", "");

      const following_ = await axios(followingUrl, {
        headers: {
          authorization: "token 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"
        }
      });
      const followers_ = await axios(person.followers_url, {
        headers: {
          authorization: "token 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"
        }
      });
      const repos_ = await axios(person.repos_url, {
        headers: {
          authorization: "token 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"
        }
      });

      setFollowing(following_.data);
      setFollowers(followers_.data);
      setRepos(repos_.data);
    };

    fetchData();
  }, []);

  const getLength = (url) => {
    url = url.replace("{/other_user}", "");
    axios
      .get(url)
      .then((res) => {
        const n = res.data.length;
        console.log("n = ", n);
        return n;
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr key={person.login}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={person.avatar_url}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {person.login}
            </div>
            <div className="text-sm text-gray-500">
              {person.login}@exemple.com
            </div>
          </div>
        </div>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {person.followers_url.length}
                </div>
              </td> */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {followers.length}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {following.length}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {repos.length}
        </span>
      </td>
    </tr>
  );
}

export default UserRow;
