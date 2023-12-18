import IconSearch from "../../../../icons/iconSearch"

const Search = () => {
  return (
    <div className="h-9 relative">
      <label htmlFor="search" className="top-0 left-0 h-full p-[10px] px-[14px] text-neutral-500 absolute">
        <IconSearch />
      </label>
      <input id="search" className="border h-full rounded-full pl-11 text-sm outline-none text-neutral-700" />
    </div>
  )
}

export default Search