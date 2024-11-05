import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="grid grid-cols-2 items-center gap-10">
        {/* Left Side: Text Content */}
        <div>
          <p className="mb-2 text-gray-400">HELLO, MY NAME IS</p>
          <h1 className="text-5xl font-bold">
            <span className="text-rose-500">Rupesh </span>
            <span className="text-white">Biswas</span>
          </h1>
          <p className="mb-6 mt-2 text-xl text-gray-400">
            Senior Solutions Engineer
          </p>

          <p className="mb-8 text-gray-300">
            With over 5 years of experience in data analysis and product
            management, I bring a unique perspective to problem-solving and
            strategic decision-making. Now, I&#39;m transitioning to software
            development, where I&#39;m excited to apply my analytical background
            to create impactful solutions.
          </p>

          {/* Download Resume Button */}
          <Link
            href="./Rupesh_Biswas.pdf"
            target="_blank"
            className="inline-block rounded-md bg-rose-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-rose-600"
          >
            Download Resume
          </Link>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <Link
              href="https://github.com/rupesh-biswas/"
              target="_blank"
              className="rounded-md bg-gray-800 px-2 pb-2 pt-3 transition hover:bg-rose-300"
            >
              <Image
                src={"./social/github.svg"}
                width={24}
                height={24}
                alt="Github Icon"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/rupesh-biswas/"
              target="_blank"
              className="rounded-md bg-gray-800 p-2 transition hover:bg-rose-300"
            >
              <Image
                src={"./social/linkedin.svg"}
                width={24}
                height={24}
                alt="LinkedIn Icon"
              />
            </Link>

            <Link
              href="mailto:rupeshbiswas1997@gmail.com"
              target="_blank"
              className="rounded-md bg-gray-800 p-2 transition hover:bg-rose-300"
            >
              <Image
                src={"./social/mail.svg"}
                width={24}
                height={24}
                alt="Mail Icon"
              />
            </Link>

            <Link
              href="https://x.com/rupeshbiswas18"
              target="_blank"
              className="rounded-md bg-gray-800 p-2 transition hover:bg-rose-300"
            >
              <Image
                src={"./social/twitter.svg"}
                width={24}
                height={24}
                alt="Twitter Icon"
              />
            </Link>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        {/* Fix the image positioning */}
        <div className="">
          <Image
            src="./rupesh_image.svg"
            alt="Image of Rupesh Biswas"
            height={596}
            width={675}
          />
        </div>
      </div>
    </section>
  );
}
