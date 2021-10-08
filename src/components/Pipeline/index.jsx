import React, { useState } from "react";
import "./styles.css";
import Board from "react-trello";
import Loader from "../UI/Loader";
import useConfig from "../../hooks/useConfig";
import { useQuery, useMutation } from "react-query";
import { updateLead } from "../../services/api/lead";
import { getPipelines } from "../../services/api/pipeline";
import { getPipelineStageLeads } from "../../services/api/pipeline";
import { pipelineToReactTrelloData } from "../../helpers/formatters/react-trello";

function Pipeline() {
  // Config
  const { config } = useConfig();

  // Load list of pipelines
  const { data: pipelines } = useQuery(
    "pipelines",
    async () => getPipelines(config),
    {
      retry: 3,
    }
  );

  const pipelineId = pipelines ? pipelines[0]?.id : undefined;

  // Then get default (or selected) pipeline
  const { data: currentPipeline, isLoading: isLoadingCurrentPipeline } =
    useQuery(
      ["pipeline", pipelineId],
      async () => getPipelineStageLeads(pipelineId, config),
      {
        retry: 3,
        enabled: Boolean(pipelineId),
      }
    );

  // States when dragging cards
  // const [draggedLeadId, setDraggedLeadId] = useState(undefined);
  // // const [laneId, setLaneId] = useState(undefined);

  // const { mutate } = useMutation(
  //   async (updatedLead) => updateLead(draggedLeadId, updatedLead, config),
  //   {}
  // );

  // const onCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
  //   // console.log("fromLaneId", fromLaneId);
  //   // console.log("toLaneId", toLaneId);
  //   // console.log("cardId", cardId);
  //   // console.log("index", index);
  //   if (toLaneId && cardId) {
  //     setDraggedLeadId(cardId);
  //     mutate({ stage_id: toLaneId });
  //   }
  // };

  return isLoadingCurrentPipeline ? (
    <Loader />
  ) : (
    <Board
      hideCardDeleteIcon
      data={pipelineToReactTrelloData(currentPipeline)}
      style={{ backgroundColor: "#f5f5f5" }}
      // onCardMoveAcrossLanes={onCardMoveAcrossLanes}
    />
  );
}

export default Pipeline;
