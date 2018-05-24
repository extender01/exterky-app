//PRIDAT TESTY PODLE ADD EXPENSE PAGE





import React from "react";
import {shallow} from "enzyme";
import { PridatVysetreniPage } from "../../components/PridatVysetreniPage";
import modelovaData from "../fixtures/vysetreniFixtures";

let provedDispatchPridatVysetreni, history, wrapper;

beforeEach(() => {
    provedDispatchPridatVysetreni = jest.fn();
    history = {push: jest.fn()};
    
    //tady rikame aby pri spusteni funkce this.props.provedDispatchPridatVysetreni byla spustena spy funkce definovana v beforeEach misto te opravdicke..
    //..tu funkci this.props.provedDispatchPridatVysetreni spusti prikaz wrapper.find("VysetreniForm").prop("provedSubmitDoStore")(modelovaData[0]); - to je simulace volani props funkce ve VysetreniForm, ta ale bude presmerovana na spy funkci
    wrapper = shallow(<PridatVysetreniPage provedDispatchPridatVysetreni={provedDispatchPridatVysetreni} history={history} />)
});

test("mel by spravne vyrenderovat PridatVysetreniPage", () => {
    expect(wrapper).toMatchSnapshot();
});


test("mel by spravne provest dispatch", () => {
    //simulace zavolani fce provedSubmitDoStore v komponente VysetreniForm s parametrem jedoho modeloveho vysetreni ze vzorove fixture
    wrapper.find("VysetreniForm").prop("provedSubmitDoStore")(modelovaData[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(provedDispatchPridatVysetreni).toHaveBeenCalledWith(modelovaData[0]);
});


