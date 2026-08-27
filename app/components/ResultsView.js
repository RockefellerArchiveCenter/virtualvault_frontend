function ResultsView({
  children,
  resultSearchTerm
}) {
  return (
    <>
        <h1 className="mt-20 mb-10">Search results for "{resultSearchTerm}"</h1>
        {children.length ? (
            <ul className="card-list">
                {children}
            </ul>
        ) : (
            <p>Sorry, there are no search results for "{resultSearchTerm}"</p>
        )}
    </>
    
    
  );
}

export default ResultsView;