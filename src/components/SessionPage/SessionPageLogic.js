import { formatDate } from "../../utils/dateUtils";
import { removeAccent } from "../../utils/textUtils";

const normalizeSessionsToGrid = data => {
  let dataNormalized = [...data];

  dataNormalized = formatDates(dataNormalized);
  return dataNormalized;
};

const formatDates = data => {
  return data.map(item => {
    item.updated_at = formatDate(item.updated_at);
    item.endDateTime = formatDate(item.endDateTime);
    item.created_at = formatDate(item.created_at);
    item.startDateTime = formatDate(item.startDateTime);

    return item;
  });
};

const filterBySearchTerm = (data, searchTerm) => {
  return data.filter(
    item =>
      removeAccent(item.userName)
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) > -1
  );
};

export { normalizeSessionsToGrid, formatDates, filterBySearchTerm };
