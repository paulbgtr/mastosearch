import "src/index.css";
import { Search } from "./Search";
import { Story } from "@ladle/react";
import { randomSearchExample } from "@/lib/utils";
import { searchExamples } from "@/data/searchExamples";

const searchExample = randomSearchExample(searchExamples);

export const SearchStory: Story = () => (
  <Search searchExample={searchExample} />
);
