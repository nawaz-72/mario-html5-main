import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = 500
const DEFAULT_HEIGHT = 340

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#ff00ff',
  render: {
    pixelArt: true,
    roundPixels: true,
  },
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 650 },
    },
  },
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
