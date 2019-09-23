const core = require('@actions/core');

async function run() {
  try {
      const name = core.getInput("name");
      const value = core.getInput("value");
      core.exportVariable(name, value);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
