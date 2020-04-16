const path = require("path")
const merge = require ('webpack-merge');
const baseConfig =("./webpack.base.js")
const config ={
    //Inform webpack that we are building a bundle 
    // for nodeJS, rather than for the browser
    //target:"browser",

    ///////tellwebpack root file of server application

    entry:"./src/client/client.js",
    
    /////tellwebpack where output will put on the file
    /// that is generated
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'public')
    }

    /////////tell webpack to run babel on every file it runs through
   
}

module.exports = merge(baseConfig,config)