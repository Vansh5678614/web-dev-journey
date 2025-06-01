// good example for understanding
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance of success

      if (success) {
        resolve("👤 User data fetched!");
      } else {
        reject("❌ Failed to fetch user data.");
      }
    }, 2000); // Simulate 2 second delay
  });
}

async function handleUser() {
  console.log("📦 Starting to fetch user...");

  try {
    const result = await fetchUser(); // ⏸️ Waits here until resolved or rejected
    console.log("✅ Result:", result); // If resolved
  } catch (error) {
    console.error("🚨 Error:", error); // If rejected
  }

  console.log("🏁 Finished execution.");
}

handleUser();
