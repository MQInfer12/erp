import IconHome from "../../../../icons/iconHome"

const Left = () => {
  return (
    <div className="h-full bg-gray-600 w-20 border-r border-gray-800">
      <button className="w-full aspect-square p-4 flex flex-col gap-1 bg-sky-500 text-white">
        <IconHome />
        <small className="font-semibold">Home</small>
      </button>
    </div>
  )
}

export default Left