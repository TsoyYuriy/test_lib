document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
});

function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}