module.exports={
        //////tesll webpack to run babel to rule
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
