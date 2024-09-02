'use client';
import styles from './ContactUs.module.css';
import Container from '@/hoc/Container';
import Link from 'next/link';
import Checkbox from '../icons/ContactUs/Checkbox';

const ContactUs = () => {
  return (
    <section className={styles.contactus_section}>
      <Container className={styles.contactus_container}>
        <div className={styles.contactus_wrap_general}>
          <div className={styles.contactus_wrap_title_address}>
            <div className={styles.contactus_wrap_title}>
              <h2 className={styles.contactus_title}>
                Let&#8217;s Work Together
              </h2>
              <p className={styles.contactus_text}>
                Our team is always ready to assist you. For business inquiries
                and consultations, please drop us a message or reach out to us
                directly
              </p>
            </div>
            <address className={styles.contactus_address}>
              <ul className={styles.contactus_address_list}>
                <li className={styles.contactus_address_item}>
                  <h5 className={styles.contactus_address_item_title}>
                    Chat to us&#58;
                  </h5>
                  <p className={styles.contactus_address_item_text}>
                    Our friendly team is here to help
                  </p>
                  <Link
                    className={styles.contactus_address_item_link}
                    href="mailto:duck_it@mail.com"
                  >
                    duck&#95;it@mail&#46;com
                  </Link>
                </li>
                <li className={styles.contactus_address_item}>
                  <h5 className={styles.contactus_address_item_title}>
                    Call to us&#58;
                  </h5>
                  <p className={styles.contactus_address_item_text}>
                    Mon&#8211;Fri from 8am&#8211;5pm
                  </p>
                  <Link
                    className={styles.contactus_address_item_link}
                    href="tel:+487045550127"
                  >
                    &#43;48 704&#45;555&#45;0127
                  </Link>
                </li>
              </ul>
            </address>
          </div>
          <div className={styles.contactus_wrap_form_general}>
            <h2 className={styles.contactus_form_title} id="contact_us">
              How We Can Help?
            </h2>
            <div className={styles.contactus_form_container}>
              <form
                // onSubmit={handleSubmit}
                // ref={formRef}
                className={styles.contactus_form}
                name="contactus_form"
                autoComplete="off"
              >
                <ul className={styles.contactus_form_checkbox_container}>
                  <li className={styles.contactus_form_checkbox_wrap}>
                    <input
                      className={styles.contactus_form_checkbox_button}
                      type="checkbox"
                      name="services"
                      id="web-development"
                      value="web development"
                    />
                    <label
                      className={styles.contactus_form_checkbox_label}
                      htmlFor="web-development"
                    >
                      Web_Development
                    </label>
                  </li>

                  <li className={styles.contactus_form_checkbox_wrap}>
                    <input
                      className={styles.contactus_form_checkbox_button}
                      type="checkbox"
                      name="services"
                      id="app-development"
                      value="app development"
                    />
                    <label
                      className={styles.contactus_form_checkbox_label}
                      htmlFor="app-development"
                    >
                      App_Development
                    </label>
                  </li>

                  <li className={styles.contactus_form_checkbox_wrap}>
                    <input
                      className={styles.contactus_form_checkbox_button}
                      type="checkbox"
                      name="services"
                      id="branding"
                      value="branding"
                    />
                    <label
                      className={styles.contactus_form_checkbox_label}
                      htmlFor="branding"
                    >
                      Branding
                    </label>
                  </li>

                  <li className={styles.contactus_form_checkbox_wrap}>
                    <input
                      className={styles.contactus_form_checkbox_button}
                      type="checkbox"
                      name="services"
                      id="marketing"
                      value="marketing"
                    />
                    <label
                      className={styles.contactus_form_checkbox_label}
                      htmlFor="marketing"
                    >
                      Marketing
                    </label>
                  </li>
                </ul>

                <ul className={styles.contactus_form_input_wrap}>
                  <li>
                    <ul className={styles.contactus_form_input_sub_wrap}>
                      <li className={styles.form_wrap} tabIndex={0}>
                        <label
                          className="visually_hidden"
                          htmlFor="user-name"
                        ></label>
                        <input
                          className={styles.form_input}
                          type="text"
                          name="user-name"
                          id="user-name"
                          placeholder="Full name"
                          autoFocus
                          required
                        />
                      </li>
                      <li className={styles.form_wrap} tabIndex={0}>
                        <label
                          className="visually_hidden"
                          htmlFor="user-email"
                        ></label>
                        <input
                          className={styles.form_input}
                          type="email"
                          name="user-email"
                          id="user-email"
                          placeholder="Email"
                          required
                        />
                      </li>
                    </ul>
                  </li>
                  <li className={styles.form_wrap_message} tabIndex={0}>
                    <label
                      className="visually_hidden"
                      htmlFor="user-comment"
                    ></label>
                    <textarea
                      name="user-comment"
                      id="user-comment"
                      className={styles.form_input_user_comment}
                      placeholder="Write your message…"
                    ></textarea>
                  </li>
                </ul>

                <div className={styles.form_checkbox_privacy_btn}>
                  <input
                    className={`${styles.checkbox_input} visually_hidden`}
                    type="checkbox"
                    name="user_checkbox"
                    id="user_checkbox"
                    value="true"
                    required
                  />
                  <label
                    className={styles.checkbox_custom_label}
                    htmlFor="user_checkbox"
                  >
                    <span className={styles.checkbox_icon_span}>
                      <Checkbox />
                    </span>
                    I accept the terms of the Agreement and the
                    <Link className={styles.checkbox_link} href="/">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  className={styles.contactus_form_button}
                  type="submit"
                  tabIndex={0}
                  // disabled={loading}
                >
                  Contact us
                </button>
              </form>
            </div>
            <p className={styles.contactus_form_text}>
              We will get back in touch with you within 24 hours
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
