"use client";
export default function Footer() {
  return (
    <footer className="mt-14">
      <div className="relative flex h-24 flex-row items-center justify-center bg-gray-900 text-center">
        <button
          className="absolute -top-10 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-xl border border-rose-600 bg-rose-500 text-5xl transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-rose-600 focus:ring-2"
          title="Scroll to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="mb-[-24px] mt-[-10px]">^</span>
          <span className="mb-[-24px]">^</span>
        </button>
      </div>
    </footer>
  );
}
