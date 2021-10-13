import { truncate } from "./message";

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
      title: truncate(leadObject?.attributes?.name, 15),
      description: leadObject?.attributes?.phone,
      label: attendedByFormat(leadObject?.attributes?.attended_by),
    })
  );
  return cardsArray;
}

export function attendedByFormat(attendedByObject) {
  if (attendedByObject === null) {
    return "Sin asignar";
  }
  return truncate(
    `${attendedByObject?.first_name} ${attendedByObject?.last_name}`,
    15
  );
}
