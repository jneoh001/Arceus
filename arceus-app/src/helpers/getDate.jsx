// Get today's date in the format of DD/MM/YYYY
const getDate = () => {
  let today = new Date();
  let year = today.getFullYear().toString().slice(-2);
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let day = today.getDate().toString().padStart(2, "0");
  let formattedDateID = `${day}-${month}-${year}`;
  let formattedDateDisplay = `${day}/${month}/${year}`;
  return [formattedDateID, formattedDateDisplay];
};

export default getDate;
