import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function searchBarHandler() {
    if (searchTerm == "") {
      props.getSearchProduct(searchTerm);
    }
  }

  function searchHandler(event) {
    event.preventDefault();

    props.getSearchProduct(searchTerm);
  }

  return (
    <div>
      <form onSubmit={searchHandler}>
        <div className="input-group w-50 container mt-2">
          <input
            type=""
            className="form-control rounded"
            placeholder="Search"
            name="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyUp={searchBarHandler}
          />
          <button type="submit" className="btn btn-outline-primary">
            search
          </button>
        </div>
      </form>
    </div>
  );
}
