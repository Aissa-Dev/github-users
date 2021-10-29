import React from "react";

function ReposList({ repos }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Repo Name and Url
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Language
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Size
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Forks
            </th>
          </tr>
        </thead>

        {/* tbody start */}
        <tbody className="bg-white divide-y divide-gray-200">
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {repo.name}
                    </div>
                    <div className="text-sm text-gray-500">{repo.html_url}</div>
                  </div>
                </div>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {person.followers_url.length}
                </div>
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {repo.language}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {repo.size}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {repo.forks_count}
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

export default ReposList;
