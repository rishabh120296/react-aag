import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops</h1>
      <h2>Something went wrong</h2>
      <div>{error.status + "  -  " + error.statusText}</div>
    </div>
  );
};

export default ErrorComponent;
