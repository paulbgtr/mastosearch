import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { randomSearchExample } from "./lib/utils";
import { searchExamples } from "./data/searchExamples";

function App() {
  const searchExample = randomSearchExample(searchExamples);
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div className="space-y-32">
        <Navbar />
        <Search searchExample={searchExample} />
      </div>
      <footer>test</footer>
    </main>
  );
}

export default App;
