export default NounsLogic = () => {
    createNoun = () => {
      return ['create', 'Noun'];
    };
  
    readNoun = (id) => {
      return ['read', 'Noun id = ', id];
    };
  
    updateNoun = (id) => {
      return ['update', 'Noun id = ', id];
    };
  
    deleteNoun = (id) => {
      return ['delete', 'Noun id = ', id];
    };
  
    listNouns = () => {
      const data = [
        {
          "id": "1",
          "firstname": "Robert Downey Jr.",
          "lastname": "Jan",
          "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
        },
        {
          "id": "2",
          "firstname": "Colin",
          "lastname": "Karlas",
          "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
        },
        {
          "id": "3",
          "firstname": "Morris Kushwaha",
          "lastname": "Smith",
          "photo": "https://androidwave.com/wp-content/uploads/2021/02/android-wave.jpeg"
        }
      ];
      return data;
    }
    return {
      createNoun,
      readNoun,
      updateNoun,
      deleteNoun,
      listNouns,
    }
};
  