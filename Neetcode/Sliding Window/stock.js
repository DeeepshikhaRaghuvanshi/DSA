// Best time to buy and sell stocks

var maxProfit = function (prices) {

    let min = prices[0]
    let profit = 0
    for (let i = 0; i < prices.length; i++) {

        min = Math.min(min, prices[i])

        // if(prices[i]-min>profit)
        //     profit = prices[i]-min

        profit = Math.max(profit, prices[i] - min)
    }
    return profit

};