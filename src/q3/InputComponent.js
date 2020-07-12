import React, { useState } from "react";
import PropTypes from "prop-types";

const InputComponent = ({ initialValue }) => {
  const [search, setSearch] = useState(initialValue);
  const onChange = event => setSearch(event.target.value);
  return (
    <div className="col-4">
      <div className="form-group">
        <input
          type="text"
          value={search}
          onChange={onChange}
          className="form-control"
          placeholder="Please enter a text"
          name="search"
        />
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  initialValue: PropTypes.string
};
export default InputComponent;
