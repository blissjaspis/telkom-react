import React, { useState } from "react";
import axios from "axios";
import ListItem from "./ListItem";

function welcome() {
  const [repos, setrepo] = useState([]);
  const [search, setsearch] = useState("");
  const [textNotFound, settextNotFound] = useState("");

  const fetchRepo = async (user) => {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => {
        setrepo(res.data);
      })
      .catch((err) => {
        settextNotFound("There is no repository you are looking for...");
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchRepo(search);
    setsearch("");
  };

  return (
    <div className="container mx-auto px-5 py-8">
      <article className="prose prose-lg">
        <h1>Want to search repositories github users/organizations?</h1>
        <p>Just write your want to search below</p>
      </article>

      <form onSubmit={handleSubmit} action="" className="my-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="form-input rounded-lg border border-gray-200 shadow-sm w-3/5"
          placeholder="Type what organization you want to search"
        />
      </form>

      {repos.length >= 1 ? (
        <div className="border border-gray-200 p-5 rounded-md">
          {repos.map((repo, index) => {
            return (
              <ListItem
                key={index}
                judul={repo.name}
                url={repo.html_url}
                name={repo.name}
                description={repo.description}
                archived={repo.archived}
                update={repo.updated_at}
                star={repo.stargazers_count}
                fork={repo.forks}
                language={repo.language}
                license={repo.license.spdx_id}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-gray-700">{textNotFound}</div>
      )}
    </div>
  );
}

export default welcome;
