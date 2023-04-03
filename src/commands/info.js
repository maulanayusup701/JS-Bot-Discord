const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'info',
    desciption: "about bot/user",
    execute(msg, args, client) {
        if (args[1]) {
            if (args[1] === "bot") {
                const embedBot = new MessageEmbed()
                    .setTitle(client.user.username)
                    .setColor(0xffffff)
                    .setDescription(`Sebuah bot yang digunakan untuk mengelola\nserver dan member di server Discord ${msg.guild.name}`)
                    .setThumbnail(client.user.displayAvatarURL())
                    .addField("Developer", "Maulana Yusup")
                    .addField("Version", config.version)
                    .setFooter(`
                    Comment use by : ${msg.author.username}`,
                        msg.author.displayAvatarURL())
                msg.channel.send({ embeds: [embedBot] })
            } else if (args[1] === "user") {
                let mention = msg.mentions.users.first() || msg.author;
                let member = msg.guild.members.cache.get(mention.id);
                let roles = "";
                let dateJoin = new Date(member.joinedTimestamp).toLocaleString();
                member._roles.forEach((id) => {
                    roles += `@${msg.guild.roles.cache.get(id).name} `;
                })
                const embedUser = new MessageEmbed()
                    .setTitle(`${member.user.username} Infomation`)
                    .addField("User id", member.user.id, true)
                    .addField("Nickname", (member.nickname) ? member.nickname : "-", true)
                    .addField("Roles", (roles) ? roles : "-")
                    .addField("Join to server at", dateJoin)
                    .setColor(0xffffff)
                    .setThumbnail(member.user.displayAvatarURL())
                    .setFooter(`
                        Comment use by : ${msg.author.username}`,
                        msg.author.displayAvatarURL())
                msg.channel.send({ embeds: [embedUser] });
            }
        } else {
            msg.channel.send("masukan argument yang ke-2 bot/user")
        }
    },
};