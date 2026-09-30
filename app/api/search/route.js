import { NextResponse } from "next/server";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

export async function POST(req) {
  const connector = new ElasticsearchAPIConnector({
    host: process.env.ELASTICSEARCH_HOST,
    index: process.env.ELASTICSEARCH_INDEX,
  });

  const { requestState, queryConfig } = await req.json();

  const response = await connector.onSearch(
    requestState,
    queryConfig
  );

  return NextResponse.json(response);
}