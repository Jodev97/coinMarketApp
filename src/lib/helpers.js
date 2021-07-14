const helpers = {};

helpers.toLowerCase = (str) => {
    return str.toUpperCase();
};
helpers.isPositive = (number) => {
    if(number>0){
        return 'class="text-success"';
    }
    return 'class="text-danger"';
   
};

helpers.formatPercent = (number)=>{
    return new Number(number).toFixed(2) + '%'
}

helpers.formatDollar = (number,maximumSignificantDigits)=>{
    return new Intl.NumberFormat(
        'en-US', 
        { 
          style: 'currency', 
          currency: 'USD',
          maximumSignificantDigits
        }).format(number)
}

module.exports = helpers;