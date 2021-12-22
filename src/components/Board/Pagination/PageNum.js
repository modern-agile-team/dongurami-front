import PreviousPage from './PreviousPage';
import NextPage from './NextPage';
import Collapse from './Collapse';
import Item from './Item';

const PageNum = ({ lastPage, setPage, page }) => {
  if (lastPage < 8) {
    return (
      <>
        <PreviousPage page={page} setPage={setPage} />
        {Array.from(new Array(lastPage), (_, i) => (
          <Item key={i} itemPage={i + 1} setPage={setPage} page={page} />
        ))}
        <NextPage page={page} lastPage={lastPage} setPage={setPage} />
      </>
    );
  } else if (page < 5) {
    return (
      <>
        <PreviousPage page={page} setPage={setPage} />
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return (
              <Item
                key={idx}
                itemPage={idx + 1}
                setPage={setPage}
                page={page}
              />
            );
          })}
        <Collapse />
        <Item itemPage={lastPage} setPage={setPage} page={page} />
        <NextPage page={page} lastPage={lastPage} setPage={setPage} />
      </>
    );
  } else if (page >= 5 && page <= lastPage - 4) {
    return (
      <>
        <PreviousPage page={page} setPage={setPage} />
        <Item itemPage={1} setPage={setPage} page={page} />
        <Collapse />
        <Item itemPage={page - 1} setPage={setPage} page={page} />
        <Item itemPage={page} />
        <Item itemPage={page + 1} setPage={setPage} page={page} />
        <Collapse />
        <Item itemPage={lastPage} setPage={setPage} page={page} />
        <NextPage page={page} lastPage={lastPage} setPage={setPage} />
      </>
    );
  } else if (page > lastPage - 4) {
    return (
      <>
        <PreviousPage page={page} setPage={setPage} />
        <Item itemPage={1} setPage={setPage} page={page} />
        <Collapse />
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return (
              <Item
                key={idx}
                itemPage={lastPage + idx - 4}
                setPage={setPage}
                page={page}
              />
            );
          })}
        <NextPage page={page} lastPage={lastPage} setPage={setPage} />
      </>
    );
  }
};

export default PageNum;
