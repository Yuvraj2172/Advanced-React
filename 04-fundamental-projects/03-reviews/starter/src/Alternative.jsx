import React from "react";
import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  // console.log(name);

  const randomPerson = () => {
    let randomNumber = Math.trunc(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    let fNumber = randomNumber % people.length;
    setIndex(fNumber);
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      let fNumber = newIndex % people.length;
      setIndex(fNumber);
    //   console.log(fNumber);
      return fNumber;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      let fNumber = newIndex % people.length;
      setIndex(fNumber);
    //   console.log(fNumber);
      return fNumber;
    });
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info"> {text}</p>
        <div className="brn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me!
        </button>
      </article>
    </main>
  );
};
export default App;
