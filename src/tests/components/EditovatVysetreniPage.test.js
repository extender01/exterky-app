import React from "react";
import { shallow } from "enzyme";
import { EditovatVysetreniPage } from "../../components/EditovatVysetreniPage";
import modelovaData from "../fixtures/vysetreniFixtures";



let editovatVysetreni, odstranitVysetreni, history, vybraneVysetreni, wrapper;

beforeEach(() => {
    editovatVysetreni = jest.fn();
    odstranitVysetreni = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        //predavane funkce ve forme props simuluji jejich volani z expenseForm protoze tam jsou taky v props pres MapDispatchToProps
        <EditovatVysetreniPage
            editovatVysetreni={editovatVysetreni}
            odstranitVysetreni={odstranitVysetreni}
            history={history}
            vybraneVysetreni={modelovaData[1]}
        />
    );
});


test("mel by vyrenderovat EditovatVysetreniPage", () => {
    expect(wrapper).toMatchSnapshot();
});


test("mel by zvladnout edit vysetreni", () => {
    wrapper.find("VysetreniForm").prop("provedSubmitDoStore")(modelovaData[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editovatVysetreni).toHaveBeenLastCalledWith(modelovaData[1].id, modelovaData[1]);
});

test("mel by zvladnout edit vysetreni", () => {
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(odstranitVysetreni).toHaveBeenLastCalledWith(modelovaData[1].id);
});




