import React, { useState } from "react";
import "./styles.css";
import Board from "react-trello";
import Loader from "../UI/Loader";
import useConfig from "../../hooks/useConfig";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { updateLead } from "../../services/api/lead";
import { getPipelines } from "../../services/api/pipeline";
import { getPipelineStageLeads } from "../../services/api/pipeline";
import { pipelineToReactTrelloData } from "../../helpers/formatters/react-trello";

function Pipeline() {
  const queryClient = useQueryClient();

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
        refetchInterval: 10000,
      }
    );

  const { mutate } = useMutation(
    async (updatedLead) =>
      updateLead(updatedLead?.card_id, updatedLead, config),
    {
      onMutate: async (updateLead) => {
        await queryClient.cancelQueries(["pipeline", pipelineId]);

        const previousPipeline = queryClient.getQueryData([
          "pipeline",
          pipelineId,
        ]);

        queryClient.setQueryData(["pipeline", pipelineId], (oldPipeline) => {
          let oldPipelineCopy = oldPipeline;

          oldPipelineCopy.stages
            .find((stage) => stage.id === updateLead.card_details.laneId)
            .attributes.leads.unshift({
              id: updateLead.card_details.id,
              attributes: {
                name: updateLead.card_details.title,
                phone: updateLead.card_details.description,
                attended_by: {
                  first_name: "Tramy",
                  last_name: "Agent",
                },
              },
            });
          return oldPipelineCopy;
        });

        return { previousPipeline };
      },
    }
  );

  // description: "51922252915"
  // id: "57"
  // label: "Yahaira Collado"
  // laneId: "34"
  // title: "Gabriela 🦋"
  const handleDragEnd = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails
  ) => {
    console.log("cardId", cardId);
    console.log("fromLaneId", sourceLaneId);
    console.log("toLaneId", targetLaneId);
    console.log("cardDetails", cardDetails);
    mutate({
      stage_id: targetLaneId,
      card_id: cardId,
      card_details: cardDetails,
    });
  };

  return isLoadingCurrentPipeline ? (
    <Loader />
  ) : (
    <Board
      hideCardDeleteIcon
      data={pipelineToReactTrelloData(currentPipeline)}
      style={{ backgroundColor: "#f5f5f5" }}
      handleDragEnd={handleDragEnd}
    />
  );
}

export default Pipeline;
