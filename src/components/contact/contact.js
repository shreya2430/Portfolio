import * as React from "react"
import "./contact.scss"

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree - replace with your actual form endpoint
      const response = await fetch('https://formspree.io/f/xblkawwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="section contact">
      <div className="section__title">Get in Touch</div>
      <div className="section__content">
        <div className="contact__container">
          <div className="contact__info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always interested in discussing new opportunities, 
              collaborating on exciting projects, or just having a chat about technology.
            </p>
            
            <div className="contact__details">
              <div className="contact__item">
                <span className="contact__icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>shreyawanisha1221@gmail.com</p>
                </div>
              </div>
              
              <div className="contact__item">
                <span className="contact__icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Boston, MA</p>
                </div>
              </div>
              
              {/* <div className="contact__item">
                <span className="contact__icon">💼</span>
                <div>
                  <strong>Currently</strong>
                  <p>Software Engineer Intern at LabCorp</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="contact__form">
            <form onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form__group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form__group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form__group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, opportunity, or just say hi!"
                />
              </div>

              <button 
                type="submit" 
                className="form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="form__status form__status--success">
                   Thanks! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form__status form__status--error">
                  Oops! Something went wrong. Please try again or email me directly at shreyawanisha1221@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
