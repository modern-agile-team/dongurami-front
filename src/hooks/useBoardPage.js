import { useEffect, useState } from "react";

function useBoardPage(router) {
  const [page, setPage] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setPage(Number(router.query.page) || 1);
  }, [router]);

  return page;
}

export default useBoardPage;
