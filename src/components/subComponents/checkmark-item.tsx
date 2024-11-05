import Image from "next/image";

interface CheckMarkItemProps {
  text: string;
}
export default function CheckMarkItem({ text }: CheckMarkItemProps) {
  return (
    <div className="flex flex-row items-center">
      <Image src={"./check.svg"} height={22} width={29} alt="checkmark" />
      <span className="mx-4">{text}</span>
    </div>
  );
}
