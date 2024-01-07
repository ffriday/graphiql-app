import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("Renders", () => {
    render(<Footer />);
    const year = screen.getByText("2023-2024");
    expect(year).toBeTruthy();
  });
});
