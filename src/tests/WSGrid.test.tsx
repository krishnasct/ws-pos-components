import React from "react";
import { render } from "@testing-library/react";

import { WSGrid } from "../../lib/components/WSGrid";

describe("WSGrid", () => {
  test("renders the WSGrid component", () => {
    render(<WSGrid label="Hello world!" />);
  });
});
