import DOMPurify from 'dompurify';

const ResultView = ({result}) => {
  
  const sanitizedContent = result.title.snippet ? DOMPurify.sanitize(result.title.snippet, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: ['em'],
    ALLOWED_ATTR: []
  }) : result.title.raw

  return (
    
<li className="mb-20">
  <div className="result__wrapper">
    <h3 className="mb-0 mt-0">
      <a href={result.url.raw} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></a>
    </h3>
    <span className="badge badge--blue ml-10">{result.category.raw}</span>
  </div>
</li>
)};

export default ResultView