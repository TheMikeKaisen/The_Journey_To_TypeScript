"use strict";
// `Record<K, T>` constructs an object type
// where keys are of type K and values are of type T.
Object.defineProperty(exports, "__esModule", { value: true });
// Here, Record ensures we have keys of type Role
// and values of type string
const roleDescriptions = {
    admin: "Has full access",
    user: "Has limited access",
    guest: "Can only view"
};
// Record<UserRole, User[]> means:
// An object where keys = UserRole, values = arrays of User objects
const team = {
    moderator: [{ id: 1, name: "Alice" }],
    editor: [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }],
    viewer: []
};
// Example 3: Record with number keys
// Keys don’t have to be strings — can be numbers too
const errorMessages = {
    404: "Not Found",
    500: "Server Error",
    200: "OK"
};
// Why is Record useful?
// -> Great for mapping keys to values (dictionary-like structure).
// -> Provides strict typing so I can’t accidentally add wrong keys.
// -> Saves me from writing repetitive interfaces for mappings.
// -> Works nicely with unions for keys.
