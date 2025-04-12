

function calculateTax (amount = 100, taxRate = 0.10) {
    // Function to calculate tax on a given amount
    return amount * taxRate;
    }
    console.log(calculateTax)  

function convertToUpperCase (text = "hello world") {
    // Function to convert a string to uppercase
    return text.toUpperCase();
    }
    console.log(convertToUpperCase)

    function findMaximum(num1, num2) {
        return Math.max(num1, num2);
    }   
    console.log(findMaximum(27, 15)); // 27
    console.log(findMaximum(-10, -5)); // -5
    console.log(findMaximum(20, -50)); // 20
    console.log(findMaximum(42, 42)); // 42               

function isPalindrome (text = "racecar") {
    // Function to check if a string is a palindrome 
    return text === text.split("").reverse().join("");
    }
    console.log(isPalindrome)   

    function calculateDiscountedPrice(originalPrice = 100, discountPercentage = .20) {
        if (discountPercentage > 1) {
            discountPercentage = discountPercentage / 100;
        }
        const discountedPrice = originalPrice - (originalPrice * discountPercentage);

        return discountedPrice;
    }
    console.log(calculateDiscountedPrice)
    console.log(calculateDiscountedPrice(100, 20)); 







// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };