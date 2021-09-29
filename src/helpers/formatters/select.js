// Stages
function stagesToArrayOptions(stages = []) {
  let arrayOptions = [];
  stages.map((stageObject) =>
    arrayOptions.push({ label: stageObject?.name, value: stageObject?.id })
  );
  return arrayOptions;
}

export function pipelinesToOptions(pipelines = []) {
  let output = [];
  pipelines.map((pipeline) =>
    output.push({
      label: pipeline?.attributes?.name,
      options: stagesToArrayOptions(pipeline?.attributes?.stages),
    })
  );
  return output;
}

// Accounts
export function accountToOptions(accounts = []) {
  let arrayOptions = [];
  accounts.map((account) =>
    arrayOptions.push({
      label: account?.attributes?.full_name || account?.attributes?.email,
      value: account?.attributes?.id,
    })
  );
  return arrayOptions;
}
