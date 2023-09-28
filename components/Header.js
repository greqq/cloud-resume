export default function Header({ visitMessage }) {
  return (
    <div className="bg-gray-400 flex items-center p-10">
      <div className="w-40 h-40 mr-8 border-8 border-blue-400 rounded-full overflow-hidden">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-black text-5xl font-bold">Luka Masanovic</h1>
      <div>{visitMessage}</div>
    </div>
  );
}
