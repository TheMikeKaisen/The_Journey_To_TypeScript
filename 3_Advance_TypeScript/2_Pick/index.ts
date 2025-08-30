
// `Pick<Type, Keys>` is a utility type that allows me to create a new type 
// by selecting only specific properties from an existing type.

// Let's start with a base type (interface)
interface User {
  id: number
  name: string
  email: string
  phone: string
  isAdmin: boolean
}

// Now, let's say I don't want the full User object everywhere.
// Sometimes I just need some "part" of it.
// Instead of rewriting the type manually, I can use Pick.

// Example 1: Picking only id and name
type UserPreview = Pick<User, "id" | "name">

// Example usage:
const user1: UserPreview = {
  id: 1,
  name: "Karthik",
  // can't add email or phone here, because they were not picked
  // email: "k@k.com" // will provide an error.
}

// Example 2: Picking just email and phone
type UserContact = Pick<User, "email" | "phone">

const user2: UserContact = {
  email: "karthik@example.com",
  phone: "1234567890"
}

// Example 3: Combining Pick with function parameters
function sendEmail(user: Pick<User, "email">) {
  console.log(`Sending email to ${user.email}`)
}

sendEmail({ email: "mike@example.com" })

// Why is Pick useful?
// -> Helps me avoid repeating type definitions
// -> Makes code more DRY (Don't Repeat Yourself)
// -> Lets me extract only the properties I care about
// -> Makes functions more flexible (they don’t need the full object)
