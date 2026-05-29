import DOMPurify from 'dompurify';

const ResultView = ({result}) => {
  
  const sanitizedContent = result.title.snippet ? DOMPurify.sanitize(result.title.snippet, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: ['em'],
    ALLOWED_ATTR: []
  }) : result.title.raw

  return (
    
<li className="mb-20">
    <h2 className="mb-10"><a href={result.url.raw} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></a></h2>
    <span className="badge badge--blue">{result.category.raw}</span>
  </li>
)};

export default ResultView