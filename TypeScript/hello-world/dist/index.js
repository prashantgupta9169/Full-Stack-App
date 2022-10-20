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
