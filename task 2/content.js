const sampleData = {
    companyName: "TechCorp",
    matchScore: 86,
    accountStatus: "Target"
};

const widget = document.createElement('div');
widget.style.position = 'fixed';
widget.style.bottom = '20px';
widget.style.right = '20px';
widget.style.backgroundColor = 'white';
widget.style.border = '1px solid #ccc';
widget.style.padding = '10px';
widget.style.zIndex = '1000';

function updateWidgetContent() {
    const statusColor = sampleData.accountStatus === "Target" ? "green" : "red";
    widget.innerHTML = `
        <h3>Company Info</h3>
        <p><strong>Company Name:</strong> <span id="company-name">${sampleData.companyName}</span></p>
        <p>
            <strong>Match Score:</strong>
            <div style="width: 100%; background-color: #e0e0e0;">
                <div style="width: ${sampleData.matchScore}%; background-color: #76c7c0; height: 10px;"></div>
            </div>
            <span>${sampleData.matchScore}</span>
        </p>
        <p>
            <strong>Account Status:</strong>
            <span style="color: ${statusColor}; border: 1px solid ${statusColor}; padding: 2px 5px; border-radius: 3px;">
                ${sampleData.accountStatus}
            </span>
        </p>
        <button id="toggle-visibility">Toggle Visibility</button>
    `;
}

function toggleWidgetVisibility() {
    const isVisible = widget.style.display === 'block';
    widget.style.display = isVisible ? 'none' : 'block';
    chrome.storage.local.set({ widgetVisible: !isVisible });
}


chrome.storage.local.get(['widgetVisible'], (result) => {
    if (result.widgetVisible === undefined || result.widgetVisible) {
        widget.style.display = 'block';
    } else {
        widget.style.display = 'none';
    }
    updateWidgetContent();
    document.body.appendChild(widget);
});

document.getElementById('toggle-visibility').addEventListener('click', toggleWidgetVisibility);