import { NavLink } from "react-router-dom";
import lightLogo from "/icons/darkBlueI.svg";
import darkLogo from "/icons/green.svg";

type Props = {
   isDarkMode: boolean;
};

function Logo({ isDarkMode }: Props) {
   return (
      <NavLink to="/" className="flex dark:text-light-gray">
         <img
            className="h-10 w-7 mr-3"
            src={isDarkMode ? darkLogo : lightLogo}
            alt="icon"
         />
         <span className="self-center text-md font-semibold whitespace-nowrap dark:text-light-gray">
            Samuel Casco
         </span>
      </NavLink>
   );
}

export default Logo;
