module.exports = {
    name: "ready",
    description: "bot ready",
    execute(client) {
        console.log(`bot online`);
        console.log(`${client.user.tag}!`);
    }
}