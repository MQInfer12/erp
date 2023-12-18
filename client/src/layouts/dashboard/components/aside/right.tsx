import Link from "./link/link";
import asideData from "../../data/asideData";

interface Props {
  page: number;
}

const Right = ({ page }: Props) => {
  const pageSelected = asideData.find(value => value.id === page);
  
  return (
    <div>
      <header className="h-20 flex items-center justify-center">
        <h2 className="text-gray-400">{pageSelected?.name}</h2>
      </header>
      <div className="px-4 flex flex-col gap-2">
      {
        pageSelected?.links.map(link => (
          <Link key={link.url} to={link.url}>{link.title}</Link>
        ))
      }
      </div>
    </div>
  );
};

export default Right;
