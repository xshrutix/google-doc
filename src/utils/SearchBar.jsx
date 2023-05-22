const SearchBar = () => {
  return (
 <div className="mb-3">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-md rounded-r-md border border-gray-400 border-solid border-2 bg-black bg-opacity-5 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-black focus:ring-2 focus:ring-gray-400 shadow-gray-400 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search the menus Alt+/"
      aria-label="Search"
      aria-describedby="button-addon1"
    />
  </div>
</div>
  );
};

export default SearchBar;
