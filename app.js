const geocode =  require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
//Coment
console.log('First step')
if(!address)
{
    console.log('Invalid address')
}
else
{
    geocode('mira road',(error,{latitude,longitude})=>{
    if(error)
    {
        return console.log('Error! occured:'+error)
    }

    forecast(latitude,longitude, (ferror, {summary,temperature}={}) => {
        if(ferror)
        {
            return console.log('Error! Occured:'+ferror);
        }
        console.log('Final output Data', summary +':'+temperature)
    })
    })
}
