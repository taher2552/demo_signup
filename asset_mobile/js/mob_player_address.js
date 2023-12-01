// academy registration address page js




// open and close time js ends

// address view js

const addManuallyCheckbox = document.getElementById("addManuallyCheckbox");
const citySearchContainer = document.getElementById("citySearchContainer");
const manualAddressInput = document.getElementById("manualAddressInput");

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
