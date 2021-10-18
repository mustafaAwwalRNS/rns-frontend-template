import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook, act } from "@testing-library/react-hooks";
import { useAxios } from "../use-axios.hooks";

/**
 * Setting up mock server.
 */
const server = setupServer(
  rest.post("/test-mock", (req, res, ctx) => {
    return res(ctx.json({ token: "fake token" }));
  })
);

const setup = () => {
  return renderHook(() =>
    useAxios(() => axios.post<{ token: string }>("/test-mock"))
  );
};

describe("useAxios", () => {
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should fetch successful response and show truthy loading value", async () => {
    const { result, waitForNextUpdate } = setup();
    // Call the request
    act(() => result.current[0]());
    await waitForNextUpdate();

    // Match if the hook has the correct state.
    expect(result.current[1].data).toMatchObject({ token: "fake token" });
    expect(result.current[1].status).toBe("success");
    expect(result.current[1].loading).toBeFalsy();
  });

  it("should show error message", async () => {
    // Mocking the api to throw an error
    server.use(rest.post("/test-mock", (_, res, ctx) => res(ctx.status(500))));
    const { result, waitForNextUpdate } = setup();
    act(() => result.current[0]());
    await waitForNextUpdate();

    // Checking if the hook has correct state
    expect(result.current[1].error).toBeTruthy();
    expect(result.current[1].statusCode).toBe(500);
    expect(result.current[1].status).toBe("error");
    expect(result.current[1].loading).toBeFalsy();
  });
  it("refetch should be working as expected", async () => {
    const { result, waitForNextUpdate } = setup();
    act(() => result.current[0]());
    expect(result.current[1].loading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current[1].status).toBe("success");
    expect(result.current[1].loading).toBeFalsy();
    act(() => result.current[1].refetch());
    expect(result.current[1].loading).toBeTruthy();
    expect(result.current[1].status).toBe("pending");
    await waitForNextUpdate();
    expect(result.current[1].status).toBe("success");
  });
});
