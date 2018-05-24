import React from "react";
import { shallow } from "enzyme";
import { SeznamVysetreni } from "../../components/SeznamVysetreni";
import modelovaData from "../fixtures/vysetreniFixtures";

test("mel by vyrenderovat seznam s modelovymi daty", () => {
    const wrapper = shallow(<SeznamVysetreni vysetreni={modelovaData} /> );
    expect(wrapper).toMatchSnapshot();
});


test("mel by vyrenderovat <p> ze je seznam prazdny", () => {
    const wrapper = shallow(<SeznamVysetreni vysetreni={[]} />);
    expect(wrapper).toMatchSnapshot();
});