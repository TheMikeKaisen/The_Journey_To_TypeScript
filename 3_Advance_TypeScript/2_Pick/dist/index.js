"use strict";
// `Pick<Type, Keys>` is a utility type that allows me to create a new type 
// by selecting only specific properties from an existing type.
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage:
const user1 = {
    id: 1,
    name: "Karthik",
    // can't add email or phone here, because they were not picked
    // email: "k@k.com" // will provide an error.
};
const user2 = {
    email: "karthik@example.com",
    phone: "1234567890"
};
// Example 3: Combining Pick with function parameters
function sendEmail(user) {
    console.log(`Sending email to ${user.email}`);
}
sendEmail({ email: "mike@example.com" });
// Why is Pick useful?
// -> Helps me avoid repeating type definitions
// -> Makes code more DRY (Don't Repeat Yourself)
// -> Lets me extract only the properties I care about
// -> Makes functions more flexible (they don’t need the full object)
