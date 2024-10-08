const Card = ({ item }) => {
  return (
    <div className="flex flex-col">
      <h3 className="services__modal-title">{item.title}</h3>

      {/* Coding card links */}
      {item.category === "coding" && (
        <div className="card-links">
          <a
            className="work__button"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a
            className="work__button"
            href={item.repo}
            target="_blank"
            rel="noreferrer"
          >
            View on Github
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      )}
      {item.category === "design" && (
        <div className="card-links">
          <a
            className="work__button"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a
            className="work__button"
            href={item.repo}
            target="_blank"
            rel="noreferrer"
          >
            View on Github
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      )}

      <div className="live">
        <p>{item.live}</p>
      </div>
      <br />
      <div className="subtitle">
        <p>{item.subtitle}</p>
      </div>

      <p className="services__modal-description">{item.description}</p>
      <p className="scroll-prompt">
        Scroll down for more{" "}
        <i className="bx bx-down-arrow-alt work__button-icon"></i>
      </p>

      <div className="image-container flex flex-col gap-3">
        {item.images &&
          item.images.map((image) => {
            return (
              <img src={image} alt={image} className="card__img border-4 rounded-[10px]" key={image} />
            );
          })}

        {/* <img src={item.image} alt="" className="card__img" />
        <img src={item.image} alt="" className="card__img" />
        <img src={item.image} alt="" className="card__img" /> */}
      </div>
    </div>
  );
};

export default Card;
