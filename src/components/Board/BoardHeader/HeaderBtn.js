import Link from 'next/link';

const HeaderBtn = ({ router, title }) => {
  return (
    <h1>
      <Link
        href={{
          pathname: router.pathname,
          query: { ...(router.query.id && { id: router.query.id }) }
        }}
        passHref
      >
        <a>{title}</a>
      </Link>
    </h1>
  );
};

export default HeaderBtn;
