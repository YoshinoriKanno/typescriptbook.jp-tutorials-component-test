import { render, screen, fireEvent } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";



test("ボタンをクリックするとON/OFFの表示が切り替わる", () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  expect(simpleButton).toHaveTextContent("OFF");
  fireEvent.click(simpleButton);
  expect(simpleButton).toHaveTextContent("ON");
});
