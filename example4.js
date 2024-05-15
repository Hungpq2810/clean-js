// Sử dụng function để đóng gói logic và giảm lặp code
function handleEnv() {
  const env = process.env.NODE_ENV;

  if (env === "development") {
    console.log("development mode");
  } else if (env === "production") {
    console.log("production mode");
  }
}

console.log("Starting process...");
handleEnv();
console.log("Process started.");