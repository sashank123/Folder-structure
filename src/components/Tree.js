import React, { Component } from "react";
import values from "lodash/values";
import data from "../data";
import TreeNode from "./TreeNode";

export default class Tree extends Component {
  state = {
    nodes: data
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  };

  getChildNodes = node => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  };

  onToggle = node => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  };

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        {rootNodes.map(node => (
          <TreeNode
            key={node.path}
            node={node}
            level={0}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
          />
        ))}
      </div>
    );
  }
}
