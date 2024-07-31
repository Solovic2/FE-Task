import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import Card from "../../../components/shared/Card";
import { MediaCardProp } from "../../../types";

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

const movie: MediaCardProp = {
  id: 1,
  adult: "PG",
  title: "Test Movie",
  image: "/assets/placeholder-image.png",
  media_type: "movie",
  cardLink: "/media/1",
  date: "2012",
};

const { title, date } = movie;

describe("Card Component", () => {
  it("should render correct items", () => {
    render(<Card movie={movie} />);

    const text = screen.getByText(title);
    const adultType = screen.getByText("PG");
    const dateText = screen.getByText(date);

    expect(text).toBeInTheDocument();
    expect(adultType).toBeInTheDocument();
    expect(dateText).toBeInTheDocument();
  });
});
