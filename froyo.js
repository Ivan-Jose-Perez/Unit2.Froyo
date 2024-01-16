// This will be my JS code.

//First I need to get the input from the user. So I will use prompt.

const userInputString = prompt(
    "Please enter your prefered flavors separated by commas: ",
    // "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of flavors into an array of strings
const flavorsArray = userInputString.split(",");

// Now I need to make a function to count each flavor.
function countFlavors(flavorsArray) {
    const flavorcount = {};
    for (const flavor of flavorsArray) {
        // I noticed that spaces threw off the console i.e. "chocolate," and " chocolate" would be counted as two flavors,
        // so I am going to use trim to get rid of the white spaces and adjust accordingly
            // if (flavorcount[flavor]) {
            //     flavorcount[flavor]++;
            // } else {
            //     flavorcount[flavor] = 1;
            // }
        const trimmedFlavor = flavor.trim();
        if (flavorcount[trimmedFlavor]) {
            flavorcount[trimmedFlavor]++;
        } else {
            flavorcount[trimmedFlavor] = 1;
        }
    }
    return flavorcount;
}
// That seems to have fixed the problem with spaces. High Five!

// Since I went ahead and created flavorcount equal to an array of flavors, I can now call the function using the user input as the array
const flavorcount = countFlavors(flavorsArray);

// Now I need the output printed to the console
console.table(flavorcount);