import React, { useState } from "react";

const InputComponent = ({ initialValue }) => {
  const [search, setSearch] = useState(initialValue);
  const onChange = event => setSearch(event.target.value);

  console.log(search);

  return (
    <div className="col-4">
      <div className="form-group">
        <input
          type="text"
          value={search}
          onChange={onChange}
          className="form-control"
          id="searchId"
          placeholder="Please enter a text"
          name="search"
        />
      </div>
    </div>
  );
};
export default InputComponent;
