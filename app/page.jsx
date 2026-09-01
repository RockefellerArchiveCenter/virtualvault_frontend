import { Suspense } from "react";
import HomePage from "./components/HomePage";

export const metadata = {
  title: "Virtual Vault",
  description: "Access digitized content"
}

export default function Page() {
  return <Suspense><HomePage /></Suspense>;
}