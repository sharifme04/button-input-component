import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import InputComponent from "./q3/InputComponent";
import ButtonComponent from "./q2/ButtonComponent";

describe("Parent Component", () => {
  it("should render initial layout", () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it("renders Child component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<InputComponent />)).toEqual(true);
  });
  
  it("renders Child component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<ButtonComponent />)).toEqual(true);
  });
});
