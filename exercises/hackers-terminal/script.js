// can use finally for cleanup
// skip the actual logic just do prototype

/* 
Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds 
    
    Initializing Hacking...
    Reading your Files...
    Password files Detected...
    Sending all passwords and personal files to server...
    Cleaning up...

    The three dots must blink so that it looks like a real terminal -> that's imp
    .  
     .
      .

    .*/
function generateDelay() {
  return Math.floor(Math.random() * 6001) + 1000;
}

document.getElementById("hack-btn").addEventListener("click", function () {
  this.disabled = true;
  hack();
  // this.textContent = "Hacked!"; // Optional: change text after click
});

// just copy this  prototype solve problem of the blinking dot
// logically we can use the only function as only text changes else everything remains same 
// but in real implementation they will be different function 
async function initialiseHacking() {
  return new Promise((resolve, reject) => {
    const spanElmt = document.createElement("span");
    spanElmt.textContent = "   ";
    const para = document.createElement("p");
    para.textContent = "Initializing Hacking";
    para.append(spanElmt);
    document.querySelector(".terminal").append(para);
    let seq = 1;
    let id = setInterval(() => {
      if (seq == 1) {
        spanElmt.textContent = ".  ";
      }
      // \u00A0
      //  one dot two dot three dot is better
      else if (seq == 2) {
        spanElmt.textContent = ".. ";
      } else if (seq == 3) {
        spanElmt.textContent = "...";
      } else {
        spanElmt.textContent = "   ";
      }
      seq += 1;
      seq = seq % 4;
    }, 500);

    setTimeout((params) => {
      clearInterval(id);
      para.innerHTML = "Successfully initialised Hacking";

      resolve(1);
    }, 10000);
  });
}


async function readFiles() {
  return new Promise((resolve, reject) => {
    const spanElmt = document.createElement("span");
    spanElmt.textContent = "   ";
    const para = document.createElement("p");
    para.textContent = "Reading your Files";
    para.append(spanElmt);
    document.querySelector(".terminal").append(para);
    let seq = 1;
    let id = setInterval(() => {
      if (seq == 1) {
        spanElmt.textContent = ".  ";
      } else if (seq == 2) {
        spanElmt.textContent = ".. ";
      } else if (seq == 3) {
        spanElmt.textContent = "...";
      } else {
        spanElmt.textContent = "   ";
      }
      seq += 1;
      seq = seq % 4;
    }, 500);

    setTimeout((params) => {
      clearInterval(id);
      para.innerHTML = "Successfully read all the Files";

      resolve(1);
    }, 10000);
  });
}


async function detectPasswordFile() {
  return new Promise((resolve, reject) => {
    const spanElmt = document.createElement("span");
    spanElmt.textContent = "   ";
    const para = document.createElement("p");
    para.textContent = "Password files Detected";
    para.append(spanElmt);
    document.querySelector(".terminal").append(para);
    let seq = 1;
    let id = setInterval(() => {
      if (seq == 1) {
        spanElmt.textContent = ".  ";
      } else if (seq == 2) {
        spanElmt.textContent = ".. ";
      } else if (seq == 3) {
        spanElmt.textContent = "...";
      } else {
        spanElmt.textContent = "   ";
      }
      seq += 1;
      seq = seq % 4;
    }, 500);

    setTimeout((params) => {
      clearInterval(id);
      para.innerHTML = "Successfully detected all the password Files";

      resolve(1);
    }, 10000);
  });
}

async function sendServer() {
  return new Promise((resolve, reject) => {
    const spanElmt = document.createElement("span");
    spanElmt.textContent = "   ";
    const para = document.createElement("p");
    para.textContent = "Sending all passwords and personal files to server";
    para.append(spanElmt);
    document.querySelector(".terminal").append(para);
    let seq = 1;
    let id = setInterval(() => {
      if (seq == 1) {
        spanElmt.textContent = ".  ";
      } else if (seq == 2) {
        spanElmt.textContent = ".. ";
      } else if (seq == 3) {
        spanElmt.textContent = "...";
      } else {
        spanElmt.textContent = "   ";
      }
      seq += 1;
      seq = seq % 4;
    }, 500);

    setTimeout((params) => {
      clearInterval(id);
      para.innerHTML =
        "Successfully Sent all passwords and personal files to server";

      resolve(1);
    }, 10000);
  });
}

async function cleanUp() {
  return new Promise((resolve, reject) => {
    const spanElmt = document.createElement("span");
    spanElmt.textContent = "   ";
    const para = document.createElement("p");
    para.textContent = "Cleaning up";
    para.append(spanElmt);
    document.querySelector(".terminal").append(para);
    let seq = 1;
    let id = setInterval(() => {
      if (seq == 1) {
        spanElmt.textContent = ".  ";
      } else if (seq == 2) {
        spanElmt.textContent = ".. ";
      } else if (seq == 3) {
        spanElmt.textContent = "...";
      } else {
        spanElmt.textContent = "   ";
      }
      seq += 1;
      seq = seq % 4;
    }, 500);

    setTimeout((params) => {
      clearInterval(id);
      para.innerHTML = "Successfully cleaned the system of malicious code";

      resolve(1);
    }, 10000);
  });
}

async function hack() {
  await initialiseHacking();
  await readFiles();
  await detectPasswordFile();
  await sendServer();
  await cleanUp();
}
