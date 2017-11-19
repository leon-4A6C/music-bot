import Command from '../structures/command'

export default class Play extends Command {
  static info = {
    name: 'play',
    triggers: ['play', 'p'],
    description: 'plays the songs of the queue',
  }

  run(message, parts, addons) {
    const musicManager = addons.serverManager.get(message.guild.id).musicManager
    musicManager.play()
  }
}
