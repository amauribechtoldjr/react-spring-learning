import api from "../../api/api";

import {
  normalizeSessionsToGrid,
  filterBySearchTerm
} from "./SessionPageLogic";

async function getSessions(userId) {
  let response = await api.get(`${userId}/sessions`);

  return normalizeSessionsToGrid(response.data.data.content);
}

async function getFilteredSessions(userId, searchTerm) {
  const response = await getSessions(userId);

  const data = filterBySearchTerm(response, searchTerm);

  return data;
}

export { getSessions, getFilteredSessions };
