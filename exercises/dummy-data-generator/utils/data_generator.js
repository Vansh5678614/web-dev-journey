function generateName() {
  const names = ["Vansh", "Ayush", "Yash"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function generateSalary() {
  const min = 500000;
  const max = 4500000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLanguage() {
  const languages = ["JavaScript", "Python", "C++", "Java", "Go", "Rust"];
  const randomIndex = Math.floor(Math.random() * languages.length);
  return languages[randomIndex];
}

function generateCity() {
  const cities = ["Delhi", "Mumbai", "New York", "London", "Berlin", "Tokyo"];
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

function generateIsManager() {
  return Math.random() < 0.5;
}

export {
  generateName,
  generateSalary,
  generateLanguage,
  generateCity,
  generateIsManager
};
