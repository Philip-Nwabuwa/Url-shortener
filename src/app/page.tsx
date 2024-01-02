import ModeToggle from "@/components/common/ThemeToggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-900 dark:text-slate-200">
      <h1>Hello Next.js</h1>
      <div className="">
        <ModeToggle />
      </div>
    </main>
  );
}
