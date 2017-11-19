import Command from '../structures/command'
import MusicManager from '../utils/musicManager'
import Song from '../structures/song'

export default class Add extends Command {
  static info = {
    name: 'add',
    triggers: ['add', 'a'],
    description: 'adds a song to the queue',
  }

  run(message, parts) {
    const mgr = new MusicManager(
      this.client,
      message.guild.channels.filter(x => x.type === 'voice').first(),
    )

    mgr.add(new Song('https://www.youtube.com/watch?v=xy6BZCyCV0g'))
    mgr.play()
  }
}