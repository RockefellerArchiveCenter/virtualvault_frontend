export async function fetchDocument(identifier) {
  const hostName = `${process.env.ELASTICSEARCH_HOST}`
  const indexName = `${process.env.ELASTICSEARCH_INDEX}`

  try {
    const res = await fetch(`${hostName}/${indexName}/_doc/${identifier}`);

    if (!res.ok) {
      return {
        error: `Failed to fetch data from ${hostName}/${indexName}/_doc/${identifier}. Status: ${res.status} ${res.statusText}`,
      };
    }

    const data = await res.json();
    return data._source || {};
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return an error object to use in UI
    return {
      error: `Error fetching data from ${hostName}/${indexName}/_doc/${identifier}: ${error.message}`,
    };
  }
}
