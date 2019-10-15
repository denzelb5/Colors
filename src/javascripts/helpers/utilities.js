const printToDom = (toPrint, divId) => {
  $(`#${divId}`).html(toPrint);
};

export default { printToDom };
