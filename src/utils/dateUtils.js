const formatDate = date => {
  let splitedYear = date.split(" ");
  let [year, month, day] = splitedYear[0].split("-");
  let [hour, minutes] = splitedYear[1].split(":");

  return `${day}/${month}/${year} (${hour}h${minutes})`;
};

export { formatDate };
