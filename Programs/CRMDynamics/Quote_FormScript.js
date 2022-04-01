function alertName(executionContext)
{
    //Reading object
    var formContext = executionContext.getFormContext()

    //Getting lookup
    var field = formContext.getAttribute("umoid")//uomid
    var data = field.getValue()

    //Condition to check if the value is not null
    if (data == null)
    {
        //Alert box
        alert("The value is null")
    }
    else
    {

        // Getting the GUID of the lookup record
        var ID = data[0].id;

        // Getting Name of the lookup record
        var Name = data[0].name;

        // Getting Entity Name of the lookup which entity, the lookup record is belonging to.
        var EntityType = data[0].entityType;

        //Alert box
        alert("ID, Name, Entity Type of Zeroth index" + ID + Name + EntityType)
    }

    //Get value of name
    //formContext.getAttribute("name").getValue()

    //Set totalweight to some value
    //formContext.getAttribute("imc_totalweight").setValue(80)
}