import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultView from "../components/ResultView";

const resultData = {
    "title": {"raw": "Item title"}, 
    "url": {"raw": "https://example.org"},
    "category": {"raw": "moving-image"}
}

describe("ResultView Component", () => {
  it("renders the component", () => {
    render(<ResultView result={resultData} />);

    expect(screen.getByText("Item title")).toBeInTheDocument();
    expect(screen.getByText("moving-image")).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Item title' })).toHaveAttribute('href', 'https://example.org')
  });
});
