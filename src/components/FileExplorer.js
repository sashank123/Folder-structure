import React, { Component } from "react";
import Tree from "./Tree";

const FileExplorerStyle = {
  width: "800px",
  maxWidth: "100%",
  margin: "0 auto",
  display: "flex"
};
const TreeWrapperStyle = {
  width: "250px"
};

export default class FileExplorer extends Component {
  render() {
    return (
      <div style={FileExplorerStyle}>
        <div style={TreeWrapperStyle}>
          <Tree onSelect={this.onSelect} />
        </div>
      </div>
    );
  }
}
