import {pridatVysetreni, editovatVysetreni, odstranitVysetreni } from "../../actions/vysetreniActions";

test("mel by vytvorit action objekt pro odstraneni vysetreni", () => {
    const action = odstranitVysetreni("nejake id");
    expect(action).toEqual({
        type: "ODSTRANIT_VYSETRENI",
        id: "nejake id"
  });
});


test("mel by vytvorit action objekt pro editaci vysetreni", () => {
    const action = editovatVysetreni("nejake id", {kam: "krnov"});
    expect(action).toEqual({
        type: "EDITOVAT_VYSETRENI",
        id: "nejake id",
        updates: {
            kam: "krnov"
        }
    });
});


test("mel by vytvorit action objekt pro pridani vysetrni se zadanymi hodnotami", () => {
    const prikladneVysetreni = {
        nazev: "hemopexin",
        synonyma: ["hem vychytavac"],
        kam: "krnov",
        odber: ["serum"],
        preanal: "standard",
        poznamka: "rychle",
        poznamkaOdd: "posilat rano"
    }
    
    const action = pridatVysetreni(prikladneVysetreni);
    expect(action).toEqual({
        type: "PRIDAT_VYSETRENI",
        vysetreni: {
            ...prikladneVysetreni,
            id: expect.any(String)
        }
    });
});

test("mel by vytvorit action objekt pro pridani vysetreni s defaultnimi hodnotami", () => {
    const vychoziHodnoty = {
        nazev: "",
        synonyma: [],
        kam: "",
        odber: [],
        preanal: "",
        poznamka: "",
        poznamkaOdd: ""
    };

    const action = pridatVysetreni();
    expect(action).toEqual({
        type: "PRIDAT_VYSETRENI",
        vysetreni: {
            ...vychoziHodnoty,
            id: expect.any(String)
        }
    });
});

