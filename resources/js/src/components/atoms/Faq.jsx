import { BsChevronRight } from "react-icons/bs";
export default function Faq({ question, response, list }) {
  return (
    <div className="main-item">
      <input className="main-item__checkbox" type="checkbox" />
      <div className="paragraph container">
        <p className="paragraph main-item__title">{question}</p>
        <BsChevronRight className="paragraph main-item__icon" />
      </div>
      {list ? (
        <ul className="paragraph faq-item__list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="paragraph main-item__content">{response}</p>
      )}
    </div>
  );
}
