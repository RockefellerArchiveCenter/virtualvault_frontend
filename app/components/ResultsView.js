function ResultsView({
  children,
  resultSearchTerm
}) {
  return (
    children.length ? (
          <ul className="card-list">
              {children}
          </ul>
      ) : (
          <p>Sorry, there are no search results for &quot;{resultSearchTerm}&quot;</p>
      )    
  );
}

export default ResultsView;