const fs = require('fs');
const error = require('../utils/error');

async function parseToJsonFile(args) {
    fs.readFile(args.filepath, 'utf8', (err, data) => {
        if (err) {
            throw new Error(err);
        }

        const arr = data.toString()
            .replace(/\r\n/g, '\n')
            .split('\n').filter(e => e);

        fs.writeFile(args.output, JSON.stringify(arr), 'utf8', (err) => {
            if (err) {
                throw new Error(err);
            }
        });
    });
}

module.exports = async (args) => {
    const FILE_PATH = args.filepath || args.f;
    const OUTPUT_PATH = args.output || args.o;

    if (!FILE_PATH) {
        error('Error: Please provide a file path parameter.', true);
        return;
    }

    if (!OUTPUT_PATH) {
        error('Error: Please provide a output path parameter.', true);
        return;
    }

    if (FILE_PATH === true) {
        error('Error: Please provide a file path value.', true);
        return;
    }

    if (OUTPUT_PATH === true) {
        error('Error: Please provide a output path value.', true);
        return;
    }

    await parseToJsonFile(args);
}
