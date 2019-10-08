const core = require('@actions/core');
const fs = require('fs');

function run() {
    core.info("Starting job");
    if (process.env.GITHUB_EVENT_PATH && fs.existsSync(process.env.GITHUB_EVENT_PATH)) {
        const payload = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, {encoding: 'utf8'}));
        console.log(payload);
    }
}

module.exports = {
    run
}
