import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form" className="mb-4">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search city..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100 search-button"
            />
          </div>
          <div className="col-3">
            <input
              type="search"
              value="Current location"
              className="btn btn-info w-100"
              id="current-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
