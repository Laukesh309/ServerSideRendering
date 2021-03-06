const path = require("path")

module.exports ={
    //Inform webpack that we are building a bundle 
    // for nodeJS, rather than for the browser
    target:"node",

    ///////tellwebpack root file of server application

    entry:"./src/index.js",
    
    /////tellwebpack where output will put on the file
    /// that is generated
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'build')
    },

    /////////tell webpack to run babel on every file it runs through
    module:{
        rules:[{
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                   presets: [
                      'react',
                      'stage-0',
                      ['env',{targets:{browser:['last 2 versions']}}]
                    ]
                }
        }]
    }
}