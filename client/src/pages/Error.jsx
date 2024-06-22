import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    <div>
      <img src={img} alt="not found" />
      <h3>Ohh! page not found</h3>
      <p>We can't seem to find the page you are looking for.</p>
      <Link to="/dashboard">Dashboard</Link>
    </div>;
  }

  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
};
export default Error;
