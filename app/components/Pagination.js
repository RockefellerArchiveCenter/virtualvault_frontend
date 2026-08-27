import {
  Paging,
  PagingInfo,
} from "@elastic/react-search-ui";


const PagingInfoView = ({ end, start, totalResults}) => {
    return (
        totalResults ? (
            <div className="pagination__info">
                Showing{" "}
                <strong>
                    {start} - {end}
                </strong>{" "}
                out of <strong>{totalResults}</strong>
            </div>
        ) : (null)
    );
}


const Pagination = () => (
    <div className="pagination__wrapper mb-30">
        <PagingInfo view={PagingInfoView}/>
        <Paging 
            className="pagination__list"
            resultsPerPage={24}
            prevIcon={<span aria-hidden="true" className="material-icon">keyboard_arrow_left</span>}
            nextIcon={<span aria-hidden="true" className="material-icon">keyboard_arrow_right</span>}
        />
    </div>
)

export default Pagination


