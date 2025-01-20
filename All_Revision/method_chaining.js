
function getMoney() {
    let totalAmount = 0;
    return {
        crore: function (val) {
            totalAmount += (val * 10000000)
            return this;
        },
        lacs: function (val) {
            totalAmount += (val * 100000)
            return this;
        },
        thousand: function (val) {
            totalAmount += (val * 1000)
            return this;
        },
        value: function () {
            return totalAmount;
        }
    }
}


const result = getMoney().crore(1).lacs(20).thousand(2).value();

console.log('result', result) // 1,20,02,000