
const idHead = document.getElementById("idHead");
const idBody = document.getElementById("idBody");
const btncol = document.getElementById("addcol");
const btnrow = document.getElementById("addrow");

let tableState = {
  header: [],
  body: [],
};



const createInputElement = (cellType, value) => {
  const inputElement = document.createElement('input');
  inputElement.value = value;

  if (cellType === 'headCell') {
    inputElement.setAttribute('placeholder', 'Column Name');
  } else if (cellType === 'bodyCell') {
    inputElement.setAttribute('placeholder', 'Row Data');
  }
  inputElement.setAttribute('type', 'text');
  return inputElement;
};
c

const creatTableUI = (tableData) => {
  const { header, body = [] } = tableData;
  idHead.innerHTML = '';
  idBody.innerHTML = '';

  //   For creating table column
  for (let i = 0; i < header.length; i++) {
    const thElement = document.createElement(header[i].elementType);
    const inputElement = createInputElement('headCell', header[i].columnName);
    thElement.append(inputElement);
    idHead.append(thElement);
  }
console.log(body);
  //   Creating table body
  body.forEach((tableRow) => {
    const { elementType, columnDetails } = tableRow;
    const trElement = document.createElement(elementType);
    console.log(columnDetails)

    columnDetails.forEach((cellElement) => {
      const tdElement = document.createElement(cellElement.elementType);
      const inputElement = createInputElement(
        'bodyCell',
        cellElement.cellValue
      );
      tdElement.append(inputElement);
      trElement.append(tdElement);
    });

    idBody.append(trElement);
  });
};

// rowno-colname

const addNewColumn = () => {
  const columnData = {
    elementType: "th",
    columnNumber: tableState.header.length,
    order: 1,
    sort: "",
    // tableState.header.length
  };
  tableState.header.push(columnData);
  tableState.body.forEach((rowObj, idx) => {
    rowObj.columnDetails.push({
      elementType: "td",
      columnName: "c",
      rowNumber: tableState.body.length+1,
      columnDetails: 1,
      cellValue: 'row'
    });
  });
  updateTableData(tableState)
  creatTableUI(tableState);
};
const addNewRow = (rowData) => {
  console.log(rowData)
  tableState.header.forEach((headerObject) => {
    rowData.columnDetails.push({
      elementType: "td",
      columnNumber: 'idx+1',
      rowNumber: tableState.body.length+1,
      cellValue: 'row'
    });
  });
  tableState.body.push(rowData);
  creatTableUI(tableState);
};

// or ye searching ke liye he
const createInput = (type, placeName) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", placeName);
  console.log(input);
  return input;
};

// column ke liye ye wala krna he
// number of column bata raha he -- header.length
function addColumnBtn() {
  addNewColumn();
}

// Row ke liye ye wala krna he
// number of rows bata raha he -- body.length
function addRowBtn() {
  addNewRow({
    elementType: "tr",
    rowNumber: 3,
    columnDetails: [],
  });
}






