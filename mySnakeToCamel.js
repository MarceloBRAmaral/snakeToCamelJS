//test case 1: test_case
//test case 2: test_2
//test case 3: longer_test
//test case 4: number_1_in_the_middle
//test case 5: underscore_at_the_end_

entry = window.prompt("Enter the test case");
var entrySplit = "";
var result = "";

//get an array of characteres
entrySplit = entry.split("");

//search for an "_" and change the next letter to uppercase if found
for (let index = 1; index < entrySplit.length - 1; index++) {

    if (entrySplit[index]=="_") {
        entrySplit[index+1] = entrySplit[index+1].toUpperCase();
    }    
}

//assembles the array entrySplit into string result
for (let index = 0; index < entrySplit.length; index++) {
    
    result += entrySplit[index];    
}

//remove all "_"
result = result.replaceAll("_","");

//prints the result
window.prompt("This is the result: ", result);
