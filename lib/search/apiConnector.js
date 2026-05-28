export class APIConnector {
  async onSearch(requestState, queryConfig) {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        requestState,
        queryConfig
      })
    });

    return response.json();
  }

  async onAutocomplete(requestState, queryConfig) {
    const response = await fetch("/api/autocomplete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        requestState,
        queryConfig
      })
    });

    return response.json();
  }

  onResultClick() {}
  onAutocompleteResultClick() {}
}