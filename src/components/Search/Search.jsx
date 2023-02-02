import { useState } from "react";
import { useGlobalContext } from "../../Context";
import "./Search.css";
import { MdSearch } from "react-icons/md";

function Search() {
  const [text, setText] = useState("");
  const { setSearchString, fetchRandomMeal, setCompToShow, compToShow } =
    useGlobalContext();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      if (compToShow != "meals") setCompToShow("meals");
      setSearchString(text);
      setText("");
    }
  };
  const handleRandomMeal = () => {
    setSearchString("");
    setText("");
    fetchRandomMeal();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <input
          type="text"
          id=""
          value={text}
          className="form-text-input"
          placeholder="Search for meals"
          onChange={handleChange}
        />
        <button type="submit" className="btn-search">
          <MdSearch />
        </button>
      </div>
      {/* <button
        type="submit"
        className=" btn random-search"
        onClick={handleRandomMeal}
      >
        Surprise me!
      </button> */}
    </form>
  );
}

export default Search;
