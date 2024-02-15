import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisitorCounter from "./VisitorCounter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start mt-10 ml-9 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold">Cloud Resume</h2>
      <VisitorCounter />
      <hr className="border-t-4 border-yellow-500 mb-4" />
      <div className="flex items-center mb-2">
        <LinkedInIcon className="mr-2" fontSize="small" />
        <a href="https://www.linkedin.com/in/luka-masanovic/" target="_blank" rel="noopener noreferrer">Profile</a>
      </div>
      <div className="flex items-center mb-2">
        <GitHubIcon className="mr-2" fontSize="small" />
        <a href="https://github.com/greqq/cloud-resume" target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
      <div className="flex items-center mb-2">
        <MailIcon className="mr-2" fontSize="small" />
        <span>lukamasanovic@gmail.com</span>
      </div>
      <div className="flex items-center mb-2">
        <HomeIcon className="mr-2" fontSize="small" />
        <span>Osijek, Croatia</span>
      </div>
      <div className="flex items-center mb-2">
        <FlagIcon className="mr-2" fontSize="small" />
        <span>Croatian</span>
      </div>
    </div>
  );
}
