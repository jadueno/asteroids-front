import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="pb-4">
      <Link to="/">
        <h2 className="text-2xl font-semibold leading-tight hover:text-blue-500">
          Asteroids App
        </h2>
      </Link>
      <h3 className="text-xs font-semibold leading-tight text-blue-500">
        By Juan Madueño
      </h3>
    </div>
  );
};
