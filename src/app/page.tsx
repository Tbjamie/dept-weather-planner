import Accordeon from "../components/Accordeon";
import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Input from "../components/Input";
import WeatherCard from "../components/WeatherCard";

interface WeatherCard {
  temperature: {
    temp: number;
    metric: string;
  };
  weatherInfo: {
    minTemp: number | null;
    maxTemp: number | null;
    title: string;
    description: string;
  }[];
}

interface ActivityCard {
  activities: {
    title: string;
    imageUrl: string;
    url: string;
    minTemp: number | null;
    maxTemp: number | null;
    description: string;
  }[];
}

export default async function Home() {
  const weatherFetch = await fetch(
    "https://dtnl-frontend-case.vercel.app/api/get-weather"
  );

  if (!weatherFetch.ok) {
    throw new Error("Weather fetch failed");
  }

  const weatherData: WeatherCard = await weatherFetch.json();

  const { temperature, weatherInfo } = weatherData;

  const currentWeather = weatherInfo.find(
    (weather) =>
      (weather.minTemp === null || temperature.temp >= weather.minTemp) &&
      (weather.maxTemp === null || temperature.temp <= weather.maxTemp)
  );

  const activityFetch = await fetch(
    "https://dtnl-frontend-case.vercel.app/api/get-activities"
  );

  if (!activityFetch.ok) {
    throw new Error("Activity fetch failed");
  }

  const activityData: ActivityCard = await activityFetch.json();

  const { activities } = activityData;

  const relevantActivities = activities.filter((activity) => {
    return (
      (activity.minTemp === null || temperature.temp >= activity.minTemp) &&
      (activity.maxTemp === null || temperature.temp <= activity.maxTemp)
    );
  });

  const irrelevantActivities = activities.filter((activity) => {
    const { minTemp, maxTemp } = activity;
    return (
      (minTemp !== null && temperature.temp < minTemp) ||
      (maxTemp !== null && temperature.temp > maxTemp)
    );
  });

  console.log("Activities:", activities);
  console.log("Relevant Activities:", relevantActivities);
  console.log("Irrelevant Activities:", irrelevantActivities);

  const relevantActivityCards = relevantActivities.map((activity) => {
    return (
      <ActivityCard
        key={activity.title}
        title={activity.title}
        description={activity.description}
        imageUrl={activity.imageUrl}
        href={activity.url}
      />
    );
  });

  const irrelevantActivityCards = irrelevantActivities.map((activity) => {
    return (
      <ActivityCard
        key={activity.title}
        title={activity.title}
        description={activity.description}
        imageUrl={activity.imageUrl}
        href={activity.url}
      />
    );
  });

  return (
    <div className="lg:grid lg:gap-3 max-w-[1440px] lg:grid-cols-[repeat(24, minmax(0, 1fr))] mx-auto">
      <div className="lg:col-span-12 lg:row-start-1">
        <section className="bg-purple text-white px-fluid-main pt-fluid-main-top flex flex-col gap-[1.875rem] pb-5 lg:pb-28 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-purple before:-translate-x-full relative">
          <h1>DEPT® weather planner</h1>

          <Accordeon />
        </section>

        <section className="px-fluid-main bg-black-50 py-5 lg:py-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-50 before:-translate-x-full relative">
          <h2 className="!text-lg leading-7 mb-5">
            Want to get a daily forecast?
          </h2>

          <form
            action="/subscribe"
            method="POST"
            className="flex flex-col lg:flex-row gap-5 lg:gap-3.5 font-sans"
          >
            <Input placeholder="Enter your e-mailaddress" />
            <Button buttonText="Submit" type="submit" />
          </form>
        </section>
      </div>

      <section className="px-fluid-main pt-5 lg:pt-[1.875rem] pb-12 lg:col-span-12 lg:row-start-1">
        <WeatherCard
          weather={weatherData.temperature?.temp}
          title={currentWeather.title.replace(
            "{{ CELCIUS }}",
            `${temperature.temp}`
          )}
          description={currentWeather.description}
        />

        <h2 className="mt-[1.875rem] mb-2.5">Some things you could do:</h2>
        <div className="flex flex-col gap-[1.875rem]">
          {relevantActivityCards}
        </div>

        <h2 className="mt-[1.875rem] mb-2.5">Some things you should not do:</h2>
        <div className="flex flex-col gap-[1.875rem]">
          {irrelevantActivityCards}
        </div>
      </section>
    </div>
  );
}
