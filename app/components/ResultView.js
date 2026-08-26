const ResultView = ({result}) => {

  return (  
    <li className="mb-20">
      <div className="result__wrapper">
        <h2 className="mb-0 mt-0">
          <a href={result.url.raw}>{result.title.raw}</a>
        </h2>
        <span className="badge badge--blue ml-10">{result.category.raw}</span>
      </div>
    </li>
  )};

export default ResultView