import React from "react";
import { render, screen } from "@testing-library/react";
import LinksOfInterest from "../LinksOfInterest";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

describe("LinksOfInterest", () => {
  it("should render children correctly", () => {
    render(
      <LinksOfInterest>
        <LinksOfInterest.Title>Title</LinksOfInterest.Title>
        <LinksOfInterest.Item>Item</LinksOfInterest.Item>
        <LinksOfInterest.Link href="/test">Link</LinksOfInterest.Link>
      </LinksOfInterest>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Item")).toBeInTheDocument();
    expect(screen.getByText("Link")).toBeInTheDocument();
  });

  it("should render the title with correct styles", () => {
    render(<LinksOfInterest.Title>Styled Title</LinksOfInterest.Title>);
    const title = screen.getByText("Styled Title");

    expect(title).toHaveStyle("font-weight: bold");
    expect(title).toHaveStyle("text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2)");
  });

  it("should render items with correct flex properties", () => {
    render(<LinksOfInterest.Item>Flex Item</LinksOfInterest.Item>);
    const item = screen.getByText("Flex Item");

    expect(item.parentElement).toHaveStyle("display: flex");
  });
});
