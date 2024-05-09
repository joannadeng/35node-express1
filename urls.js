const fs = require('fs')
const process = require('process')
const axios = require('axios')


function readURL(path) {
    fs.readFile(path,'utf8',(err,data) => {
        if (err) {
            console.log(`Error: ${err}`)
            process.exit(1)
        }
        let dataArr = data.split('\n')
        dataArr = dataArr.slice(0,dataArr.length - 1)
        for(let url of dataArr) {
            url = new URL(url)
            readURLPage(url)
        }
        // console.log(dataArr)
    })
}

async function readURLPage(url) {
    try {
        let res = await axios.get(url)
        // console.log(res)
        fs.writeFile(`${url.hostname}`,res.data,'utf8', (err)=> {
            if(err){
                console.log(`Couldn't download ${url}`)
                process.exit(1)
            }
            console.log(`Wrote to ${url.hostname}`)
            // console.log(url.hostname)
        })
    }catch(err){
        console.log(`Couldn't download ${url}`)
        // console.log(err)
    }
}

readURL(process.argv[2])