import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState({ yes: "", no: "" });
  const [edgecase, setEdgeCase] = useState(true);

  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  function handleChange(e) {
    setRes({ ...res, ["yes"]: "", ["no"]: "" });
    setEdgeCase(true);
    let { value } = e.target;
    setSearch(value);
  }

  function wordSearch(value) {
    if (search == "") {
      setEdgeCase(false);
    } else {
      setEdgeCase(false);
      let found = dict.filter((item) => {
        return item.word.toLocaleLowerCase() == value.toLocaleLowerCase();
      });
      if (found.length > 0) {
        setRes({ ...res, ["yes"]: found[0].meaning, ["no"]: "" });
        setEdgeCase(true);
      } else {
        setRes({
          ...res,
          ["no"]: "Word not found in the dictionary.",
          ["yes"]: "",
        });
        setEdgeCase(false);
      }
    }
  }

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={search}
        placeholder="Search for a word..."
        onChange={handleChange}
      />
      <button
        onClick={(e) => {
          console.log(search);
          return wordSearch(search);
        }}
      >
        Search
      </button>
      <h3>Definition:</h3>
      <div>{edgecase ? res.yes : 'Word not found in the dictionary.'}</div>
    </>
  );
}

export default App;
