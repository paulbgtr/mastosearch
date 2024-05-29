import "src/index.css";
import { Search } from "./Search";
import { Story } from "@ladle/react";
import { randomSearchExample } from "@/lib/utils";
import { searchExamples } from "@/data/searchExamples";
import queryClient from "@/lib/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const searchExample = randomSearchExample(searchExamples);

export const SearchStory: Story = () => (
  <QueryClientProvider client={queryClient}>
    <Search searchExample={searchExample} />
  </QueryClientProvider>
);
