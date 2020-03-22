const data = {
  "/2018": {
    path: "/2018",
    type: "folder",
    isRoot: true,
    children: ["/2018/feb"]
  },
  "/2018/feb": {
    path: "/2018/feb",
    type: "folder",
    children: ["/2018/feb/test1.csv"]
  },
  "/2018/feb/test1.csv": {
    path: "/2018/feb/test1.csv",
    type: "file"
  },
  "/2019": {
    path: "/2019",
    type: "folder",
    isRoot: true,
    children: ["/2019/jan", "/2019/mar"]
  },
  "/2019/jan": {
    path: "/2019/jan",
    type: "folder",
    children: ["/2019/jan/3", "/2019/jan/5"]
  },
  "/2019/jan/3": {
    path: "/2019/jan/3",
    type: "folder",
    children: ["/2019/jan/3/folder1"]
  },
  "/2019/jan/3/folder1": {
    path: "/2019/jan/3/folder1",
    type: "folder",
    children: ["/2019/jan/3/folder1/subfolder1"]
  },
  "/2019/jan/3/folder1/subfolder1": {
    path: "/2019/jan/3/folder1/subfolder1",
    type: "folder",
    children: [
      "/2019/jan/3/folder1/subfolder1/hello.csv",
      "/2019/jan/3/folder1/subfolder1/world.csv"
    ]
  },
  "/2019/jan/3/folder1/subfolder1/hello.csv": {
    path: "/2019/jan/3/folder1/subfolder1/hello.csv",
    type: "file",
    children: []
  },
  "/2019/jan/3/folder1/subfolder1/world.csv": {
    path: "/2019/jan/3/folder1/subfolder1/world.csv",
    type: "file",
    children: []
  },
  "/2019/jan/5": {
    path: "/2019/jan/5",
    type: "folder",
    children: ["/2019/jan/5/folder1"]
  },
  "/2019/jan/5/folder1": {
    path: "/2019/jan/5/folder1",
    type: "folder",
    children: ["/2019/jan/5/folder1/subfolder1"]
  },
  "/2019/jan/5/folder1/subfolder1": {
    path: "/2019/jan/5/folder1/subfolder1",
    type: "folder",
    children: [
      "/2019/jan/5/folder1/subfolder1/john.csv",
      "/2019/jan/5/folder1/subfolder1/doe.csv"
    ]
  },
  "/2019/jan/5/folder1/subfolder1/john.csv": {
    path: "/2019/jan/5/folder1/subfolder1/john.csv",
    type: "file",
    children: []
  },
  "/2019/jan/5/folder1/subfolder1/doe.csv": {
    path: "/2019/jan/5/folder1/subfolder1/doe.csv",
    type: "file",
    children: []
  },
  "/2019/mar": {
    path: "/2019/mar",
    type: "folder",
    children: ["/2019/mar/15"]
  },
  "/2019/mar/15": {
    path: "/2019/mar/15",
    type: "folder",
    children: ["/2019/mar/15/folder1"]
  },
  "/2019/mar/15/folder1": {
    path: "/2019/mar/15/folder1",
    type: "folder",
    children: ["/2019/mar/15/folder1/subfolder1"]
  },
  "/2019/mar/15/folder1/subfolder1": {
    path: "/2019/mar/15/folder1/subfolder1",
    type: "folder",
    children: [
      "/2019/mar/15/folder1/subfolder1/jane.csv",
      "/2019/mar/15/folder1/subfolder1/doe.csv"
    ]
  },
  "/2019/mar/15/folder1/subfolder1/jane.csv": {
    path: "/2019/mar/15/folder1/subfolder1/jane.csv",
    type: "file",
    children: []
  },
  "/2019/mar/15/folder1/subfolder1/doe.csv": {
    path: "/2019/mar/15/folder1/subfolder1/doe.csv",
    type: "file",
    children: []
  }
};

export default data;
