const roles = {
    1: {
      routes: [ "Main", "Home", "Todo", "Banlist"],
    }, // admin

    2: {
      routes: ["Main","Home", "Banlist"],
    }, // moderator

    3: {
      routes: ["Main", "Banlist"],
    }, // user
 }

export default roles
