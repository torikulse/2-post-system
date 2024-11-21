const allPostContainer = document.querySelector("#allPost");
const postBtn = document.querySelector("#postBtn");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const editBtn = document.querySelector("#edit");
const deleteBtn = document.querySelector("#delete");

let allPost = [
  { title: "this is title", description: "this is description" },
  { title: "this is title2", description: "this is description2" },
];

postBtn.addEventListener("click", () => {
  if ((title.value !== "") & (description.value != "")) {
    allPost.push({ title: title.value, description: description.value });
    title.value = "";
    description.value = "";
    postRender();
  }
});

function postRender() {
  allPostContainer.innerHTML = "";
  allPost.map((e, i) => {
    allPostContainer.innerHTML += `
            <div class="card g-col-3">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                  <p class="card-text">
                    ${e.description}
                  </p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" id="edit">Edit</button>
                    <button class="btn btn-danger" type="button" id="delete" onclick="deleteItem(${i})">Delete</button>
                  </div>
                </div>
            </div>
            `;
  });
}
postRender();

function deleteItem(index) {
  allPost.splice(index, 1);
  postRender();
}
