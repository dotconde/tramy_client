export function pipelineToReactTrelloData(pipeline = []) {
  let lanesArray = [];
  let lanes = pipeline?.stages || [];
  lanes.map((laneObject) =>
    lanesArray.push({
      id: laneObject.id,
      title: laneObject?.attributes?.name,
      cards: leadsToCardsArray(laneObject?.attributes?.leads),
    })
  );
  let parsedData = { lanes: lanesArray };
  return parsedData;
}

function leadsToCardsArray(leads) {
  let cardsArray = [];
  leads.map((leadObject) =>
    cardsArray.push({
      id: leadObject?.id,
      title: leadObject?.attributes?.name,
      description: leadObject?.attributes?.phone,
      label: leadObject?.attributes?.attended_by?.first_name,
    })
  );
  return cardsArray;
}
