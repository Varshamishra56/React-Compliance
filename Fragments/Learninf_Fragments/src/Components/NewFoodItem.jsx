const NewFoodItem=({HandleKeyDown})=>{
    return <input type="text" onKeyDown={HandleKeyDown} placeholder="Enter more items in the list to add" />

}
export default NewFoodItem;