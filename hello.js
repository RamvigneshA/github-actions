// hello.js

function greet(name) {
  console.warn("This is a warning message ✅");
  console.error("This is an error message ✅");

  // ❌ Uncommenting this will break the pipeline
  // console.log("Debug log ❌");
}

greet("GitHub Actions");