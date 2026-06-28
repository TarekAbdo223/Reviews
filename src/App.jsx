import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];
  console.log(name);

  const nextPerson = () => {
    setIndex(index + 1);
    if (index + 1 === people.length) {
      setIndex(0);
    }
  };
  const prevPerson = () => {
    setIndex(index - 1);
    if (index - 1 < 0) {
      setIndex(people.length - 1);
    }
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
      if (randomNumber == people.length) {
        randomNumber = index - 2;
      } else {
        randomNumber = randomNumber;
      }
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
