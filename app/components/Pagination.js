import {
  Paging,
  PagingInfo,
} from "@elastic/react-search-ui";


const PagingInfoView = ({className,
  end,
  searchTerm,
  start,
  totalResults}) => {
    return (
        <div className="pagination__info">
        Showing{" "}
        <strong>
            {start} - {end}
        </strong>{" "}
        out of <strong>{totalResults}</strong>
        </div>
    );
}


const Pagination = () => (
    <div className="pagination__wrapper">
        <PagingInfo view={PagingInfoView}/>
        <Paging 
            className="pagination__list"
            prevIcon={<span aria-hidden="true" className="material-icon">keyboard_arrow_left</span>}
            nextIcon={<span aria-hidden="true" className="material-icon">keyboard_arrow_right</span>}
        />
    </div>
)

export default Pagination
