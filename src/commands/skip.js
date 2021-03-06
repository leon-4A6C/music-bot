import Command from '../structures/command'

export default class Skip extends Command {
  static info = {
    name: 'skip',
    triggers: ['skip', 's'],
    description: 'skips to the next song',
  }

  run(message, parts, addons) {
    const musicManager = message.guild.musicManager
    musicManager.skip()
  }
}
