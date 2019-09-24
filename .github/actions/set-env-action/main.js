const core = require('@actions/core');

async function run() {
  try {
      const name = core.getInput("name");
      const value = core.getInput("value");
      core.exportVariable(name, value);

      console.info(process.env);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
