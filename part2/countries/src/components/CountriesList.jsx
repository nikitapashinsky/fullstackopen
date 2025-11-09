import cn from "../utils/cn";

const CountriesList = ({ countries, onMouseDown }) => {
  if (countries.length > 20) {
    return <p>Too many matches, continue typing…</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {countries.map((country) => (
        <button
          onMouseDown={() => onMouseDown(country)}
          className={cn(
            "flex items-center gap-4 px-2 py-1",
            "dark:hover:bg-neutral-800",
          )}
          key={country.cca2}
        >
          <div className="flex size-10 shrink-0 items-center justify-center">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="w-full bg-contain"
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-medium">{country.name.common}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {country.name.official}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CountriesList;
