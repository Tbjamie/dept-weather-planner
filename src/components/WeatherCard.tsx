export default async function WeatherCard({
  weather = 0,
  title = "",
  description = "",
}: {
  weather?: number;
  title?: string;
  description?: string;
}) {
  return (
    <article className="bg-rose rounded-md p-5 lg:py-[1.875rem] lg:px-8 lg:flex lg:gap-6 lg:items-center">
      <h2 className="!text-fluid-weather">{weather}˚</h2>
      <div>
        {title ? <h3>{title}</h3> : null}
        {description ? <p className="font-light">{description}</p> : null}
      </div>
    </article>
  );
}
