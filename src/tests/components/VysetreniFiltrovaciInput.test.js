import React from "react";
import { shallow } from "enzyme";
import { VysetreniFiltrovaciInput } from "../../components/VysetreniFiltrovaciInput";
import { filtryFix, altFiltryFix } from "../fixtures/filtryFixtures";



let filtrovatText, serazeni, wrapper;

beforeEach(() => {
    filtrovatText = jest.fn();
    serazeni = jest.fn();
    
    //predavame spy funkce a taky ty filtrovaci data misto z redux budou z fixtures
    wrapper = shallow(
        <VysetreniFiltrovaciInput 
            filtry={filtryFix}
            filtrovatText={filtrovatText}
            serazeni={serazeni}
        />);
});


test("should render expense list by filter correctly", () => {
    expect(wrapper).toMatchSnapshot();
});


test("should render expense list by filter with alt data correctly", () => {
    wrapper.setProps({
        filters: altFiltryFix
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'act';
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(filtrovatText).toHaveBeenLastCalledWith(value);
  });

  test('mel by seradit od a', () => {
    const value = 'a';
    wrapper.setProps({
      filters: altFiltryFix
    });
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(serazeni).toHaveBeenCalled();
  });

  test('mel by seradit od z', () => {
    const value = 'z';
    
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(serazeni).toHaveBeenCalled();
  });