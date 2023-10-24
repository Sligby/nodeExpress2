 function timeWord(time){
    const [hours , minutes] = time.split(':')

    const hoursWords = [
        'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'noon', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
      ];
    
      const minutesWords = [
        'oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        'twenty'
      ];
    
      // Convert hours to words
      let hourWord;
      if (hours === '00' || hours === '12') {
        hourWord = hours === '00' ? 'midnight' : 'noon';
      } else {
        const hourNum = parseInt(hours, 10);
        const ampm = hourNum < 12 ? 'am' : 'pm';
        hourWord = hoursWords[hourNum % 12] + ' ' + (hourNum % 12 === 0 ? 'twelve' : '') + ' ' + ampm;
      }
    
      // Convert minutes to words
      let minuteWord;
      if (minutes === '00') {
        minuteWord = '';
      } else if (minutes.startsWith('0')) {
        minuteWord = minutesWords[parseInt(minutes[1], 10)];
      } else if (minutes[0] === '1') {
        minuteWord = minutesWords[10 + parseInt(minutes[1], 10)];
      } else {
        minuteWord = minutesWords[20] + ' ' + minutesWords[parseInt(minutes[1], 10)];
      }
      console.log(`${hourWord} ${minuteWord}`.trim())
      return `${hourWord} ${minuteWord}`.trim();
    }
    
