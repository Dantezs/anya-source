
const { ShardingManager } = require("discord.js");
  manager = new ShardingManager(`./index.js`, {
    totalShards: 1,
    respawn: 1,
        token: process.env.token
  });

manager.on("shardCreate", shard => {
    // Listeing for the ready event on shard.
  manager.spawn()
    shard.on("ready", () => {
        console.log(`[DEBUG/SHARD] Shard ${shard.id} connected to Discord's Gateway.`)
        // Sending the data to the shard.
        shard.send({type: "shardId", data: {shardId: shard.id}});
    });
});