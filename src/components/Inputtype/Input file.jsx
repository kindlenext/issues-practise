import React from "react";
export default function InputTypeFile(props) {
  return (
    <div>
      <div className="input-group">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
        >
          Button
        </button>
      </div>
    </div>
  );
}
