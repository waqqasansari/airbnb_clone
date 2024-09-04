const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64] flex flex-row items-center just border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">where</p>
            <p className="text-sm">Wanted Location</p>
          </div>

          <div className="cursor-pointer lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">check-in</p>
            <p className="text-sm">Add dates</p>
          </div>

          <div className="cursor-pointer lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Chect out</p>
            <p className="text-sm">Add dates</p>
          </div>

          <div className="cursor-pointer lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add Guest</p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: 4,
              overflow: "visible",
            }}
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
