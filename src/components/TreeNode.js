import React from "react";
import {
  FaFile,
  FaFolder,
  FaFolderOpen,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === "file") paddingLeft += 10;
  return paddingLeft;
};

const last = array => {
  if (array === null) return void 0;
  return array[array.length - 1];
};

const getNodeLabel = node => last(node.path.split("/"));

const TreeNode = props => {
  const { node, getChildNodes, level, onToggle } = props;
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "5px 8px",
          paddingLeft: `${getPaddingLeft(level, node.type)}px`
        }}
      >
        <div
          onClick={() => onToggle(node)}
          style={{ width: "12px", marginRight: "5px" }}
        >
          {node.type === "folder" &&
            (node.isOpen ? <FaChevronDown /> : <FaChevronRight />)}
        </div>

        <div style={{ width: "12px", marginRight: "10px" }}>
          {node.type === "file" && <FaFile />}
          {node.type === "folder" && node.isOpen === true && <FaFolderOpen />}
          {node.type === "folder" && !node.isOpen && <FaFolder />}
        </div>

        {getNodeLabel(node)}
      </div>

      {node.isOpen &&
        getChildNodes(node).map(childNode => (
          <TreeNode
            {...props}
            node={childNode}
            level={level + 1}
            key={childNode.path}
          />
        ))}
    </React.Fragment>
  );
};

export default TreeNode;
