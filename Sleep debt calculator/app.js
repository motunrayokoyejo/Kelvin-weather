const getSleepHours = day => {
  if (day === 'monday'){
    return 8;
  } else if (day === 'tuesday') {
      return 9;
    } else if (day === 'wednesday') {
      return 10;
    } else if (day === 'thursday') {
      return 11;
    } else if (day === 'friday') {
      return 12;
    } else if (day === 'saturday'){
      return 13;
    } else if (day === 'sunday'){
      return 14;
    } else{
      return 'Please input a valid day';
    }
  }

  const getActualSleepHours = () =>
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday');

const getIdealSleepHours = () => {
 idealHours = 7;
 return idealHours * 7;
};

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}
calculateSleepDebt()
