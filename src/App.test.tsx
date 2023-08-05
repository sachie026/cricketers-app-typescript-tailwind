import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import {
  CRICKETERS_LIST_TITLE,
  NEXT_LABEL,
  PREV_LABEL,
  SEARCH_PLACEHOLDER,
} from "./data/labels";
import { NAME_KEY, TYPE_ALL, TYPE_KEY } from "./data/shared";

test("renders the players list", async () => {
  render(<App />);

  await waitFor(() => {
    const cricketersTitle = screen.getByText(CRICKETERS_LIST_TITLE);
    expect(cricketersTitle).toBeInTheDocument();
  });
});

test("renders the table pagination", async () => {
  render(<App />);

  await waitFor(() => {
    const prevLabel = screen.getByText(PREV_LABEL);
    expect(prevLabel).toBeInTheDocument();
  });

  await waitFor(() => {
    const nextLabel = screen.getByText(NEXT_LABEL);
    expect(nextLabel).toBeInTheDocument();
  });

  await waitFor(() => {
    const pageLabel = screen.getByText("page 1 of 2");
    expect(pageLabel).toBeInTheDocument();
  });
});

test("renders all columns", async () => {
  render(<App />);

  await waitFor(() => {
    const nameCol = screen.getByText(NAME_KEY);
    expect(nameCol).toBeInTheDocument();
  });

  await waitFor(() => {
    const typeCol = screen.getByText(TYPE_KEY);
    expect(typeCol).toBeInTheDocument();
  });
});

test("renders search filter bar", async () => {
  render(<App />);

  await waitFor(() => {
    const searchText = screen.getByPlaceholderText(SEARCH_PLACEHOLDER);
    expect(searchText).toBeInTheDocument();
  });

  await waitFor(() => {
    const selectDropDown = screen.getByText(TYPE_ALL);
    expect(selectDropDown).toBeInTheDocument();
  });
});

test("render and check the number of rows", async () => {
  render(<App />);

  await waitFor(() => {
    const tableRow = screen.getAllByTestId("table-row");

    expect(tableRow).toHaveLength(10);
  });
});
