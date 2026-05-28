const ResultView = ({result}) => (
    
<li className="mb-20">
    <h2 className="mb-10"><a href={result.url.raw}>{result.title.raw}</a></h2>
    <span className="badge badge--blue">{result.category.raw}</span>
  </li>
);

export default ResultView