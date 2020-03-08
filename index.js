const normalizer = require('./normalizer');

class PlayerCreator {
  constructor({ playersLimit, intensity, timerCountdown }) {
    this.players = 0;
    this.playersLimit = playersLimit || 60;
    this.intensity = intensity || 1; // normal speed range: 0.1 - 3
    this.timerCountdown = timerCountdown || 3000;
    this.creationSpeed = 1000 / this.intensity;
    this.predictedTime = null;
  };
  
  createPlayerCreationInterval() {
    const interval = () => {
      setInterval(() => {
        if (this.players === this.playersLimit) {
          clearInterval(interval); // TODO reqursive clearInterval function
        }
    
        this.players++;
        console.log(`creating players: ${this.players}`);
      }, this.creationSpeed);
    };
  
    interval();
  };
  
  createTimerCountdown(interval) {
    return setTimeout(() => {
      this.timePredictor();
    }, interval);
  };
  
  createPlayers() {
    this.createPlayerCreationInterval()
  };
  
  timePredictor() {
    const predictedTime = Math.floor((this.playersLimit / 10) * (this.creationSpeed / 100)) / 60;
    const parseFloatNumber = Number.isInteger(predictedTime) ? predictedTime : predictedTime.toFixed(1);
    
    this.predictedTime =
      `Приблизительное время ожидания ${parseFloatNumber} ${normalizer.minutesNormalizer(parseFloatNumber)}`;
    
    console.log(this.predictedTime);
  };
  
  startGame() {
    this.createPlayers();
    this.createTimerCountdown(this.timerCountdown);
  }
};

const playerCreator = new PlayerCreator({playersLimit: 60, intensity: 1, timerCountdown: 3000});

playerCreator.startGame();

// Добавить родительский клас для вывода статистики
// Расширить PlayerCreator.timePredictor функционалом вычисления времени в зависимости от времени начала вычисления
// Расширить Normalizer для вывода секунд
