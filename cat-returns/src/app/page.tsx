import {MainContainer} from "./components/MainContainer";

export default function Home() {
  return (
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)]">
      <main 
        id="main-content"
        className="flex flex-col row-start-2 items-center sm:items-start"
        role="main"
        aria-label="Main content area"
      >
        <MainContainer />
      </main>

      <footer 
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
        role="contentinfo"
        aria-label="Site Footer">
       
      </footer>
    </div>
  );
}
