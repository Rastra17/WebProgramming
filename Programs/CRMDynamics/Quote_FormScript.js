function alertName(executionContext)
{
    //Reading object
    var formContext = executionContext.getFormContext()

    //Reading name
    var name = formContext.getAttribute("name").getValue()

    //Set totalweight to some value
    formContext.getAttribute("imc_totalweight").setValue(80)

    //Alert box
    alert("Welcome "+name)
}