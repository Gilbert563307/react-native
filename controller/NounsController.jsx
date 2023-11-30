import { View } from 'react-native';
import { createContext, useContext, useReducer } from 'react';
import NounsLogic from '../model/NounsLogic';
import { useNavigation } from '@react-navigation/native';


export const NounsContext = createContext();

//... old array destructen and make a new array with the new value added in
const NounsController = ({ children }) => {

    //initialize a state
    const initialState = {
        noun: '',
        id: '',
        nouns: [],
        result: '',
    };

    const navigation = useNavigation();
    const NounsLogicInstance = NounsLogic();

    const collectCreateNoun = () => {
        const result = NounsLogicInstance.createNoun();
        console.log("collectCreateNoun", result);
        return result;
    };

    const collectReadNoun = (id) => {
        const result = NounsLogicInstance.readNoun(id);
        console.log("collectReadNoun", result);
        return result;
    };

    const collectUpdateNoun = (id) => {
        const result = NounsLogicInstance.updateNoun(id);
        console.log("collectUpdateNoun", result);
        return result;
    };

    const collectDeleteNoun = (id) => {
        const result = NounsLogicInstance.deleteNoun();
        console.log("collectDeleteNoun", result);
        return result;
    };

    const collectListNounsView = (id) => {
        const result = NounsLogicInstance.listNouns();
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
                read = collectReadNoun(action.payload.id);
                navigation.navigate("ReadNounView");
                return { ...state, currentScreen: "Read noun", noun: read };
            case 'UPDATENOUN':
                console.log("collectUpdateNoun triggerd", action)
                update = collectUpdateNoun(action.payload.id);
                navigation.navigate("UpdateNounView");
                return { ...state, currentScreen: "Read noun", noun: update };
            case 'DELETENOUN':
                console.log("collectDeleteNoun triggerd", action)
                _delete = collectDeleteNoun(action.payload.id);
                navigation.navigate("DeleteNounView");
                return { ...state, currentScreen: "Read noun", noun: _delete };
            case 'LISTNOUN':
                navigation.navigate("ListNounsView");
                list = collectListNounsView();
                const dataToSet = state.nouns.length === 0 ? list : state.nouns;
                return  { ...state, currentScreen: "ListNounsView", nouns: dataToSet }
            default:
                return state;

        }
    };

    //dispatches zijn de cases in de switch, met die actie verander ik de component.
    const [state, dispatch] = useReducer(handleRequest, initialState);

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
