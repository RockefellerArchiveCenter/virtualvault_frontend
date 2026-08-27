"use client";

import {
  SearchProvider,
  SearchBox,
} from "@elastic/react-search-ui";

import { searchConfig } from "@/lib/search/config";
import { useSearchRouting } from "@/lib/search/useSearchRouting";
import Hero from "./Hero";

export default function HomePage() {
  const config = useSearchRouting(searchConfig);

  return (
    <div className="home-page__wrapper">
      <Hero/>
      <SearchProvider config={config}>
        <div className="home-search__wrapper">
          <SearchBox 
            onSubmit={(searchTerm) => {
              window.location.href = `${'/search'}?q=${searchTerm}`;
            }}
            view={({ value, onChange, onSubmit }) => (
            <form className="home-search__form" onSubmit={onSubmit}>
              <div className="mt-20">
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

        </div>
      </SearchProvider>
    </div>
  );
}