import React from "react";
import { Link } from "react-router-dom";



const NoAccess = () => (
    <div>
        Nemas pristup, prihlas se - <Link to="/login" replace={true} >Login</Link>
    </div>
);

export default NoAccess;