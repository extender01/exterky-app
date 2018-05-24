import { filtrovatText, serazeni } from "../../actions/filtryActions";

test("mel by vytvorit action objekt pro filtrovani textem", () => {
    const action = filtrovatText("nejaky text");
    expect(action).toEqual({
        type: "FILTROVAT_TEXT",
        text: "nejaky text"
    });
});


test("mel by vytvorit action objekt pro serazeni polozek", () => {
    const action = serazeni("z");
    expect(action).toEqual({
        type: "SERAZENI",
        razeni: "z"
    });
});


test("mel by vytvorit action objekt pro serazeni polozek s defaultni hodnotou", () => {
    const action = serazeni();
    expect(action).toEqual({
        type: "SERAZENI",
        razeni: "a"
    });
});