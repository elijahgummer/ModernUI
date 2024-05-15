function copyCode(containerClass) {
    const codeSnippet = document.querySelector(containerClass);
    if (!codeSnippet) {
      console.error("Code snippet element not found");
      return;
    }
  
    const code = codeSnippet.innerText;
    const textarea = document.createElement("textarea");
    const clipboardicon = codeSnippet.closest(".code-snippet").querySelector(".clipboard-icon"); // Get the nearest clipboard icon
    const checkicon = codeSnippet.closest(".code-snippet").querySelector(".check-icon");
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    // copyicon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" fill="#555555" class="color000000 svgShape"></path></svg>`;
    clipboardicon.style.display = 'none';
    checkicon.style.display = 'block';
    setTimeout(() => {
      clipboardicon.style.display = 'block';
      checkicon.style.display = 'none';
    }, 2000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const catButtons = document.querySelectorAll(".cat-btn");
    const demoAreas = document.querySelectorAll(".demo-area");

    // Function to hide all demo areas
    function hideAllDemos() {
      demoAreas.forEach((demoArea) => {
        demoArea.style.display = "none";
      });
    }

    // Function to show the demo area for a specific category
    function showDemo(category) {
      hideAllDemos();
      document.querySelector(`#${category}`).style.display = "block";
    }

    // Event listener for category buttons
    catButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const category = button.textContent.trim();
        if (category === "All") {
          demoAreas.forEach((demoArea) => {
            demoArea.style.display = "block";
          });
        } else {
          showDemo(category);
        }
      });
    });
  });
  