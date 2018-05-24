import vysetreniReducer from "../../reducers/vysetreniReducer";
import modelovaData from "../fixtures/vysetreniFixtures";


test("mel by nastavit vychozi stav od state", () => {
    const state = vysetreniReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});





test("mel by pridat vysetreni k dosavadnim", () => {
  const action = {
    type: "PRIDAT_VYSETRENI",
    vysetreni: {
        nazev: "anti tTG",
        synonyma: ["celiakie"],
        kam: "krnov",
        odber: ["serum"],
        preanal: "profackat pacienta",
        poznamka: "pomalu",
        poznamkaOdd: "posilat rano",
        id: 4,
        upravenoKdy: 9000
    }
  };
  
    const state = vysetreniReducer(modelovaData, action);
    expect(state).toEqual([...modelovaData, action.vysetreni]);
});




test("mel by editovat vysetreni", () => {
    const action = {
        type: "EDITOVAT_VYSETRENI",
        id: 3,
        updates: {
            nazev: "bezlepkova voda"
        }
    };
    const state = vysetreniReducer(modelovaData, action);
    expect(state[2].nazev).toBe("bezlepkova voda");
});


test("nemel by editovat kdyz je spatne zadane id", () => {
    const action = {
        type: "EDITOVAT_VYSETRENI",
        id: -1,
        updates: {
            nazev: "bezlepkova vzduch"
        }
    };
    const state = vysetreniReducer(modelovaData, action);
    expect(state).toEqual(modelovaData);    
});


test("mel by odstranit vysetreni s id 1, cili prvni v array", () => {
    const action = {
        type: "ODSTRANIT_VYSETRENI",
        id: 1
    };
    const state = vysetreniReducer(modelovaData, action);
    expect(state).toEqual([modelovaData[1], modelovaData[2]]);
});


test("nemel by odstranit pri spatne zadanem id", () => {
    const action = {
        type: "ODSTRANIT_VYSETRENI",
        id: -1
    };
    const state = vysetreniReducer(modelovaData, action);
    expect(state).toEqual(modelovaData);
});