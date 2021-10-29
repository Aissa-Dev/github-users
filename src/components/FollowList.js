import axios, { Axios } from "axios";
import React from "react";
import UserRow from "./UserRow";

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
          {people.map((person, id) => (
            <UserRow person={person} key={id} />
          ))}
        </tbody>

        {/* tbody end */}
      </table>
    </div>
  );
}

export default FollowList;
