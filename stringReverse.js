var string = "Welcome to Trivent Cad";

var ans = reverseBySeparator(string, "");

var ans1 = reverseBySeparator(ans, " ");


//**************** IMPORTANT FUNCTION ******************************* */


function reverseBySeparator(string, seprator) {
    return string.split(seprator).reverse().join(seprator);
}


//******************************************************************* */

console.log(ans1);


//emocleW ot tnevirT daC, 

// Just Play with spaces that we are giving in strings, we can reverse in any order

// reverseBySeparator is important here