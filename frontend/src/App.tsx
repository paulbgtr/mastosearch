import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { randomSearchExample } from "./lib/utils";
import { searchExamples } from "./data/searchExamples";
import { Footer } from "./components/Footer/Footer";

function App() {
  const searchExample = randomSearchExample(searchExamples);
  return (
    <main>
      <div className="min-h-screen pb-8 space-y-32">
        <Navbar />
        <Search searchExample={searchExample} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
