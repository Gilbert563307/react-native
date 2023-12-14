export default NounsLogic = () => {
    createNoun = () => {
      return ['create', 'Noun'];
    };
  
    readNoun = (id, nouns) => {
      const user = nouns.filter((obj) => obj.id === id);
        if (user) {
            return user[0];
        }
        return {};
    };
  
    updateNoun = ( id, updatedNoun, nouns) => {
      const updatedNouns = nouns.map((noun) => (
        noun.id === id ? updatedNoun : noun 
      ));
      return updatedNouns;
    };
  
    deleteNoun = (id, nouns) => {
      const updatedNouns = nouns.filter((noun) => (
        noun.id != id
      ));
      return updatedNouns;
    };
  
    listNouns = (nouns) => {
      return nouns;
    }
    return {
      createNoun,
      readNoun,
      updateNoun,
      deleteNoun,
      listNouns,
    }
};
  