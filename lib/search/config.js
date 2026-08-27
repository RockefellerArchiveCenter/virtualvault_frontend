import { APIConnector } from "./apiConnector";

const connector = new APIConnector();

export const searchConfig = {
  apiConnector: connector,
  
  initialState: {
    resultsPerPage: 24,
  },
  searchQuery: {
    search_fields: {
      title: {},
    },

    result_fields: {
      title: {
        snippet: {}
      },
      url: {
        raw: {}
      },
      category: {
        raw: {}
      }
    }
  }
};