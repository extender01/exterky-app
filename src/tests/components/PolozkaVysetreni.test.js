import React from "react";
import { shallow } from "enzyme";
import PolozkaVysetreni from "../../components/PolozkaVysetreni";
import modelovaData from "../fixtures/vysetreniFixtures";

test("mel by vyrenderovat jednu z polozek modelovych dat", () => {
    const wrapper = shallow(<PolozkaVysetreni {...modelovaData[0]} />);
    expect(wrapper).toMatchSnapshot();
});