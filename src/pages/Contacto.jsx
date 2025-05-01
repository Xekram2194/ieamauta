function Contacto() {
  return (
    <section className="section">
      <h1 className="title">Contacto</h1>
      <p className="subtitle">¿Tienes dudas? ¡Estamos para ayudarte!</p>
      <form id="contactForm" className="contact-form">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" id="name" placeholder="Name" className="contact-input"/></td>
              <td><input type="email" id="email" placeholder="Email" className="contact-input"/></td>
              <td><textarea id="message" placeholder="Message" className="contact-input"></textarea></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3"><button type="submit" onClick={handleSubmit} className="contact-button">Submit</button></td>
            </tr>
          </tfoot>
        </table>
      </form>
    </section>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = { name, email, message };

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Contact form submitted successfully!');
      } else {
        alert('Contact form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Contact form submission failed.');
    }
  }
}

export default Contacto;
