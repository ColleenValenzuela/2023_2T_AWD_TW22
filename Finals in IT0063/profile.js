document.addEventListener("DOMContentLoaded", function () {
    const profileInfoContainer = document.getElementById("profile-info");

    const user = {
        email: "user@example.com",
        playerID: "1234 5678 9012",
        IGN: "ExampleUser"
    };

    function displayUserProfile() {
        profileInfoContainer.innerHTML = `
            <p>Email: ${user.email}</p>
            <p>Player ID: ${user.playerID}</p>
            <p>IGN: ${user.IGN}</p>
        `;
    }

    displayUserProfile();

    const saveProfileButton = document.getElementById("save-profile");
    saveProfileButton.addEventListener("click", function () {
        const profilePictureInput = document.getElementById("profile-picture-upload");
        const profilePicture = profilePictureInput.files[0];
        if (profilePicture) {
          
            console.log("Profile picture uploaded:", profilePicture);
        } else {
            console.log("No profile picture selected.");
        }
    });
});
