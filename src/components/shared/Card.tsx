import { FC } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { MediaCardProp } from "../../types";
import Image from "./Image";

interface CardProps {
  movie: MediaCardProp;
}
const Card: FC<CardProps> = ({ movie }) => {
  const { date, image, title, media_type, adult, cardLink } = movie;
  return (
    <div data-test-id="card" className="relative">
      <NavLink to={cardLink} aria-label="card-link">
        <div className="flex flex-col">
          <div
            className={`relative overflow-hidden cursor-pointer  bg-opacity-80  rounded-lg`}
          >
            <div className="z-10 opacity-0 hover:opacity-100 transition-all duration-500 select-none absolute flex justify-center items-center w-full h-full bg-greyishBlue bg-opacity-30  ">
              <div className="flex justify-center items-center gap-0 sm:gap-2 opacity-100 bg-greyishBlue py-2 px-2 md:py-3 md:px-4 rounded-full">
                <IoIosInformationCircleOutline
                  color="#fff"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                />
                <p className="text-bodySm md:text-headingXs">More Info</p>
              </div>
            </div>

            <div className="h-28 sm:h-36 md:h-44">
              <Image
                src={image}
                className=" object-cover select-none hover:opacity-30 rounded-lg h-full w-full"
                alt={title}
              />
            </div>
          </div>

          <div>
            <div className="text-[11px] md:text-bodySm font-outfitLight opacity-75 mt-2 flex items-center  gap-2">
              <span>{date}</span>
              <span className="w-1 h-1 rounded-full bg-white"></span>
              <p className="flex items-center gap-1 capitalize">
                <MdLocalMovies />
                <span>{media_type}</span>
              </p>
              <span className="w-1 h-1 rounded-full bg-white"></span>
              <p>{adult}</p>
            </div>
            <p className="text-[14px] md:text-headingXs font-outfitMedium ">
              {title}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
