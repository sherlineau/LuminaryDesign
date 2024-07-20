import "./index.css";
import ContactForm from '../../components/ContactForm'

const index = () => {

  return (
    <div className="contact">
      <h1 className="accent">Contact Us</h1>
      <p>
        {`At Luminary Designs, we're here to assist you with all your creative
        needs. Whether you have questions about our services or want to discuss
        a specific project, we're just a message away. Feel free to reach out to
        us through the following contact form `}
      </p>

      {/* //! TODO : update email 
      <p>
        Email us at:
        <a
          href="mailto:contact@luminarydesigns.com"
          target="_blank"
          rel="noreferrer"
        >
          contact@luminarydesigns.com
        </a>
      </p>
       */}

    <ContactForm />

    </div>
  );
};

export default index;
