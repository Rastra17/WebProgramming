function ChangeProduct(executionContext)
{
    //Getting id for the record that is on screen
    // var id = Xrm.Page.data.entity.getId()
    // alert("Id: " + id)
    
    var formContext = executionContext.getFormContext()
    
    var lookupData = new Array()
    lookupData[0] = new Object()
        
    lookupData[0].id = "f11c049f-8e8f-db11-89b9-00114358195e"//Id of Each in Unit group
    lookupData[0].name = "Each"//Name of Each
    lookupData[0].entityType = "uomschedule"//Table (Name of Unit Group)
        
    formContext.getAttribute("cdi_unittesr").setValue(lookupData)
}