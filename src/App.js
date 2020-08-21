import React from 'react';
import NavigationMenu from "./component/menu";

function App() {
    return (
        <div className={"app"}>
            <NavigationMenu navigationMap={menuNavigationMap}/>
        </div>
    );
}

const menuNavigationMap = {
    "Client": {
        "Rollover/Consolidate super": null,
        "Rebalance super": null,
        "Salary sacrifice contribution": {
            "Maximise": null,
            "Fixed - regular": null,
            "Custom - one off": {
                "test": null
            }
        },
        "Re - contribution": null,
    },
    "Partner": {
        "SubMenu - 1": null,
        "SubMenu - 2": null,
        "SubMenu - 3": {
            "Option - 1": null,
            "Option - 2": null,
            "Option - 3": null,
        },
    }
}

export default App;
