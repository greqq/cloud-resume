import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import LanguageIcon from "@mui/icons-material/Language";
import VisitorCounter from "./VisitorCounter";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start mt-10 ml-9 w-full max-w-md mx-auto">
      <VisitorCounter />
      <div className="flex items-center mb-2">
        <MailIcon className="mr-2" fontSize="small" />
        <span>lukamasa@gmail.com</span>
      </div>
      <div className="flex items-center mb-2">
        <PhoneIcon className="mr-2" fontSize="small" />
        <span>+38591091091</span>
      </div>
      <div className="flex items-center mb-2">
        <HomeIcon className="mr-2" fontSize="small" />
        <span>Osijek, Croatia</span>
      </div>
      <div className="flex items-center mb-2">
        <FlagIcon className="mr-2" fontSize="small" />
        <span>Croatian</span>
      </div>
      <div className="flex items-center">
        <LanguageIcon className="mr-2" fontSize="small" />
        <span>www.webflow.com</span>
      </div>
    </div>
  );
}
