interface ActivityType {
  title: string;
  imageUrl: string;
  url: string;
  minTemp: number | null;
  maxTemp: number | null;
  description: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const activityFetch = await fetch(
    "https://dtnl-frontend-case.vercel.app/api/get-activities"
  );

  if (!activityFetch.ok) {
    throw new Error("Weather fetch failed");
  }

  const activityData = await activityFetch.json();

  const { activities } = activityData;

  console.log("activities", activities);
  console.log("slug", slug);

  const currentActivity = activities.find((activity: ActivityType) =>
    activity.url.includes(slug)
  );

  return <div>{currentActivity ? <h1>{currentActivity.title}</h1> : null}</div>;
}
