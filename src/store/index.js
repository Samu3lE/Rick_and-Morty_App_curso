import { createStore } from "vuex";

export default createStore({
    state: {
        characters: [],
        charactersFilter: [],
        pages: [],
    },
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload;
        },
        setCharactersFilter(state, payload) {
            state.charactersFilter = payload;
        },
        setPages(state, payload) {
            state.pages = payload;
        },
    },
    actions: {
        async getCharacters({ commit }, page = "") {
            try {
                console.log(`page: ${page}`);
                const response = await fetch(!page ? "https://rickandmortyapi.com/api/character" : page);
                const data = await response.json();
                console.log(data);
                commit("setCharacters", data.results);
                commit("setCharactersFilter", data.results);
                commit("setPages", data.info);
            } catch (error) {
                console.error(error);
            }
        },
        filterByStatus({ commit, state }, status) {
            const results = state.characters.filter((character) => {
                return character.status.includes(status);
            });
            commit("setCharactersFilter", results);
        },
        filterByName({ commit, state }, name) {
            const formatName = name.toLowerCase();
            const results = state.characters.filter((character) => {
                const characterName = character.name.toLowerCase();

                if (characterName.includes(formatName)) {
                    return character;
                }
            });
            commit("setCharactersFilter", results);
        },
    },
    modules: {},
});