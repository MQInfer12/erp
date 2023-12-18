import asideData from "../../data/asideData";

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Left = ({ page, setPage }: Props) => {
  return (
    <div className="h-full bg-gray-600 w-20 border-r border-gray-800">
      {asideData.map((value) => (
        <button
          onClick={() => setPage(value.id)}
          key={value.id}
          className={`w-full aspect-square p-4 flex transition-all duration-300 flex-col items-center gap-1 ${page === value.id ? "bg-sky-500 text-white" : "text-gray-400"}`}
        >
          {value.icon}
          <small className="font-semibold text-xs">{value.name}</small>
        </button>
      ))}
    </div>
  );
};

export default Left;
