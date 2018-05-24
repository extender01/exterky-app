import moment from "moment";
import filtrovaneVysetreni from "../../selectors/vysetreniSelector";
import modelovaData from "../fixtures/vysetreniFixtures";
//filtrovaneVysetreni vezme z redux store vsechny expenses a nacte aktualni filters a podle hodnot ve filtru vrati array tech expenses, ktere projdou filtrem
//tady si udelame modelove databazi expenses ve forme array, tedy stejne jako kdyby sly z redux, filtry se nastavi zvlast v kazdem testu




test("melo by vyfiltrovat podle toho co je ve filtru text", () => {
    const filtry = {
        text: "cys",
        razeni: "a"
    };
    
    const result = filtrovaneVysetreni(modelovaData, filtry);
    expect(result).toEqual([modelovaData[1]]);

});


test("mel by ukazat vsechny polozky protoze neni textovy filtr, a serazene od a", () => {
    const filtry = {
        text: "",
        razeni: "a"
    };
    
    const result = filtrovaneVysetreni(modelovaData, filtry);
    expect(result).toEqual([modelovaData[1], modelovaData[2], modelovaData[0]]);

});

test("mel by ukazat vsechny polozky protoze neni textovy filtr, a serazene od a", () => {
    const filtry = {
        text: "",
        razeni: "z"
    };
    
    const result = filtrovaneVysetreni(modelovaData, filtry);
    expect(result).toEqual([modelovaData[0], modelovaData[2], modelovaData[1]]);

});