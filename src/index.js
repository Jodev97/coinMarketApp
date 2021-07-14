const express= require('express')
const CoinGecko = require('coingecko-api')
const exphbs  = require('express-handlebars')
const path = require('path')

const app =express()
const coinGeckoClient = new CoinGecko();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    helpers: require('./lib/helpers')
}))
app.set('view engine', '.hbs');

app.get('/',async(req,res,next)=>{
    
    const params = {
        order: CoinGecko.ORDER.MARKET_CAP_DESC
     };
    const result = await coinGeckoClient.coins.markets({params});
    //console.log(result)
    res.render('home',result)
    
})

app.listen(3000,()=>{
    console.log('server on port:3000')
})