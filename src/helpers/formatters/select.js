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

function stagesToArrayOptions(stages = []) {
  let arrayOptions = [];
  stages.map((stageObject) =>
    arrayOptions.push({ label: stageObject?.name, value: stageObject?.id })
  );
  return arrayOptions;
}
