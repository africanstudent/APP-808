const models = [
    "11", "11 Pro", "11 Pro Max", "12", "12 Mini", "12 Pro", "12 Pro Max", 
    "13", "13 Mini", "13 Pro", "13 Pro Max", "14", "14 Mini", "14 Pro", 
    "14 Pro Max", "15", "15 Plus", "15 Pro", "15 Pro Max"
];

const basePrices = {
    audio: 20000,
    network: 35000,
    battery: 100000,
    screen: 150000,
    water: 200000
};

function calculatePrice(base, increment, index) {
    return base + (increment * index);
}

function generateQuotation(index) {
    const quotationDetails = document.getElementById("quotation-details");
    quotationDetails.innerHTML = `
        <div class="service-item">Audio Issues: Ugx. ${calculatePrice(basePrices.audio, 5500, index)}</div>
        <div class="service-item">Network Issues: Ugx. ${calculatePrice(basePrices.network, 5000, index)}</div>
        <div class="service-item">Battery Replacement: Ugx. ${calculatePrice(basePrices.battery, 9950, index)}</div>
        <div class="service-item">Screen Replacement: Ugx. ${calculatePrice(basePrices.screen, 45500, index)}</div>
        <div class="service-item">Water Damage: Ugx. ${calculatePrice(basePrices.water, 45500, index)}</div>
        <div class="service-item">
            Complex Issues: 
            <input type="text" id="complex-issue" placeholder="Describe the issue">
            <button onclick="submitComplexIssue()">Submit</button>
        </div>
    `;
}

function submitComplexIssue() {
    const issue = document.getElementById("complex-issue").value;
    if(issue) {
        alert(`Complex issue submitted: ${issue}`);
        // Here you can add code to send the issue to a server or database.
    } else {
        alert('Please describe the issue.');
    }
}

window.onload = () => {
    const modelButtons = document.getElementById("model-buttons");
    models.forEach((model, index) => {
        const button = document.createElement("button");
        button.className = "model-button";
        button.textContent = `iPhone ${model}`;
        button.onclick = () => generateQuotation(index);
        modelButtons.appendChild(button);
    });
};
