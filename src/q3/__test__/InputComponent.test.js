import React from "react";
import { shallow } from "enzyme";
import InputComponent from "../InputComponent";

describe("<InputComponent/>", () => {
  test("return true", () => {
    const component = shallow(<InputComponent />);
    expect(component).toMatchSnapshot();
  });

  test("does not break with an empty array", () => {
    const component = shallow(<InputComponent />);
    expect(component.find("input")).toHaveLength(1);
  });
});
