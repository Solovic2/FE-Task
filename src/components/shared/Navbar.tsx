import { MdMovieCreation } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:pt-8 md:h-full  md:fixed md:top-0 rounded-xl ">
      <div className="md:h-[calc(100svh-3rem)] flex md:flex-col justify-between items-center p-3 md:py-5 md:px-9 bg-semiDarkBlue rounded-lg">
        <NavLink to="/" aria-label="home-page-link">
          <MdMovieCreation className="text-primaryRed text-xl md:text-2xl w-8 h-8" />
        </NavLink>
        <ul className="md:pt-12 flex md:flex-grow md:flex-col md:justify-start justify-center items-center  gap-4 md:gap-9 text-greyishBlue">
          <li>
            <NavLink
              to="/"
              aria-label="movie-link-page"
              className={({ isActive }) =>
                isActive ? "text-white" : "hover:text-primaryRed"
              }
            >
              <PiSquaresFourFill className="text-xl md:text-2xl" />
            </NavLink>
          </li>
        </ul>
        <div
          className={`w-8 h-8 rounded-full bg-primaryRed  cursor-pointer select-none`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
