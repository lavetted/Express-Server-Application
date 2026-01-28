console.log("JS CONNECTED");
const container = document.getElementById("animeContainer");
const form = document.getElementById("animeForm");

const API_URL = "/anime";

/* LOAD ANIME */
async function loadAnime() {
  const res = await fetch(API_URL);
  const data = await res.json();

  container.innerHTML = "";

  // DISPLAY ANIME
  data.forEach((anime) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${anime.title} (${anime.genre})</h3>
      <strong>Reviews:</strong>
      <ul>
        ${anime.reviews.map((r) => `<li>${r}</li>`).join("")}
      </ul>
      <input placeholder="Write review" id="review-${anime.id}">
      <button onclick="addReview(${anime.id})">Add Review</button>
      <button onclick="deleteAnime(${anime.id})">Delete</button>
      <hr>
    `;
    container.appendChild(div);
  });
}

/* ADD ANIME */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, genre }),
  });

  form.reset();
  loadAnime();
});

/* DELETE ANIME */
async function deleteAnime(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadAnime();
}

/* ADD REVIEW */
async function addReview(id) {
  const reviewInput = document.getElementById(`review-${id}`);
  const review = reviewInput.value;

  await fetch(`${API_URL}/${id}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ review }),
  });

  reviewInput.value = "";
  loadAnime();
}

/* INITIAL LOAD */
loadAnime();
