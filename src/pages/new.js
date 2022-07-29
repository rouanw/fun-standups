import React, { useEffect } from "react"

const URL = 'https://forms.gle/QtQXGZ3E3UCaMnoG9';

let New = () => {
  useEffect(() => {
    window.location.replace(URL);
  }, []);
  return <div>Redirecting to a page where you can <a href={URL}>create a new standup format</a> </div>;
}

export default New;
