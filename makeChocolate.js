function makeChocolate(ingredients, cookingTime) {
    let reqIngredients = ["sugar", "cacao", "milk"];
    let reqCookTime = 10;
    let chocolate;

    // checking if ingredients is an array
    if (!Array.isArray(ingredients)) {
        return "Please give me all the ingredients in a neat little package. (An array, you fool!)";
    }

    // checking ingredients loop
    for (let i = 0; i < ingredients.length; i++) {
        if (reqIngredients.includes(ingredients[i])) {
            reqIngredients.splice(reqIngredients.indexOf(ingredients[i]), 1);
            continue;
        } else {
            let keepCooking;

            do {
                let userPrompt = prompt(`${ingredients[i]} is not a required ingredient. Would you like to continue? Type Y for yes and N for no.`);
                if (userPrompt === "Y") {
                    keepCooking = true;
                } else if (userPrompt === "N") {
                    keepCooking = false;
                }
            } while (keepCooking === undefined);

            if (keepCooking) {
                continue;
            } else {
                return "You have chosen to stop making chocolate because you passed in a wrong ingredient";
            }
        }
    }

    // if remaining required ingredients
    if (reqIngredients.length) {
        return `You have forgotten to include ${requiredIngredients}`;
    }

    // cooks chocolate for the amount of time the user specifies
    if (cookingTime === reqCookTime) {
        alert("congratulations, your chocolate is ready, well done!");
        chocolate = true;
    } else if (cookingTime < reqCookTime) {
        alert("Sorry, you took your chocolate out of the oven too early. Better luck next time!");
        chocolate = false;
    } else if (cookingTime > reqCookTime) {
        alert("Uh oh, you cooked your chocolate for too long and it is ruined!");
        chocolate = false;
    }

    return chocolate;
}