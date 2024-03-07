import React from "react";
import { render } from "@testing-library/react";

import { Sample } from "../../lib/components/Sample";

describe("Sample", () => {
  test("renders the sample component", () => {
    render(<Sample label="Hello world!" />);
  });
});
