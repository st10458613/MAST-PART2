document.getElementById('addMenuItemBtn').onclick = function() {
    document.getElementById('modal').style.display = "block";
};

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
};

document.getElementById('submitBtn').onclick = function() {
    const dishName = document.getElementById('dishName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const course = document.getElementById('course').value;

    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <img src="${imageUrl}" alt="${dishName}">
        <div>
            <strong>${dishName}</strong> - ${description}. $${price}
        </div>
    `;

    if (course === "Starters") {
        document.getElementById('startersList').appendChild(newItem);
    } else if (course === "Mains") {
        document.getElementById('mainsList').appendChild(newItem);
    } else if (course === "Desserts") {
        document.getElementById('dessertsList').appendChild(newItem);
    }

    updateTotalMenuItems();

    document.getElementById('modal').style.display = "none";

    // Clear input fields
    document.getElementById('dishName').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('imageUrl').value = '';
    document.getElementById('course').value = 'Starters';
};

function updateTotalMenuItems() {
    const totalItems = document.querySelectorAll('#startersList li, #mainsList li, #dessertsList li').length;
    document.getElementById('totalMenuItems').innerText = `Total Menu Items: ${totalItems}`;
}


