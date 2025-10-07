// Tests for AddCustomerForm component
// - Validates required fields (name, email, group) and shows errors
// - Allows selecting group from dropdown
// - Calls onCancel when Cancel button clicked
// - Ensures Total Orders accepts only numeric input
// - Calls onAddCustomer with correct data on valid submit

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddCustomerForm } from "./AddCustomerForm";
import "@testing-library/jest-dom";

describe("AddCustomerForm", () => {
  it("shows required field errors when submitting empty", async () => {
    const onAddCustomer = jest.fn();
    const onCancel = jest.fn();

    render(
      <AddCustomerForm onAddCustomer={onAddCustomer} onCancel={onCancel} />
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    await userEvent.click(addButton);

    const errors = await screen.findAllByText("Required");
    expect(errors).toHaveLength(3);

    expect(onAddCustomer).not.toHaveBeenCalled();
  });

  it("allows selecting a group option", async () => {
    render(<AddCustomerForm onAddCustomer={jest.fn()} onCancel={jest.fn()} />);

    const groupInput = screen.getByLabelText(/group/i);
    await userEvent.click(groupInput);

    const retailOption = screen.getByRole("option", { name: "Retail" });
    await userEvent.click(retailOption);
    expect(groupInput).toHaveTextContent("Retail");
  });

  it("calls onCancel when Cancel button is clicked", async () => {
    const onCancel = jest.fn();
    render(<AddCustomerForm onAddCustomer={jest.fn()} onCancel={onCancel} />);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await userEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("prevents non-numeric input in Total Orders field", async () => {
    render(<AddCustomerForm onAddCustomer={jest.fn()} onCancel={jest.fn()} />);

    const totalOrders = screen.getByLabelText(/total orders/i);

    await userEvent.clear(totalOrders);
    // the user types letters
    await userEvent.type(totalOrders, "abc");

    // the form does not allow letters
    expect(totalOrders).toHaveValue(0);
  });

  it("accepts numeric input in Total Orders field", async () => {
    render(<AddCustomerForm onAddCustomer={jest.fn()} onCancel={jest.fn()} />);

    const totalOrders = screen.getByLabelText(/total orders/i);

    await userEvent.clear(totalOrders);
    await userEvent.type(totalOrders, "5");

    expect(totalOrders).toHaveValue(5);
  });

  it("submits valid data", async () => {
    const onAddCustomer = jest.fn();
    const onCancel = jest.fn();

    render(
      <AddCustomerForm onAddCustomer={onAddCustomer} onCancel={onCancel} />
    );

    await userEvent.type(screen.getByLabelText(/name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    await userEvent.click(screen.getByLabelText(/group/i));
    await userEvent.click(screen.getByRole("option", { name: "Retail" }));

    const addButton = screen.getByRole("button", { name: /add/i });
    await userEvent.click(addButton);

    expect(onAddCustomer).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      group: "Retail",
      totalOrders: 0,
    });
    expect(onCancel).toHaveBeenCalled();
  });
});
