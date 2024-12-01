import {MainContainer} from "./components/MainContainer";

export default function Home() {
  return (
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <MainContainer />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
