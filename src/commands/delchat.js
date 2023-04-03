module.exports = {
    name: 'delchat',
    desciption: "menghapus semua chat",
    execute(msg, args, client) {
        msg.channel.messages.fetch().then(messages => {
            msg.channel.bulkDelete(messages);
        });

    }
}