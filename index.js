const minimist = require('minimist');
const parse = require('./cmds/parse');
const error = require('./utils/error');
const help = require('./cmds/help');
const version = require('./cmds/version');

function getCommand(args) {
    let cmd = args._[0] || 'help';

    if (args.version || args.v) {
        cmd = 'version';
    }

    if (args.help || args.h) {
        cmd = 'help';
    }

    return cmd;
}
function handleCommand(cmd, args) {
    switch (cmd) {
        case 'parse':
            parse(args);
            break;
        case 'version':
            version(args);
            break;
        case 'help':
            help(args);
            break;
        default:
            error(`"${cmd}" is not a valid command!`, true);
            break;
    }
}

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const cmd = getCommand(args);
    handleCommand(cmd, args);
}
