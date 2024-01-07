import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { RenderWithProvider } from "./testProvider";
import { setupServer } from "msw/node";
import { handlers } from "./mockHandlers";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Editor } from "../pages/GraphiQLPage/Editor";
import { prettify } from "../functions";
import { INITIAL_QUERY } from "../constants";

const server = setupServer(...handlers);

describe("Pages", async () => {
  beforeAll(() => server.listen());
  beforeEach(() => {
    render(RenderWithProvider());
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Header renders", async () => {
    const year = await screen.findByText("welcome");
    expect(year).toBeTruthy();
  });
  it("SignIn renders", async () => {
    const sign = await screen.findByText("signIn");

    act(() => {
      fireEvent.click(sign);
    });

    const text = await screen.findByText("noAccount");

    expect(text).toBeTruthy();
  });
  it("SignUp renders", async () => {
    const sign = await screen.findByText("signIn");

    act(() => {
      fireEvent.click(sign);
    });
    const create = await screen.findByText("createOne");
    act(() => {
      fireEvent.click(create);
    });
    const already = await screen.findByText("alreadyHaveAccount");

    expect(already).toBeTruthy();
  });
});

describe("Editor", async () => {
  beforeAll(() => server.listen());
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Editor refetch={() => new Promise(() => null)} />
      </MemoryRouter>,
    );
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Renders", async () => {
    const variables = await screen.findByText("variables");
    expect(variables).toBeTruthy();
  });

  it("Schema", async () => {
    const buttons = await screen.findAllByRole("button");
    act(() => {
      fireEvent.click(buttons[0]);
    });

    const schema = await screen.findByText("schemaTitle");
    expect(schema).toBeTruthy();
  });

  it("Prettify", async () => {
    const buttons = await screen.findAllByRole("button");
    act(() => {
      fireEvent.click(buttons[4]);
      fireEvent.click(buttons[3]);
    });

    const text = await screen.findByText("headers");
    expect(text).toBeTruthy();
  });

  it("Loads", async () => {
    const buttons = await screen.findAllByRole("button");
    act(() => {
      fireEvent.click(buttons[2]);
    });

    const text = await screen.findByText("headers");
    expect(text).toBeTruthy();
  });
});

describe("Functions", async () => {
  it("Pretty", async () => {
    expect(prettify(INITIAL_QUERY)).toBeTruthy();
  });
});
