import Image from "next/image";

interface TopSkillItemProps {
  imageSrc: string;
  imageAlt: string;
  mainText: string;
  subText: string;
}

export default function TopSkillItem({
  imageSrc,
  imageAlt,
  mainText,
  subText,
}: TopSkillItemProps) {
  return (
    <div className="m-6 flex flex-col items-center rounded border-gray-950 bg-gray-800 p-4 text-center shadow-sm">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={58}
        height={53}
        className="m-2"
      />
      <div className="flex flex-col gap-3 py-4 text-center">
        <span className="text-xl font-semibold text-white">{mainText}</span>
        <span className="text-sm text-gray-400">{subText}</span>
      </div>
    </div>
  );
}
