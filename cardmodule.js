// Function to create a profile card
export function createProfileCard(name, role) {
  const card = document.createElement("div");
  card.classList.add("card");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "×";

  const nameEl = document.createElement("h2");
  nameEl.textContent = name;

  const roleEl = document.createElement("p");
  roleEl.textContent = role;

  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(removeBtn);
  card.appendChild(nameEl);
  card.appendChild(roleEl);

  return card;
}
