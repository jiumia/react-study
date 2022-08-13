import React from "react";

function Hello() {
  const clickHandle = (e, msg) => {
    // e.preventDefault();
    console.log('aaaaa',e, msg);
  };
  return (
    <div onClick={(e) => clickHandle(e, 'hhhhhh')}>
      {/* <a href="http://baidu.com">baidu</a> */}
      click
    </div>
  );
}

export default function App2() {
  return (
    <div>
      <Hello />
    </div>
  );
}
