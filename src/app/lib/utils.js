export const ITEMS_PER_PAGE = 3;

export const DateFormater = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(date);
  return formattedDate;
};
