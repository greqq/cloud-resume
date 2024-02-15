import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";
import Languages from "../components/Languages";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with profile photo and name */}
      {/* <Header visitMessage={visitMessage} /> */}

      {/* Columns Section */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* First Column */}
        <div className="w-full md:w-1/4 bg-slate-800 text-white p-4">
          {/* Profile Image */}
          <div className="mx-auto md:ml-9 md:mr-8 mb-4 md:mb-0 w-40 h-40 border-8 border-white rounded-full overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <ContactInfo />
          <Skills />
          <Languages />
        </div>
        {/* Second Column */}
        <div className="w-full md:w-3/4 bg-gray-300 p-4">
          <h1 className="text-center md:text-left mt-10 mb-16 text-black text-5xl font-bold">
            Luka Masanovic
          </h1>
          <WorkExperience />
          <Education />
        </div>
      </div>
    </div>
  );
}
