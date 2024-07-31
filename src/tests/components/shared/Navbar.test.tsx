import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../../../components/shared/Navbar";
import { ReactNode } from "react";

vi.mock("react-router-dom", () => ({
  NavLink: ({
    to,
    children,
    ...props
  }: {
    to: string;
    children: ReactNode;
  }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe("Navbar Component", () => {
  it("should render correct items", () => {
    render(<Navbar />);

    const item = screen.getAllByRole("listitem");

    item.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    expect(item).toHaveLength(1);
  });
});
