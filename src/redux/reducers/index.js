import detskiyMir from "../../data/detskiy-mir";
import transport from "../../data/transport";
import animals from "../../data/animals";
import changes from "../../data/changes";
import elektrs from "../../data/elektrs";
import estate from "../../data/estate";
import hobbis from "../../data/hobbis";
import services from "../../data/serveces";
import work from "../../data/work";

const initialState = {
    data : {
        "detskiy-mir" : detskiyMir,
         transport: transport,
         animals: animals,
         changes: changes,
         elektrs: elektrs,
         estate: estate,
         hobbis: hobbis,
         services: services,
         work: work,
    },
    theme: "light"
}

const reducer =(state = initialState, action) => {
    switch (action.type) {
        case "TOOGLE_THEME":
            return {...state,
            theme: state.theme === "dark" ? "light" : "dark",
        };
        default: return state;
    
    }
}

export default reducer;