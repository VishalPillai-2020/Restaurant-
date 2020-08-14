food_items = [];

function AddItems() {

    display_items = [];
    var food_item = document.getElementById("food-list").value;
    document.getElementById("food-list").value=null;
    food_items.push(food_item);
    length = food_items.length;
    for (var k = 0; k < length; k++) {
        display_items.push("<h2>"+ "food-" + food_items[k] + "</h2>");
    }
    var remove_commas = display_items.join(" ");
    document.getElementById("display_list_without_commas").innerHTML = remove_commas;

}

function sort() {
    food_items.sort();
    var display_items_sorting = [];
    var length = food_items.length;
    for (var k = 0; k < length; k++) {
        display_items_sorting.push("<h2> food- " + food_items[k] + "</h2>")
    }
    var remove_commas = display_items_sorting.join(" ");
    document.getElementById("sorted_list").innerHTML = remove_commas;
    document.getElementById("display_list_without_commas").style.display="none";
}
