const config = require('./config.json')

const Cluster = require('discord-hybrid-sharding');

const manager = new Cluster.Manager(`${__dirname}/index.js`, {

    totalShards: 2,

    shardsPerClusters: 2,

    totalClusters: 2,

    mode: 'process',

    token: config.token,

});

manager.on('clusterCreate', (cluster) => {

  console.log(`Cluster ${cluster.id} iniciado`)

});

manager.spawn({ timeout: -1 });
