function ResultsView({
  children,
  className,
  searchTerm
}) {
  return (
    children.length ? (
        <ul className="card-list">
            {children}
        </ul>
    ) : (
        <p>Sorry, there are no search results for "{searchTerm}"</p>
    )
    
  );
}

export default ResultsView;