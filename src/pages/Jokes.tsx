import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetJokesFromCategoryQuery } from '../services/joke';
import '../styles/Jokes.scss';

const Jokes = () => {
  const { category } = useParams<'category'>();

  const { isLoading, isError, data } = useGetJokesFromCategoryQuery(category || '');
  const navigate = useNavigate();

  if (!category) {
    navigate('../../404');
  }

  if (isError) {
    return (<h1>Error</h1>);
  }

  return (
    <div className="container">
      <h2 className="heading2">
        {category}
        {' '}
        jokes
      </h2>
      {isLoading ? (<div className="loader" />) : (
        <div className="jokes__wrapper">
          {data?.message ? (
            <div className="jokes__message">
              <h3 className="heading2">{data?.message}</h3>
              <span className="span">{data?.causedBy}</span>
            </div>
          ) : (
            <ul>
              {data?.jokes.map(({ joke, id }) => (
                <li className="jokes__list">
                  <Link className="link" key={joke} to={`${id}`}>
                    {joke}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Jokes;
