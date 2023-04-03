module.exports = {
    name: 'remainder',
    desciption: "ini merupakan command untuk remainder task",
    execute(msg, args, client) {
        const config = require("../utils/permissions.json")
        if (msg.channel.id === config.remainder) {
            let set = msg.content.split(" | ");
            let time
            //remainder  |1s| pesan |
            if (set[1]) {
                if (set[1].includes("s")) {
                    time = 1000 * parseInt(set[1].replace("s", ""));
                } else if (set[1].includes("m")) {
                    time = 1000 * 60 * parseInt(set[1].replace("m", ""));
                } else if (set[1].includes("h")) {
                    time = 1000 * 60 * 60 * parseInt(set[1].replace("h", ""));
                }
            } else {
                msg.reply("Set time remainder")
            }
            if (set[2]) {
                setTimeout(() => {
                    msg.delete()
                }, 1000);
                msg.channel.send(`Set remainder for ${msg.author}`);
                setTimeout(() => {
                    msg.channel.send(`${msg.author}, ${set[2]}`);
                }, time);
            } else {
                msg.reply("Set message remainder")
            }
        } else {
            const channel = client.channels.cache.find(
                (ch) => ch.id === config.remainder
            );
            msg.channel.send(`Set remainder at  ${channel}`)
        }
    },
};