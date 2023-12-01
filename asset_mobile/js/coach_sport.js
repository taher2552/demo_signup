// coach sports page js

const sportsSelect = document.getElementById("sportsSelect2");
const selectedSportsDiv = document.getElementById("selectedSports2");

sportsSelect.addEventListener("change", function () {
  const selectedSport = this.value;
  if (selectedSport !== "") {
    const option = this.querySelector(`option[value="${selectedSport}"]`);
    const selectedText = option.textContent;

    // Create a new blue div
    const blueDiv = document.createElement("div");
    blueDiv.classList.add("sports_blue");
    blueDiv.classList.add("sports_blue_2");
    blueDiv.innerHTML = `
            <p class="mob_font">${selectedText}</p>
            <p class="mob_font removeSport">X</p>
        `;

    // Append the blue div to the selectedSportsDiv
    selectedSportsDiv.appendChild(blueDiv);

    // Remove the selected option from the dropdown
    option.remove();

    // Add click event to remove the selected sport when 'X' is clicked
    const removeButton = blueDiv.querySelector(".removeSport");
    removeButton.addEventListener("click", function () {
      // Add the sport back to the dropdown
      const newOption = document.createElement("option");
      newOption.value = selectedSport;
      newOption.textContent = selectedText;
      sportsSelect.appendChild(newOption);

      // Remove the blue div from the selectedSportsDiv
      blueDiv.remove();
    });
  }
});

// coach sports page js ends



//coach address js


// address view js

const addManuallyCheckbox = document.getElementById("addManuallyCheckbox2");
const citySearchContainer = document.getElementById("citySearchContainer2");
const manualAddressInput = document.getElementById("manualAddressInput2");

addManuallyCheckbox.addEventListener("change", function () {
  if (this.checked) {
    manualAddressInput.style.display = "block";
    citySearchContainer.style.display = "none";
  } else {
    manualAddressInput.style.display = "none";
    citySearchContainer.style.display = "flex";
  }
});

// address view js ends

// google api for address js

$(document).ready(function () {
  // Create a new Autocomplete object
  var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("city_box"),
    {
      types: ["address"],
      componentRestrictions: { country: ["ind"] },
    }
  );

  // Add an event listener to the search input field
  autocomplete.addListener("place_changed", function () {
    // Get the place result from the Autocomplete object
    var place = autocomplete.getPlace();

    // Extract the place name from the result
    var name = place.name;

    $("#pincode1").val(name);
  });
});

// google api for address js ends

// academy registration address page js ends

//coach address js ends
