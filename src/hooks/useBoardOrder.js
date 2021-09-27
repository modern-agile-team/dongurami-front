import { useEffect, useState } from "react";

function useBoardOrder(router) {
  const [order, setOrder] = useState();
  
  useEffect(() => {
    if (!router.isReady) return;
    setOrder(router.query.order || 'inDate DESC');
  }, [router]);

  return order;
}

export default useBoardOrder;
