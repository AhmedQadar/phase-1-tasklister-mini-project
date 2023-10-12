document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputField = document.querySelector('#new-task-description');
    uploadToDo(inputField.value);
    inputField.value = '';
  })
});

function uploadToDo(to_do){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', () => {
    p.remove();
  });
  btn.textContent = 'x';
  p.textContent = `${to_do} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}