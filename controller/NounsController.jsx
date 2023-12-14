import { View } from 'react-native';
import { createContext, useContext, useReducer } from 'react';
import NounsLogic from '../model/NounsLogic';
import { useNavigation } from '@react-navigation/native';
import { initialNouns } from '../model/InitialNouns';



export const NounsContext = createContext();

//... old array destructen and make a new array with the new value added in
const NounsController = ({ children }) => {

    const navigation = useNavigation();
    const { createNoun, updateNoun, deleteNoun, listNouns } = NounsLogic();

    const collectCreateNoun = () => {
        const result = createNoun();
        console.log("collectCreateNoun", result);
        return result;
    };

    const collectReadNoun = (state, id) => {
        const result = readNoun(id, state.nouns);
        console.log("collectReadNoun", result);
        return result;
    };

    const collectUpdateNoun = (id, noun, nouns) => {
        const result = updateNoun(id, noun, nouns);
        console.log("collectUpdateNoun", result);
        return result;
    };

    const collectDeleteNoun = (id, nouns) => {
        const result = deleteNoun(id, nouns);
        console.log("collectDeleteNoun", result);
        return result;
    };

    const collectListNounsView = (nouns) => {
        const result = listNouns(nouns);
        console.log("getting data from the nounslogic instace", result);
        return result;
    };

    const handleRequest = (state, action) => {
        switch (action.type) {
            case 'CREATENOUN':
                if (action.payload) {
                    return { ...state, nouns: [...state.nouns, action.payload] };
                }
                create = collectCreateNoun();
                navigation.navigate("CreateNounView");
                return { ...state, currentScreen: "CreateNounView", message: "Create your noun" };
            case 'READNOUN':
                console.log("collectReadNoun triggerd", action)
                read = collectReadNoun(state, action.payload.id);
                navigation.navigate("ReadNounView");
                return { ...state, currentScreen: "Read noun", noun: read };
            case 'UPDATENOUN':
                if (action.sub === "updatenoun") {
                    const updatedNouns = collectUpdateNoun(action.payload.id, action.payload, state.nouns);
                    navigation.navigate("ListNounsView");
                    console.log(`i am here in update noun`)
                    return {
                        ...state,
                        nouns: updatedNouns,
                        message: "Updated your noun",
                    }
                } else {
                    console.log("collectUpdateNoun triggerd", action);
                    navigation.navigate("UpdateNounView");
                    return { ...state, currentScreen: "Read noun", noun: action.payload };
                }

            case 'DELETENOUN':
                console.log("collectDeleteNoun triggerd", action);
                let updatedNouns = collectDeleteNoun(action.payload.id, state.nouns);
                navigation.navigate("ListNounsView");
                return { ...state, currentScreen: "List nouns", nouns: updatedNouns, message: "Deleted your noun" };
            case 'LISTNOUN':
                navigation.navigate("ListNounsView");
                const list = collectListNounsView(state.nouns);
                return { ...state, currentScreen: "ListNounsView", nouns: list }
            default:
                return state;

        }
    };

    //dispatches zijn de cases in de switch, met die actie verander ik de component.
    const [state, dispatch] = useReducer(handleRequest, initialNouns);

    return (
        <NounsContext.Provider value={{ state, dispatch }}>
            {children}
        </NounsContext.Provider>
    );
};

//We export this file, with {} because otherwise it will not be found. when importing without {}.
export { NounsController };

export const useNounsContext = () => {
    return useContext(NounsContext);
}
