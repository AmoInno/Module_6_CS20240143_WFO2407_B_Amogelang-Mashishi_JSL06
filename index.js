// Sample menu data 
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 60.00}, 
        { name: "Bruschetta", price: 62.00}, 
        { name: "BBQ Fish Sauce Chicken Wings", price: 95.00}, 
        { name: "Chicken Livers", price: 40.00}
    ],

    Mains: [
        { name: "Margherita Pizza", price: 115.00}, 
        { name: "Spaghetti Carbonara", price: 125.00}, 
        { name: "Beef burger with chips", price: 185.00}, 
        { name: "Lamb shank with vegetables", price: 250.00}
        ],

    Desserts: [
        {name: "Tiramisu", price: 80.00}, 
        {name: "Cheesecake", price: 100.00}, 
        {name: "Carrot cake", price: 75.00}, 
        {name: "Vanilla ice-cream", price: 55.00}
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    // Loop through each category and its items in the menu object
    // Create an element to represent the category
    // Set the text content of the category element to the category name
    // Append the category element to the menu container
    // Create an element to represent a list of items
    // Append a list of items element to the menu container
    // Loop through the items in the category and create list items
    // Create a list item element
    // Set the text content of the list item element to the item name
    // Attach a click event listener to the list item to add it to the order
    // Append the list item to the list of items

    const menuElement = document.getElementById("menu");
    menuElement.innerHTML = '';

    Object.keys(menu).forEach((category) =>{
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");

        const categoryName = document.createElement("h2");
        categoryName.textContent = category;
        categoryElement.appendChild(categoryName);

        const itemListElement = document.createElement("ul");
        itemListElement.classList.add("item-list");

        menu[category].forEach((item) =>{
            const itemElement = document.createElement("li");
            itemElement.classList.add("menu-item");
            itemElement.textContent = `${item.name}: ${item.price.toFixed(2)}`;
            itemElement.addEventListener("click", () => addToOrder(item));
            itemListElement.appendChild(itemElement);
        
        });

        categoryElement.appendChild(itemListElement);
        menuElement.appendChild(categoryElement);


    });

            
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    // Create a list item for the order
    // Set the text content of the list item to the item name
    // Append the list item to the order items list
    // Calculate and update the total price
    // Update the text content of the order total element with the new total
    
    const orderElement = document.getElementById("order-items");
    const totalElement = document.getElementById("order-total");

    const itemsList = document.createElement("li");
    itemsList.textContent = `${item.name}: ${item.price}`;

    orderElement.appendChild(itemsList);

    let totalPrice = parseFloat(totalElement.textContent) || 0;
    totalPrice += item.price;

    totalElement.textContent = totalPrice.toFixed(2);


}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items

    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
