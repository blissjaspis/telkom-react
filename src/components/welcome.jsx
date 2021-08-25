import React, { useState } from "react";
import axios from "axios";
import ListItem from "./ListItem";

function Welcome() {
  const [storeToReadOnly, setstoreToReadOnly] = useState("");
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
    if (search == "") {
      return;
    }
    const data = search.toLocaleLowerCase();
    setstoreToReadOnly(data);
    fetchRepo(data);
    setsearch("");
  };

  return (
    <div className="container mx-auto px-5 py-8">
      <article className="prose prose-lg">
        <h1>Want to search repositories github users/organizations?</h1>
        <p>Just write your want to search below</p>
      </article>

      <form onSubmit={handleSubmit} className="my-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? handleSubmit : "")}
          className="form-input rounded-lg border border-gray-200 shadow-sm w-3/5"
          placeholder="Ex: reactjs"
        />
      </form>

      {repos.length >= 1 ? (
        <div className="border border-gray-200 p-5 rounded-md">
          <div className="text-xl mb-5">
            Your result from{" "}
            <a
              href={`https://github.com/${storeToReadOnly}`}
              className="text-red-400 underline"
            >
              {`@${storeToReadOnly}`}
            </a>
          </div>
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
                license={repo.license != null ? repo.license.spdx_id : ""}
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

export default Welcome;
