import React from "react";
import { shallow } from "enzyme";
import VysetreniDashboardPage from "../../components/VysetreniDashboardPage";


test("should render expense dashboard page", () => {
    const wrapper = shallow(<VysetreniDashboardPage />);
    expect(wrapper).toMatchSnapshot();

});