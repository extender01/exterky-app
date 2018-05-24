import React from "react";
import SeznamVysetreni from "./SeznamVysetreni";
import VysetreniFiltrovaciInput from "./VysetreniFiltrovaciInput";




const VysetreniDashboardPage = () => (
    <div>
        <h4>Tohle je dashboard</h4>
        <VysetreniFiltrovaciInput />
        <SeznamVysetreni />
    </div>
);

export default VysetreniDashboardPage;