"use strict";
// `Partial<Type>` is a utility type that makes *all properties optional*.
// This is useful when I don’t always want to provide every property of an object.
Object.defineProperty(exports, "__esModule", { value: true });
// Normally, if I create a User object, I must fill in everything:
const fullUser = {
    id: 1,
    name: "Karthik",
    email: "karthik@example.com",
    phone: "1234567890",
    isAdmin: false
};
// this is just like defining:
/*
interface User {
  id?: number
  name?: string
  email?: string
  phone?: string
  isAdmin?: boolean
}}
*/
const userUpdate = {
    email: "newmail@example.com"
    // other fields are optional now
};
// Example 2: A function that updates a user
function updateUser(id, updates) {
    // here, updates can contain any subset of User’s fields
    console.log(`Updating user ${id} with`, updates);
}
updateUser(1, { name: "Mike" });
updateUser(2, { email: "another@example.com", isAdmin: true });
// Why is Partial useful?
// -> Lets me represent "incomplete" data
// -> Very handy for update operations (patch APIs, form edits, etc.)
// -> Saves me from writing multiple versions of the same type
// -> All keys automatically become optional, so less manual typing
