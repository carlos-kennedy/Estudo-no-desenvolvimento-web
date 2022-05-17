// Function scope

let subject = 'Create video'
function createThink(subject) {
    subject = 'Make twerk'
    return subject
}
// escopo global
console.log(subject)

// escopo local function
console.log(createThink(subject))