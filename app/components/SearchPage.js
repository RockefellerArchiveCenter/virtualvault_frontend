"use client";

import {
  SearchProvider,
  SearchBox,
  Results,
  Paging,
  PagingInfo,
} from "@elastic/react-search-ui";

import { searchConfig } from "@/lib/search/config";
import { useSearchRouting } from "@/lib/search/useSearchRouting";
import ResultView from "@/app/components/ResultView";

export default function SearchPage() {
  const config = useSearchRouting(searchConfig);

  return (
    <SearchProvider config={config}>
      <div>
        <SearchBox 
          view={({ value, onChange, onSubmit }) => (
          <form onSubmit={onSubmit}>
            <div className="mt-20 mb-20">
            <div className="input-group__search">
              <div className="input input__search">
                <label 
                  htmlFor="query" 
                  className="visually-hidden">Enter a search term *</label>
                <input 
                  id="query" 
                  placeholder="Search..." 
                  required={true}
                  type="search" 
                  value={value} 
                  onChange={(e) => onChange(e.target.value)} />
              </div>
              <button 
                type="submit" 
                className="btn btn--orange search__submit-btn" 
                aria-label="Submit search"> Search <span className="material-icon material-icon--space-before" aria-hidden="true">search</span></button>
            </div>
          </div>
          </form>
        )}
        />

        <PagingInfo />

        <Results
          titleField="title"
          urlField="url"
          resultView={ResultView}
          className="list--unstyled"
        />

        <Paging />
      </div>
    </SearchProvider>
  );
}