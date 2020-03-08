class Normalizer {
  m = 'минута';
  mm = 'минуты';
  mmm = 'минут';
  fakeMinutes = {
    11: this.mmm, 12: this.mmm, 13: this.mmm,
    14:this. mmm, 15: this.mmm, 16: this.mmm,
    17: this.mmm, 18: this.mmm, 19: this.mmm,
  };
  
  minutesNormalizer(number) {
    const { m, mm, mmm, fakeMinutes } = this;
    const isFakeMinutesNumber = Object.keys(fakeMinutes).some(num => number.toString().includes(num));
    
    if (fakeMinutes[number] || isFakeMinutesNumber) {
      return mmm;
    }
    
    const minutes = { 1: m,  2: mm,  3: mm,  4: mm,  5: mmm,  6: mmm,  7: mmm,  8: mmm,  9: mmm,  0: mmm };
    
    const numberToArray = number.toString().split('');
    const lastSymbol = numberToArray[numberToArray.length - 1];
    
    return minutes[lastSymbol];
}
}

module.exports = new Normalizer();
