const idHead = document.getElementById("idHead");
const idBody = document.getElementById("idBody");
const btncol = document.getElementById("addcol");
const btnrow = document.getElementById("addrow");

// create input fun
const tableState = {
  header: [],
  body:[]
}

function creatTableUI(){
    const header = tableState.header;
    const body = tableState.body;
    idHead.innerHTML = ""
    idBody.innerHTML = ""
    for (let i = 0; i < header.length; i++) {
        const createElement = document.createElement(header[i].elementType);
        createElement.innerText = header[i].columnName;
        idHead.append(createElement)
    }


    body.forEach((tablerow) => {
        const {elementTypetr ,cellDetails} = tablerow;
        const tr = document.createElement(elementTypetr)
        cellDetails.forEach((cellElement) =>
        {
            const tdElement = document.createElement(cellElement.elementType);
            tdElement.innerText= cellElement.columnName;
            tr.append(tdElement)
        })
        idBody.append(tr);
    })
}
creatTableUI()


const addNewColumn = () =>{
  const columnData = {elementType: "th",  columnName: "A",  order: 1,  sort: "undefind"}
    tableState.header.push(columnData)
    tableState.body.forEach((rowObj,idx) =>{
      rowObj.cellDetails.push({ elementType: "td",
      columnName: "a3",
      rowNumber: 1,
      cellDetails: "",})
    })
    creatTableUI(tableState)
}
const addNewRow = (rowData) => {  
  tableState.body.push(rowData)
  creatTableUI(tableState)

}














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
  // const newCol = document.createElement("th");
  // newCol.append(createInput("text", "text here "));
  // // console.log(newCol)
  // idHead.append(newCol);
  // console.log(idBody.childElementCount);
  // if (idBody.childElementCount) {
  //   for (const elem of idBody.children) {
  //     const td = document.createElement("td");
  //     elem.appendChild(td);
  //     td.append(createInput("search", "Searching "));
  //   }
  // }
  addNewColumn()
}


// Row ke liye ye wala krna he  
// number of rows bata raha he -- body.length
function addRowBtn() {
  // const newRow = document.createElement("tr");

  // for (let i = 0; i < idHead.childElementCount; i++) {
  //   // console.log('loop running')
  //   let cellDetails = document.createElement("td");
  //   createInput("text", "hhhhhh");
  //   cellDetails.append(createInput("text", "text here "));
  //   // console.log(cellDetails)
  //   newRow.append(cellDetails);
  // }
  // idBody.append(newRow);
  addNewRow({
    elementTypetr: "tr",
    rowNumber: 3,
    cellDetails: [
      {
        elementType: "td",
        columnName: "a3",
        rowNumber: 1,
        cellDetails: "",
      }]
  })
}
// tableState.body.cellDetails.push





// ye ek din phele ka  logic he 
    // tableState.body.forEach((tableRow,idx) =>{
    //     const{cellDetails = [] } = tableRow;
    //     cellDetails.push({
    //       elementType : "td",
    //       columnName: columnData.columnName,
    //       rowNumber: idx,
    //       cellDetails : cell ${columnData,columnName}${idx},
    //     })
    // })