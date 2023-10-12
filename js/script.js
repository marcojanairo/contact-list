let currentPage = 1;

// Calculate the total count of contacts
const contactsCount = users.length;

// Update HTML to display the total count
const totalContactCount = document.querySelector(".page-header h3");
totalContactCount.textContent = `Total: ${contactsCount}`;

// Display user page
function displayStudents(page) {
    const contactList = document.querySelector(".contact-list");
    contactList.innerHTML = "";

    const start = (page - 1) * 10; // 10 is the number of students per page
    const end = start + 10;
    const pageStudents = users.slice(start, end);

    for (let i = 0; i < pageStudents.length; i++) {
        const student = pageStudents[i];
        const listItem = document.createElement("li");
        listItem.classList.add("contact-item", "cf");

        const contactInfo = document.createElement("div");
        contactInfo.classList.add("contact-details");

        const avatar = document.createElement("img");
        avatar.classList.add("avatar");
        avatar.src = student.image;

        const name = document.createElement("h3");
        name.textContent = student.name;

        const joiningDetails = document.createElement("div");
        joiningDetails.classList.add("joined-details");

        const joiningDate = document.createElement("span");
        joiningDate.classList.add("date");
        joiningDate.textContent = "Joined " + student.joined;

        joiningDetails.appendChild(joiningDate);

        contactInfo.appendChild(avatar);
        contactInfo.appendChild(name);

        listItem.appendChild(contactInfo);
        listItem.appendChild(joiningDetails);

        contactList.appendChild(listItem);
    }
}

// Display the page
displayStudents(currentPage);

// Pagination
const contactList = document.querySelector(".contact-list");
const pagination = document.createElement("div");
pagination.classList.add("pagination");

// Get total pages
const totalPages = Math.ceil(users.length / 10);

// Create buttons
for (let i = 1; i <= totalPages; i++){
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
        currentPage = i;
        displayStudents(currentPage);
    });
    pagination.appendChild(button);
}

document.querySelector(".page").appendChild(pagination);