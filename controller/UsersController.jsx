import { createContext, useContext } from "react";
import UsersLogic from "../model/UsersLogic";
import { useReducer } from 'react';
import { useNavigation } from "@react-navigation/native";


export const UsersContext = createContext();

const UsersController = ({ children }) => {
    const initialState = {
        user: {
            "id": null,
            "name": null,
            "username": null,
            "email": null,
            "address": {
                "street": null,
                "suite": null,
                "city": null,
                "zipcode": null,
                "geo": {
                    "lat": null,
                    "lng": null
                }
            },
            "phone": null,
            "website": null,
            "company": {
                "name": null,
                "catchPhrase": null,
                "bs": null
            }
        },
        users: []
    };

    const navigation = useNavigation();
    const UsersLogicInstance = UsersLogic();

    const collectListUsersView = () => {
        const result = UsersLogicInstance.listAllUsers();
        const sorted = result.sort((obj) => {
            if (obj.name < obj.name) {
                return -1;
            }
            if (obj.name > obj.name) {
                return 1;
            }
            return 0;
        });
        console.log("collectListUsersView non sorted", result);
        console.log("collectListUsersView sorted", sorted);
        return sorted;
    }

    const collectListUser = (state, payload) => {
        if (!payload && !payload.id) return [];
        const result = state.users.filter((obj) => obj.id === payload.id);
        //const result = UsersLogicInstance.readUser(payload.id);
        return result;
    }
    ``
    const collectUpdatesUsers = (state, updatedUser) => {
        const oldUsers = state.users;
        //beheerder van de bak model, UsersModel die beheert dit niet
        const newUsersObject = oldUsers.map((obj) =>
            obj.id === updatedUser.id ?
                {
                    ...obj,
                    name: updatedUser.name,
                    phone: updatedUser.phone,
                    username: updatedUser.username,
                    email: updatedUser.email,
                } : obj
        );
        return newUsersObject;
    }

    const handleRequest = (state, action) => {
        switch (action.type) {
            case "LISTUSERS":
                const list = collectListUsersView();
                navigation.navigate("ListUsersView");
                return { ...state, users: list }
            case "READUSER":
                const payload = action.payload;
                const user = collectListUser(state, payload);
                navigation.navigate("CollectReadUser");
                return { ...state, user: user }
            case "COLLECTUPDATEUSER":
                const collectUser = action.payload.user;
                navigation.navigate("CollectUpdateUser");
                return { ...state, user: collectUser }
            case "UPDATEUSER":
                const updatedUser = action.payload.user;
                navigation.navigate("ListUsersView");
                const newUsers = collectUpdatesUsers(state, updatedUser);
                return { ...state, users: newUsers }

            default:
                return state
        }
    }

    //dispatches zijn de cases in de switch, met die actie verander ik de component.
    const [state, dispatch] = useReducer(handleRequest, initialState);

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
}

export { UsersController };

export const useUsersContext = () => {
    return useContext(UsersContext);
}
