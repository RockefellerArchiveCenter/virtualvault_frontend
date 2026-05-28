"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function useSearchRouting(config) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const routingOptions = {
    readUrl: () => {
      return searchParams.toString();
    },

    writeUrl: (url) => {
      router.push(`${pathname}?${url}`, {
        scroll: false
      });
    },

    routeChangeHandler: (callback) => {
      callback(searchParams.toString());

      return () => {};
    }
  };

  return useMemo(() => {
    return {
      ...config,
      routingOptions
    };
  }, [searchParams]);
}