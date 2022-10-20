"use strict";
let age = 20;
let user = [62, 'Prashant'];
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let ans = calculateTax(10100, 2021);
console.log(ans);
let employee = {
    id: 1,
    name: 'Prashant Gupta',
    retire: (date) => {
        console.log(date);
    }
};
function KgtoLbs(weight) {
    if (typeof weight == 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
let ans1 = KgtoLbs(10);
let ans2 = KgtoLbs('20');
console.log(ans1, ans2);
