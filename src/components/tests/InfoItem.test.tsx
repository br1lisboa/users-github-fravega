import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoItem from "../InfoItem";

describe("InfoItem", () => {
  it("should render the InfoItem component with children", () => {
    render(
      <InfoItem>
        <InfoItem.Label>Label</InfoItem.Label>
        <InfoItem.Value>Value</InfoItem.Value>
      </InfoItem>
    );

    expect(screen.getByText("Label:")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();
  });

  it("should render the default value when no value is provided", () => {
    render(
      <InfoItem>
        <InfoItem.Label>Label</InfoItem.Label>
        <InfoItem.Value></InfoItem.Value>
      </InfoItem>
    );

    expect(screen.getByText("Label:")).toBeInTheDocument();
    expect(screen.getByText("Not available")).toBeInTheDocument();
  });

  it("should apply correct styles to the Label", () => {
    render(<InfoItem.Label>Styled Label</InfoItem.Label>);
    const label = screen.getByText("Styled Label:");

    expect(label).toHaveStyle("font-weight: bold");
  });
});
