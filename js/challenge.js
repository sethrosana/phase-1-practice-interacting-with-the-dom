document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById("counter");
  let minusBtn = document.getElementById("minus");
  let plusBtn = document.getElementById("plus");
  let heartBtn = document.getElementById("heart");
  let pauseBtn = document.getElementById("pause");
  let submitBtn = document.getElementById("submit");
  let commentForm = document.getElementById("comment-form");
  let commentInput = document.getElementById("comment-input");
  let commentList = document.getElementById("list");
  let likesUl = document.querySelector(".likes");

  let count = 0;
  let isPaused = false;
  let likes = {};

  // Start counter
  let counterInterval = setInterval(incrementCounter, 1000);

  function incrementCounter() {
    if (!isPaused) {
      count++;
      counter.textContent = count;
    }
  }

  // Plus button
  plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  // Minus button
  minusBtn.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });

  // Like button
  heartBtn.addEventListener("click", () => {
    if (isPaused) return;

    if (likes[count]) {
      likes[count]++;
      const li = document.getElementById(`like-${count}`);
      li.textContent = `${count} has been liked ${likes[count]} times`;
    } else {
      likes[count] = 1;
      const li = document.createElement("li");
      li.id = `like-${count}`;
      li.textContent = `${count} has been liked 1 time`;
      likesUl.appendChild(li);
    }
  });

  // Pause/resume button
  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "resume" : "pause";

    plusBtn.disabled = isPaused;
    minusBtn.disabled = isPaused;
    heartBtn.disabled = isPaused;
    submitBtn.disabled = isPaused;
  });

  // Submit comment
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const comment = commentInput.value.trim();
    if (comment !== "") {
      const p = document.createElement("p");
      p.textContent = comment;
      commentList.appendChild(p);
      commentInput.value = "";
    }
  });
});
