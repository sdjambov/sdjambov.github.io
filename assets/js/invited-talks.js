function toggleInvited() {
    const invitedDiv = document.getElementById("invited-talks");
    const allDiv = document.getElementById("all-talks");
    const btn = document.getElementById("invited-toggle-btn");
    
    const isInvitedHidden = (invitedDiv.style.display === "none");
    invitedDiv.style.display = isInvitedHidden ? "block" : "none";
    allDiv.style.display = isInvitedHidden ? "none" : "block";
    btn.classList.toggle("active", isInvitedHidden);
}