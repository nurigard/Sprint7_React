/*import React from "react";

function Linia(props){
    return (
            <div>
                {props.dades}
            </div>
    );
}

export default Linia;
*/

import { DivLinia } from "../../components/linia/Linia.styled";



// En ES6

const Linia = ({dades}) => <DivLinia>{dades}</DivLinia>;

export default Linia;
