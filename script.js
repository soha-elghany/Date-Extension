/* global tableau */
let selectedWorksheet
tableau.extensions.initializeAsync().then(() => {
    let dashboard = tableau.extensions.dashboardContent.dashboard;
    selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Historical Trend');
    let fieldName = 'Date, Close';
    //updateFilterRange(selectedWorksheet, fieldName);
  console.log("hello from tableau")
});

// function updateFilterRange(worksheet, fieldName) {
//     let today = new Date();
//     let lastYear = new Date();
//     let lastMonth = new Date();
//     lastYear.setFullYear(today.getFullYear()-1);
//     lastMonth.setMonth(today.getMonth()-1);

//     worksheet.applyRangeFilterAsync(fieldName = 'Date', { min: lastMonth, max: today});
//     worksheet.applyRangeFilterAsync(fieldName = 'Date', { min: lastYear, max: today});
//     worksheet.applyRangeFilterAsync(fieldName = 'Close', { min: 1800, max: 2043});
// };

//creates link with html buttons
const lastMonthButton = document.getElementById("LastMonth")
const lastYearButton = document.getElementById("LastYear")

//last month button
lastMonthButton.addEventListener("click",() => {
  console.log("click")
  let fieldName = 'Date'
  let today = new Date();
  let lastMonth = new Date();
  lastMonth.setMonth(today.getMonth()-1)
  selectedWorksheet.applyRangeFilterAsync(fieldName = 'Date', { min: lastMonth, max: today});
})

//last year button
lastYearButton.addEventListener("click",() => {
  console.log("click")
  let fieldName = 'Date'
  let today = new Date();
  let lastYear = new Date();
  lastYear.setFullYear(today.getFullYear()-1);
  selectedWorksheet.applyRangeFilterAsync(fieldName = 'Date', { min: lastYear, max: today});
})
