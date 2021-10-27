import React from "react";

function FollowList({ people }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Followers
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Following
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Repos
            </th>
          </tr>
        </thead>

        {/* tbody start */}
        <tbody className="bg-white divide-y divide-gray-200">
          {people.map((person) => (
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
                {person.followers_url.length}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {person.following_url.length}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {person.repos_url.length}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

        {/* tbody end */}
      </table>
    </div>
  );
}

export default FollowList;
