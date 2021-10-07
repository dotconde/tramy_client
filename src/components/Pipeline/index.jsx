import React, { useState } from "react";
import "./styles.css";
import Board from "react-trello";
import useConfig from "../../hooks/useConfig";
import { useQuery } from "react-query";
import { getPipelineStageLeads } from "../../services/api/pipeline";
import { pipelineToReactTrelloData } from "../../helpers/formatters/react-trello";

function Pipeline() {
  // Config
  const { config } = useConfig();

  // States
  const [pipelineId, setPipelineId] = useState(1);

  const { data: currentPipeline } = useQuery(
    ["pipeline", pipelineId],
    async () => getPipelineStageLeads(pipelineId, config),
    {
      retry: 3,
    }
  );

  const onCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
    console.log("move across lanes");
    console.log(`fromLaneId: ${fromLaneId}`);
    console.log(`toLaneId: ${toLaneId}`);
    console.log(`cardId: ${cardId}`);
    console.log(`index: ${index}`);
  };

  return (
    <Board
      hideCardDeleteIcon
      data={pipelineToReactTrelloData(currentPipeline)}
      style={{ backgroundColor: "#f5f5f5" }}
      onCardMoveAcrossLanes={onCardMoveAcrossLanes}
    />
  );
}

export default Pipeline;
