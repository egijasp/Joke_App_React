import { Link } from 'react-router-dom';
import { useGetJokeCategoriesQuery } from '../services/joke';
import '../styles/Header.scss';

const Header = () => {
  const { isLoading, isError, data } = useGetJokeCategoriesQuery(undefined);

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <header className="header">
      {isLoading ? (<div className="loader" />) : (
        <nav className="nav__container">
          <Link className="header__link" to="/">Home</Link>
          {data?.categories.map((category: string) => (
            <Link className="header__link" key={category} to={`/${category}`}>{category}</Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
