import Image from "next/image";

export default function ActivityCard({
  title = "",
  description = "",
  imageUrl = "",
  href = "",
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  href?: string;
}) {
  return (
    <a href={href} className="lg:flex lg:gap-3">
      <div className="w-full aspect-[2.6] overflow-clip mb-5 lg:mb-0 lg:aspect-square lg:w-[6.875rem] lg:h-[6.875rem]">
        {imageUrl ? (
          <Image
            className="object-cover w-full h-full"
            src={imageUrl}
            alt={title}
            width={335}
            height={130}
          />
        ) : null}
      </div>

      <div className="pb-5 lg:pb-6 border-b border-solid border-black-100">
        {title ? (
          <h3 className="!text-fluid-activity mb-1 lg:mb-0 leading-tight">
            {title}
          </h3>
        ) : null}

        {description ? <p className="font-light">{description}</p> : null}
      </div>
    </a>
  );
}
