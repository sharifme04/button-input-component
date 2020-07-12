import React from "react";
import { shallow } from "enzyme";
import InputComponent from "../InputComponent";

describe("<InputComponent/>", () => {
  test("return Component true", () => {
    const component = shallow(<InputComponent />);
    expect(component).toMatchSnapshot();
  });

  test("return input true", () => {
    const component = shallow(<InputComponent />);
    expect(component.find("input")).toHaveLength(1);
  });
});
