const menus = {
    main: `
    convertTextToJson [command] <options>

    parse .............. show weather for today
    version ............ show package version
    help ............... show help menu for a command`,

    parse: `
    convertTextToJson parse <options>

    --filepath, -l ..... the filepath to the txt file 
    --output, -o ... the file path of the output json file`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

    console.log(menus[subCmd] || menus.main)
}
