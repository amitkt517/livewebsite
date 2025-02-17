// Contact Form Submission Handler
function scrollToServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}
// JavaScript to handle form submissions and display maintenance requests
const requestList = document.getElementById("requestList");

function submitRequest() {
    // Get form values
    const facilityName = document.getElementById("facilityName").value;
    const state = document.getElementById("state").value;
    const sector = document.getElementById("sector").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const issueDescription = document.getElementById("issueDescription").value;
    const priority = document.getElementById("priority").value;

    // Create new list item
    const listItem = document.createElement("li");
    listItem.className = "request-item";
    listItem.innerHTML = `
        <strong>Facility:</strong> ${facilityName}<br>
        <strong>State:</strong> ${state}<br>
        <strong>Sector:</strong> ${sector}<br>
        <strong>Contact:</strong> ${contact}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Pincode:</strong> ${pincode}<br>
        <strong>Issue Description:</strong> ${issueDescription}<br>
        <strong>Priority:</strong> ${priority}
    `;

    // Append list item to request list
    requestList.appendChild(listItem);

    // Clear the form
    document.getElementById("maintenanceForm").reset();
}

