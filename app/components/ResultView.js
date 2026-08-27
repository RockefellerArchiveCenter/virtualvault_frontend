const ResultView = ({ result }) => {

  return (
      <li className="card">
        <a className="card__title" href={result.url.raw}>{result.title.raw}</a>
        <div class="card__footer">
          <span className="badge badge--blue">{result.category.raw}</span>
        </div>
      </li>
  )
};

export default ResultView