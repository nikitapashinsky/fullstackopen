import cn from "../utils/cn";

const CountryItem = ({ country }) => {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <div className="flex min-h-10 items-start gap-4 px-2 pt-1.5">
        <div className="flex size-10 shrink-0 items-center justify-center">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full bg-contain"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-4xl leading-10 font-bold tracking-tight">
            {country.name.common}
          </h1>
          <h2 className="text-xl font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
            {country.name.official}
          </h2>
        </div>
      </div>
      <div
        className={cn(
          "grid grid-cols-[6rem_1fr] items-start gap-x-6 gap-y-1.5",
        )}
      >
        {country.capital && (
          <>
            <div className={cn("text-neutral-600 dark:text-neutral-400")}>
              Capital
            </div>
            <div className={cn("font-medium")}>{country.capital[0]}</div>
          </>
        )}

        <div className={cn("text-neutral-600 dark:text-neutral-400")}>Area</div>
        <div className={cn("font-medium")}>
          {country.area} km<sup>2</sup>
        </div>

        <div className={cn("text-neutral-600 dark:text-neutral-400")}>
          Languages
        </div>
        <div className={cn("")}>
          <ul>
            {Object.entries(country.languages).map(([key, value]) => (
              <li key={key} className={cn("font-medium")}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
