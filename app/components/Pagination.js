import {
  Paging,
  PagingInfo,
} from "@elastic/react-search-ui";


const Pagination = () => (
    <div className="pagination__wrapper">
        <PagingInfo />
        <Paging 
            className="pagination__list"
            prevIcon={<span aria-hidden="true" className="material-icon">keyboard_arrow_left</span>}
            nextIcon={<span aria-hidden="true" className="material-icon">keyboard_arrow_right</span>}
        />
    </div>
)

export default Pagination
