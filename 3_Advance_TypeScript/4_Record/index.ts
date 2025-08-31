
// `Record<K, T>` constructs an object type
// where keys are of type K and values are of type T.

// It’s like saying: "I want an object where keys must be THIS, and values must be THAT"

// Example 1: Simple Record
type Role = "admin" | "user" | "guest"

// Here, Record ensures we have keys of type Role
// and values of type string
const roleDescriptions: Record<Role, string> = {
  admin: "Has full access",
  user: "Has limited access",
  guest: "Can only view"
}

// Example 2: Record with more complex value type
interface User {
  id: number
  name: string
}

type UserRole = "moderator" | "editor" | "viewer"
// Record<UserRole, User[]> means:
// An object where keys = UserRole, values = arrays of User objects
const team: Record<UserRole, User[]> = {
  moderator: [{ id: 1, name: "Alice" }],
  editor: [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }],
  viewer: []
}

// Example 3: Record with number keys
// Keys don’t have to be strings — can be numbers too
const errorMessages: Record<number, string> = {
  404: "Not Found",
  500: "Server Error",
  200: "OK"
}

// Why is Record useful?
// -> Great for mapping keys to values (dictionary-like structure).
// -> Provides strict typing so I can’t accidentally add wrong keys.
// -> Saves me from writing repetitive interfaces for mappings.
// -> Works nicely with unions for keys.
