import React from "react";
import { shallow } from "enzyme";
import ButtonComponent from "../ButtonComponent";

describe("<InputComponent/>", () => {
  test("return component true", () => {
    const component = shallow(<ButtonComponent />);
    expect(component).toMatchSnapshot();
  });

  test("return button true", () => {
    const component = shallow(<ButtonComponent />);
    expect(component.find("button")).toHaveLength(1);
  });
});
