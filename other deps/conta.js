<script>
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
      alert('All fields are required.');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Open new tab with success message
    const newTab = window.open('', '_blank');
    newTab.document.write('<h1 style="text-align: center; margin-top: 50px;">Details submitted successfully</h1>');
    newTab.document.close();
  });
</script>
