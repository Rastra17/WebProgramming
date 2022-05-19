//Dynamic Alert Popup Window with custom content
//Defining the contents of dataMessage variable
var dataMessage = "<b>" + common.Bank_AlertMessageforNoResultsfromAPI //Alert message Dialog box
+ "</b><br><br>"
//Data being defined and concatenated
+ "     • Source: " + selectedSource + "<br>"
+ "     • Funding Method: " + selectedFundingMethod + "<br>"
+ "     • Bank Address Country: " + selectedCoutry + "<br>"
+ "     • Currency: " + selectedCurrency + "<br>";

//Stores the variable dataMessage into the local Storage of the computer
localStorage.setItem("BankAlerts", dataMessage);

//Defining customParameters to pass into encodeURIComponent
var customParameters = "entityId=" + Xrm.Page.data.entity.getId() //Gets the Id of that entity
+ "&entitytypename=" + Xrm.Page.data.entity.getEntityName() //Gets the Name of that entity
+ "&windowtype=Alert"; //Type of dialog box

//Creates a Unique Resource Identifier and concats it after the link
var dialogUrl = "/WebResources/cel_/HTMLPages/BankDialogWindow.html?Data=" 
+ encodeURIComponent(customParameters);

//Shows a Confirmation Dialog Window that displays dialogUrl within specified dimensions
common.OpenConfirmationDialogWindow(dialogUrl, 500, 700);