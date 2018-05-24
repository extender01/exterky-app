//PRIDAT ACTION NA FILTROVANI NAZVU

export const filtrovatText = (text = "") => ({
    type: "FILTROVAT_TEXT",
    text
});
                        //parametrem je string "a" nebo "z"
export const serazeni = (razeni = "a") => ({
    type: "SERAZENI",
    razeni
});