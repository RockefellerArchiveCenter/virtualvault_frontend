const ResultView = ({ result }) => {

  return (
      <li className="card">
        <div className="card__body">
            <a className="card__title" href={result.url.raw}>{result.title.raw}</a>
          <p className="card__body-text">
            <span className="badge badge--blue ml-10">{result.category.raw}</span>
          </p>
        </div>
      </li>
  )
};

export default ResultView