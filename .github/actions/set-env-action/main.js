const core = require('@actions/core');

async function run() {
  try {
      const envs = core.getInput("envs");
      console.infoe(envs);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
