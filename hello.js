// hello.js

// Example function
function greet(name) {
  console.log(`Hello, ${name} 🚀`); // This will be caught by ESLint if no-console rule is enabled
}

// Run function
greet("GitHub Actions");

// Another message
console.log("This is a debug log that should be removed ❌");