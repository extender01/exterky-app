import filtryReducer from "../../reducers/filtryReducer";

//kdyz do prvniho argumentu of filtryReducer dame undefined, tak to znamena ze zadny state jeste neexistuje a maji se pouzit defaultni hodnoty definovane v reduceru

test("mel by nastavit defaultni hodnoty filtru", () => {
    const state = filtryReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        razeni: "a"
    });
});



test("mel by seradit od z", () => {
    const state = filtryReducer(undefined, {type: "SERAZENI", razeni: "z"});
    expect(state.razeni).toBe("z");
});


test("mel by seradit od nejnovejsich", () => {
    const state = filtryReducer(undefined, {type: "SERAZENI", razeni: "nejnovejsi"});
    expect(state.razeni).toBe("nejnovejsi");
});

//jen jiny zpusob, kontrolujeme cely state objekt, nejen tu jednu property
test("mel by seradit od nejstarsich", () => {
    const state = filtryReducer(undefined, {type: "SERAZENI", razeni: "nejstarsi"});
    expect(state).toEqual({
        text:"",
        razeni: "nejstarsi"
    });
});


//tady uz predavame nejaky state (destructured), bo razeni podle a je defaultni tak bychom nepoznali zmenu
test("mel by seradit od a", () => {
    const state = filtryReducer({razeni: "z", text: ""}, {type:"SERAZENI", razeni: "a"});
    expect(state).toEqual({
        text: "",
        razeni: "a"
    });
});


test("mel by filtrovat nejakym textem", () => {
    const state = filtryReducer(undefined, {type: "FILTROVAT_TEXT", text: "hem"});
    expect(state).toEqual({
        text:"hem",
        razeni: "a"
    });
});




