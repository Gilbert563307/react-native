import { StyleSheet } from 'react-native';

const ListsStyle = StyleSheet.create({
  listcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
   },
  listlead: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'red',
  },
  listtextcontainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
    marginLeft: 16,
  },
  listhead: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listtext: {
    fontSize: 12,
  },
  listtrail: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },

  button: {
    borderRadius: "3px",
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default ListsStyle;