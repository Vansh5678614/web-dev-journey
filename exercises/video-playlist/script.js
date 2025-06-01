function formatViews(views) {

    // can also add billon functionality as view can be inbilloion
  const number = parseInt(views); // Ensure it's a number
  if (number >= 1000000) {
    return Math.floor(number / 1000000) + "M"; // Rounded down to the nearest million
  } else if (number >= 1000) {
    return Math.floor(number / 1000) + "K"; // Rounded down to the nearest thousand
  }
  return views; // Return original if less than 1000
}

function createCard(
  srcThumbnail,
  duration,
  cardTitle,
  channelName,
  views = "na",
  monthsOld = "na"
) {
  const container = document.querySelector(".container");

  if (container.dataset.isEmpty === "true") {
    container.textContent = "";
    container.style.height = "0px";
    container.dataset.isEmpty = "false";
  }

  // Get current height in pixels from computed styles
  const currentHeightPx = parseFloat(getComputedStyle(container).height);
  const vhUnit = window.innerHeight / 100;
  const incrementPx = 18 * vhUnit;

  const newHeightPx = currentHeightPx + incrementPx;

  // Set new height using inline style
  container.style.height = `${newHeightPx}px`;

  // although thumbnail is fixed
  const card = document.createElement("div");
  card.classList.add("card");

  // Create thumbnail section
  const thumbnailDiv = document.createElement("div");
  thumbnailDiv.classList.add("thumbnail");

  const img = document.createElement("img");
  img.src = srcThumbnail;
  img.alt = "web developement";

  const timeSpan = document.createElement("span");
  timeSpan.textContent = duration;

  thumbnailDiv.append(img, timeSpan);

  // Create description section
  const description = document.createElement("div");
  description.classList.add("description");

  const title = document.createElement("h2");
  title.textContent = cardTitle;

  const channelSpan = document.createElement("span");
  channelSpan.textContent = channelName;

  const viewsSpan = document.createElement("span");
  viewsSpan.innerHTML = `&nbsp;&bull; ${formatViews(views)} views`;

  const timeAgoSpan = document.createElement("span");
  timeAgoSpan.innerHTML = `&nbsp;&bull; ${monthsOld} months ago`;

  description.append(title, channelSpan, viewsSpan, timeAgoSpan);

  card.append(thumbnailDiv, description);

  container.append(card);
}

createCard("thumbnail.jpg", "12:15", "Installing VS Code & How Websites Work | Sigma Web Development Course -Tutorial #1 ", "CodeWithHarry" , 1000000 , 8);

createCard("thumbnail.jpg", "12:15", "title", "channel" , 100655000 , 6);
createCard("thumbnail.jpg", "12:15", "title", "channel" , 30049 , 8);
// createCard("thumbnail.jpg", "12:15", "title", "channel")
// createCard("thumbnail.jpg", "12:15", "title", "channel")
// createCard("thumbnail.jpg", "12:15", "title", "channel")
// createCard("thumbnail.jpg", "12:15", "title", "channel")
// createCard("thumbnail.jpg", "12:15", "title", "channel")
// createCard("thumbnail.jpg", "12:15", "title", "channel")
