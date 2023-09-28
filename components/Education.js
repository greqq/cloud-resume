import data from "../data/data.json";

const EducationCard = ({ date, location, degree, course, institution }) => (
  <div className="mb-6">
    {date && (
      <p className="text-sm text-gray-600 mb-1">
        {date} | {location}
      </p>
    )}
    <h3 className="text-lg font-bold">{degree || course}</h3>
    <p>{institution}</p>
  </div>
);

const Education = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 mt-10">Education and Training</h2>
      <hr className="border-t-4 border-yellow-500 mb-4" />
      {data.education_and_training.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  );
};

export default Education;
