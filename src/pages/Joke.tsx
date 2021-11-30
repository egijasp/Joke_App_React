import { useNavigate, useParams } from 'react-router-dom';
import { useGetJokeByIdQuery } from '../services/joke';
import '../styles/Joke.scss';

const Joke = () => {
  const { category, id } = useParams<'category' | 'id'>();
  if (!category || !id) {
    return null;
  }

  const { isLoading, isError, data } = useGetJokeByIdQuery({ category, id });

  if (isError) {
    return <h2>ERROR</h2>;
  }

  return (
    <div className="joke__container">
      {isLoading ? (<div className="loader" />)
        : (
          <div className="joke__info">
            <span>
              <b>Joke:</b>
              &nbsp;&nbsp;
              {data?.joke}
            </span>
            <span>
              <b>Category:</b>
              &nbsp;&nbsp;
              {data?.category}
            </span>
            <span>
              <b>Joke id:</b>
              &nbsp;&nbsp;
              {data?.id}
            </span>
            <span>
              <b>Type:</b>
              &nbsp;&nbsp;
              {data?.type}
            </span>
          </div>
        )}
    </div>
  );
};

export default Joke;
