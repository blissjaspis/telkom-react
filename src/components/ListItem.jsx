import React from "react";

function ListItem({
  url,
  name,
  description,
  archived,
  update,
  star,
  fork,
  language,
  license,
}) {
  return (
    <div className="p2 mb-5">
      <div className="flex items-center">
        <a href={url} className="text-blue-500 font-bold mb-2" target="_blank">
          {name}
        </a>
        {archived ? (
          <span className="p-1 border border-gray-200 rounded-md text-xs text-gray-400 ml-4">
            Archived
          </span>
        ) : (
          ""
        )}
      </div>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex items-center">
        <div className="mr-5 text-sm text-gray-500">{language}</div>
        <div className="flex flex-row items-center mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span className="text-gray-500 text-sm">{star}</span>
        </div>
        <div className="flex flex-row items-center mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
          <span className="text-gray-500 text-sm">{license}</span>
        </div>
        <div className="flex flex-row items-center mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span className="text-gray-500 text-sm">{fork}</span>
        </div>
        <div className="flex text-gray-500 text-sm">Updated {update}</div>
      </div>
    </div>
  );
}

export default ListItem;
