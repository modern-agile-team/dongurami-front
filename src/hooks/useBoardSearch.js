import { useEffect, useState } from "react";

function useBoardSearch(router) {
  const [search, setSearch] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setSearch(router.query.search);
  }, [router]);

  return search;
}

export default useBoardSearch;
