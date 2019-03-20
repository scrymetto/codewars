function formatDuration(seconds) {

    if (seconds === 0) {
        return 'now'
    } else {
        let result = [];
        let tempResult = [];
        let tempMinute = Math.floor(seconds / 60);
        let tempHour = Math.floor(tempMinute / 60);
        let tempDay = Math.floor(tempHour / 24);
        let tempYear = Math.floor(tempDay / 365);
        let tempSecond = seconds - (tempMinute * 60);
        tempMinute -= tempHour * 60;
        tempHour -= tempDay * 24;
        tempDay -= tempYear * 365;
        let year = {
            year: tempYear
        };
        let day = {
            day: tempDay
        };
        let hour = {
            hour: tempHour
        };
        let minute = {
            minute: tempMinute
        };
        let second = {
            second: tempSecond
        };
        tempResult.push(year, day, hour, minute, second);
        tempResult.forEach(el => {
            for (let key in el) {
                if (el[key] !== 0) {
                    if (el[key]>1){
                        result.push(`${el[key]} ${key}s`)
                    } else result.push(`${el[key]} ${key}`)
                }
            }
        });
        if (result.length !== 1) {
            result = result.reduce((previousValue, currentValue, currentIndex) => {
                if (currentIndex !== result.length - 1) {
                    return previousValue + ', ' + currentValue
                } else return previousValue + ' and ' + currentValue
            });
            return result
        } else return (result[0])
    }
}

console.log(formatDuration(3662));