
function dateFormat(time, format = 'DD/MM/YYYY') {
  return moment(time).format(format);
}
// const dateFormat = (time, format = 'DD/MM/YYYY') => {
//   return moment.unix(time).format(format);
// };
