import { talentCards } from "@/constants/talentCardsConstants";
import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  text: string;
}

export default function Talent() {
  const ImageCard = ({ imageSrc, text }: ImageCardProps) => {
    return (
      <div className="flex h-36 w-36 flex-col items-center justify-center gap-2 rounded border border-gray-800 bg-neutral-900 shadow">
        <div className="relative h-20 w-20">
          <Image
            src={imageSrc}
            alt={`${text} Logo`}
            className="h-full max-w-full"
            fill
          />
        </div>
        <span>{text}</span>
      </div>
    );
  };

  const renderedCards = talentCards.map((ele, idx) => {
    return <ImageCard key={idx} imageSrc={ele.imageUrl} text={ele.text} />;
  });

  return (
    <section className="mt-14">
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl">
          <span>My </span>
          <span className="text-rose-500">Talent</span>
        </div>
        <div className="text-4xl">Professional Skills</div>
      </div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {renderedCards}
      </div>
    </section>
  );
}
