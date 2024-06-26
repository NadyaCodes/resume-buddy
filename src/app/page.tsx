import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Hire <span className="text-[hsl(280,100%,70%)]">Me</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-AD.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Administration</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-BA-Resume-2024.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Brand Ambassador</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-CLCS.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Cleaner / Customer Service</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-CS.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Customer Service</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-CSAD.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">
              Customer Service / Administration
            </h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-DF.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Digital Freelancer</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-DFAD.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">
              Digital Freelancer / Administration
            </h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-WD.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Web Developer</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="Nadya-Corscadden-Resume-May-2024-WDDF.pdf"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">
              Web Developer / Digital Freelancer
            </h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
