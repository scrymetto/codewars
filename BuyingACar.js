function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let result = [];
    let month = 0;
    let capital = 0;
    let percent = percentLossByMonth;
    let priceOld = startPriceOld;
    let priceNew = startPriceNew;
    let savingMoney = 0;
    let sum = 0;
    if (startPriceOld >= startPriceNew) {
        savingMoney = startPriceOld - startPriceNew;
        result.push(month, savingMoney);
        return result
    } else {
        do {
            month++;
            capital += savingperMonth;
            if (month%2 === 0){
                percent += 0.5;
            }
            priceOld = ((100 - percent)/100)*priceOld;
            priceNew = ((100 - percent)/100)*priceNew;
            sum = capital+priceOld
        } while (sum < priceNew);
        savingMoney = Math.round((sum-priceNew)*100/100);
        result.push(month, savingMoney);
        return result
    }
}

console.log(nbMonths(2000, 8000, 1000, 1.5));