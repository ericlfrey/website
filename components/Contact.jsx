/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          If you want to collaborate, have any questions, or just want to say
          hello feel free to reach out.
        </p>
        <p>No spamming, please. Cheers!</p>
        <br />
        <a href="mailto:ericlfrey@gmail.com">
          <p style={{ color: 'dodgerBlue' }}>EricLFrey@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
