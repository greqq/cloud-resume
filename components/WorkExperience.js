import data from "../data/data.json";

const ExperienceCard = ({ date, location, position, tasks, technologies }) => (
  <div className="flex mb-6 relative">
    {/* Circle */}
    <div className="absolute left-[-9.2px] top-0 w-3 h-3 mt-2 bg-gray-700 rounded-full"></div>

    {/* Content */}
    <div className="flex-grow ml-4">
      {" "}
      {/* Added ml-4 to push content to the right of circle */}
      <h3 className="text-xl font-bold">{position}</h3>
      <p className="text-sm text-gray-600">
        {date} | {location}
      </p>
      <ul className="list-disc pl-5 mt-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p className="mt-2 font-semibold">Key Technologies:</p>
      <p>{technologies.join(", ")}</p>
    </div>
  </div>
);

const WorkExperience = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
      <hr className="border-t-4 border-yellow-500 mb-4" />
      <div className="relative pl-1">
        {" "}
        {/* Added pl-1 to shift everything to the right of the line */}
        <div className="absolute left-0 w-0.5 mt-2 bg-gray-600 h-full"></div>{" "}
        {/* This is our continuous line */}
        {data.work_experience.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
