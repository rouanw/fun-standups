import React, { useEffect } from "react"

const URL = 'https://forms.gle/QtQXGZ3E3UCaMnoG9';

export default () => {
  useEffect(() => {
    window.location.replace(URL);
  }, []);
  return <div>Redirecting to a page where you can <a href={URL}>create a new standup format</a> </div>
}
