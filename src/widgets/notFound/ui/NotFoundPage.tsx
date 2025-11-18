import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>

        <div>
          <Link to="/">Homepage</Link>
        </div>
      </div>
    </>
  );
}
