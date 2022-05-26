import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  console.log(tools);
  useEffect(() => {
    fetch("https://aqueous-plateau-89291.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-5xl font-bold mt-10">Tools ⚒</h1>
      <div
        className="grid grid-cols-1
    lg:grid-cols-3  gap-3 my-10 "
      >
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
