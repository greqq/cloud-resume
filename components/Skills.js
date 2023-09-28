import data from "../data/data.json";

export default function Skills() {
  return (
    <div className="mt-10 ml-9">
      <h2 className="text-xl font-bold mb-2">SKILLS</h2>
      <hr className="border-t-4 border-yellow-500 mb-4" />
      <ul className="list-disc pl-5">
        {data &&
          data.skills &&
          data.skills.map((skill, index) => (
            <li className="mb-1" key={index}>
              {skill}
            </li>
          ))}
      </ul>
    </div>
  );
}
