import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

describe("App", async () => {
  it("should render", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("should increment count", () => {
    render(<App />);
    fireEvent.click(screen.getByText("count is 0"));
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });
});
