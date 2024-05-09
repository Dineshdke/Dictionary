import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState({ yes: "", no: "" });
  const [edgecase, setEdgeCase] = useState(false);

  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  function handleChange(e) {
    setEdgeCase(false);
    setRes({ ...res, ["yes"]: "", ["no"]: "" });
    let { value } = e.target;
    setSearch(value);
  }

  function wordSearch(value) {
    if (search == "") {
      setEdgeCase(true);
    } else {
      setEdgeCase(false);
      let found = dict.filter((item) => {
        return item.word.toLocaleLowerCase() == value.toLocaleLowerCase();
      });
      if (found.length > 0) {
        setRes({ ...res, ["yes"]: found[0].meaning, ["no"]: "" });
      } else {
        setRes({
          ...res,
          ["no"]: "Word not found in the dictionary.",
          ["yes"]: "",
        });
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
      <div>{search && res.yes}</div>
      <div>{search && res.no}</div>
      <div>{edgecase && 'Word not found in the dictionary.'}</div>
    </>
  );
}

export default App;
