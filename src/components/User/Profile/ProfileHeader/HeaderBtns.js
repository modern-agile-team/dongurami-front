const HeaderBtns = ({ pageName, moveComp, router, compObj }) => {
  return (
    <button
      style={
        router.query.category !== pageName ? { background: '#f2f2f2' } : null
      }
      onClick={() => {
        moveComp(pageName);
      }}
    >
      {pageName === undefined ? '프로필' : compObj[pageName]}
    </button>
  );
};

export default HeaderBtns;
