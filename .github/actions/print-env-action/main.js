const core = require('@actions/core');

async function run() {
  try {
    core.startGroup("Environments");

    Object.keys(process.env).forEach( function(name) {
      core.info(name + "=" + process.env[name]);
    });

    core.endGroup();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
