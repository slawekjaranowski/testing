const core = require('@actions/core');

const job = require('./job');

async function run() {
  try {

    job.run();

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
