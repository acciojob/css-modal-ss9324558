//your JS code here. If required.
document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
});

document.querySelector('.close-modal').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none';
  }
});