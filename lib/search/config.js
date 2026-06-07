import { APIConnector } from "./apiConnector";

const connector = new APIConnector();

export const searchConfig = {
  apiConnector: connector,

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