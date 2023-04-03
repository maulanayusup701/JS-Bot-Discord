const commands = require("../config/commadHandler");
const prefixes = ["!", "/"];
module.exports = {
    name: "messageCreate",
    description: "bot Message",
    execute(msg, client) {
        if (msg.author.bot) return
        let args = "";
        prefixes.forEach((prefix) => {
            if (msg.content.startsWith(prefix)) {
                args = msg.content.substring(prefix.length).split(" ");
            }
        })
        if (!args) return;
        commands.get(args[0]).execute(msg, args, client);
    }
}