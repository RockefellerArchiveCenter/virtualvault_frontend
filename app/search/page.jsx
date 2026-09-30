import { Suspense } from "react";
import SearchPage from "../components/SearchPage";

export async function generateMetadata({ params, searchParams }, parent) {
  const searchParamsObj = await searchParams
  return {
    title: `Search results for ${searchParamsObj.q} - Virtual Vault`,
  }
}

export default function Page() {
  return <Suspense><SearchPage /></Suspense>;
}