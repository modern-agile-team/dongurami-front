import { useEffect, useState } from "react";

function useBoardSearch(router) {
  const [search, setSearch] = useState();
  const [searchBy, setSearchBy] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setSearch(router.query.search ?? '');
    setSearchBy(router.query.searchBy ?? 'title');
  }, [router]);

  return { search, searchBy, setSearch, setSearchBy };
}

export default useBoardSearch;
