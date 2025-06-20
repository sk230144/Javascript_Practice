var string = "Welcome to Trivent Cad";

var ans = reverseBySeparator(string, "");

var ans1 = reverseBySeparator(ans, " ");


//**************** IMPORTANT FUNCTION ******************************* */


function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}


//******************************************************************* */

console.log(ans1);


//emocleW ot tnevirT daC, 

// Just Play with spaces that we are giving in strings, we can reverse in any order

// reverseBySeparator is important here