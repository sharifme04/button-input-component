import React from "react";
import { shallow } from "enzyme";
import ButtonComponent from "../ButtonComponent";

describe("<InputComponent/>", () => {
  test("return true", () => {
    const component = shallow(<ButtonComponent />);
    expect(component).toMatchSnapshot();
  });

  test("does not break with an empty array", () => {
    const component = shallow(<ButtonComponent />);
    expect(component.find("button")).toHaveLength(1);
  });
});
