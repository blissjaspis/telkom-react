import React from "react";

function welcome() {
  return (
    <div className="container mx-auto px-5 py-8">
      <article className="prose prose-lg">
        <h1>Want to search repositories github organizations?</h1>
        <p>Just write your want to search below</p>
      </article>

      <form action="" className="my-5">
        <input
          type="text"
          class="form-input rounded-lg border border-gray-200 shadow-md"
          placeholder="Type what organization you want to search"
        />
      </form>

      <div className="border border-gray-200 p-5 rounded-md">
        <div className="p2">
          <a href="" className="text-blue-500 font-bold mb-2">
            Alpine
          </a>
          <p className="text-gray-600 mb-3">
            A rugged, minimal framework for composing JavaScript behavior in
            your markup.
          </p>
          <div className="flex text-gray-500 text-sm">Updated 14 hours ago</div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
