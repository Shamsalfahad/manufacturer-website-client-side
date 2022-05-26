import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold my-10 ">Contact Us 📞</h1>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: `url("https://www.marvell.com/content/dam/marvell/en/company/images/heroes/bnr-hero-855x504-company-contact-us.jpg")`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-sm lg:max-w-lg">
            <h1 class="mb-1 text-5xl font-bold text-blue-200">Hey There !!</h1>
            <h2 class="mb-1 text-xl font-bold text-blue">
              Wanna join with us?
            </h2>
            <p class="my-5 font-mono ">
              If you interested to work with us, Knock us, we are so friendly.
              your afford will make us proud. You will enjoy working with us.😄❤️
            </p>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              class="btn btn-danger"
            >
              Set a test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
