import { ProjectDetails } from "@/constants/projectConstants";
import Image from "next/image";
import Link from "next/link";

interface ProjectListItemPops extends ProjectDetails {
  index: number;
}

export default function ProjectListItem({
  index,
  imageUrl,
  url,
  tag,
  name,
  description,
}: ProjectListItemPops) {
  return (
    <div className="">
      <Link
        href={url}
        target="_blank"
        className="flex cursor-pointer flex-col items-center"
      >
        <div
          className={`flex w-10/12 flex-col gap-10 p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-gray-900 hover:bg-gray-800 hover:shadow-lg ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-10`}
        >
          <Image
            src={imageUrl}
            width={540}
            height={350}
            alt={name}
            objectFit="cover"
            className="rounded border border-neutral-900 bg-neutral-800 p-2 shadow md:p-4"
          />
          <div className="mt-4 flex flex-col justify-between gap-2 pr-8">
            <span className="text-rose-500">{tag}</span>
            <span className="text-2xl">{name}</span>
            <p>{description}</p>

            <Image
              src={"./projects/arrow-up-right.svg"}
              alt="Open link in new tab"
              width={45}
              height={45}
              objectFit="cover"
              className="mb-6 rounded-full border-2 border-neutral-900 bg-neutral-800 p-2 shadow"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
