import React from "react";
import { shallow } from "enzyme";
import VysetreniForm from "../../components/VysetreniForm";
import modelovaData from "../fixtures/vysetreniFixtures";
import moment from "moment";

test("mel by vyrenderovat prazdny form", () => {
    const wrapper = shallow(<VysetreniForm />);
    expect(wrapper).toMatchSnapshot();
});

test("mel by vyrenderovat form i s modelovyma datama", () => {
    const wrapper = shallow(<VysetreniForm vysetreniProEditaci={modelovaData[2]}/>);
    expect(wrapper).toMatchSnapshot();
});


test("pri prazdnem submitu by mel hodit error", () => {
    const wrapper = shallow(<VysetreniForm />);
    //vytvorime snapshot stavu pred errorem a potom snapshot stavu po erroru na konci tohohle testu
    expect(wrapper).toMatchSnapshot();
    
    //find najde pozadovany element a simulate simuluje kliknuti na submit, druhy argument je objekt nahrazujici e,
    //ktery musi obsahovat property preventDefault aby to nehodilo error (jako hodnota staci prazdna fce)
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    //kontrola jestli error ve state od komponenty neco obsahuje
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("mel by se zapsat 'nazev' pri jeho zapisovani do form", () => {
    const value = "novy nazev";
    const wrapper = shallow(<VysetreniForm />);
   //vybere prvni input ktery najde
   //simuluje aktivaci handleru onChange, druhy argument je objekt nahrada e objektu, ktery je tam ocekavan (e.target.value)
    wrapper.find("input").at(0).simulate("change", {
        target: {
            value: value
        }
    });
    expect(wrapper.state("nazev")).toBe(value);
});


test("mel by se zapsat 'kam' pri jeho zapisovani do form", () => {
    const value = "novy kam";
    const wrapper = shallow(<VysetreniForm />);
   //vybere prvni input ktery najde
   //simuluje aktivaci handleru onChange, druhy argument je objekt nahrada e objektu, ktery je tam ocekavan (e.target.value)
    wrapper.find("input").at(1).simulate("change", {
        target: {
            value: value
        }
    });
    expect(wrapper.state("kam")).toBe(value);
});


test("should call onSubmit prop for valid form submission", () => {
    //onSubmitSpy je spy fce pro testovani, bude se spoustet misto te opravdicke
    const onSubmitSpy = jest.fn();
    //tady predavame v props tu spy fci, ta se v testovani spusti misto dispatche definovanem v rodicovske komponente od ExpenseForm
    const wrapper = shallow(<VysetreniForm vysetreniProEditaci={modelovaData[2]} provedSubmitDoStore={onSubmitSpy}/>);
    //tady simulujeme submit jako v testu vyse
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe(""); 
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        nazev: modelovaData[2].nazev,
        kam: modelovaData[2].kam,
        upravenoKdy: modelovaData[2].upravenoKdy
    });
});



