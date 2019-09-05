const Discord = require('discord.js');
const token = 'NjE0ODg3NzA2ODk5Nzc1NDg4.XWGA8Q.CI12ksg3_ejhtMpdqRkHavNUinA';
const client = new Discord.Client();

client.on('message', msg => {

  if (msg.content === 'wc!help') {
    const embed = new Discord.RichEmbed()
      .setTitle('**Help**')
      // .setDescription('')
      .addField('wc!youtube', 'This command will give you a link to our YouTube channel!', true)
      .addField('wc!twitter', 'This command will give you a link to our Twitter account!', true)
      .addField('wc!patreon', 'This command will give you a link to our Patreon!', true)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#1C9DEB')
    msg.channel.send(embed);
  }

  if (msg.content === 'wc!youtube') {
    const embed = new Discord.RichEmbed()
      .setTitle('YouTube')
      .setDescription('https://www.youtube.com/channel/UC_5zHZ-rVXBwMUrQEkV9UBA')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#FF0000')
    msg.channel.send(embed);
  }

  if (msg.content === 'wc!reddit') {
    const embed = new Discord.RichEmbed()
      .setTitle('Reddit')
      .setDescription('https://www.reddit.com/user/WildcowMC')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#FF0000')
    msg.channel.send(embed);
  }

    if (msg.content === 'wc!twitter') {
      const embed = new Discord.RichEmbed()
        .setTitle('Twitter')
        .setDescription('https://twitter.com/WildcowMC')
        // .addField('Field Name1', 'Field Value1', true)
        // .addField('Field Name2', 'Field Value2', true)
        // .addField('Field Name3', 'Field Value3', false)
        // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
        .setColor('#1C9DEB')
      msg.channel.send(embed);
    }

    if (msg.content === 'wc!patreon') {
      const embed = new Discord.RichEmbed()
        .setTitle('Patreon')
        .setDescription('https://patreon.com/WildcowMC')
        // .addField('Field Name1', 'Field Value1', true)
        // .addField('Field Name2', 'Field Value2', true)
        // .addField('Field Name3', 'Field Value3', false)
        // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
        .setColor('#F16452')
      msg.channel.send(embed);
    }
});

client.on('ready', () => {
  console.log('Bot is now connected');
  client.user.setActivity('wc!help')
});


client.login(token);
