const store = require("./database/store/dataStore");
const utils = require("./utils/writeFile");

store.readFile((employee) => {
  utils.writeFile("data.json", JSON.stringify(employee));
});
