
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const baseUrl = `http://localhost:3002`;

const ContactForm = () => {
  const [submitResult, setSubmitResult] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubmitResult(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [submitResult]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("required"),
      email: Yup.string().email("Invalid email address").required("required"),
      phone: Yup.number().required("required"),
      subject: Yup.string()
        .max(20, "must be less than 20 characters")
        .required("required"),
      message: Yup.string().required("required"),
    }),

    onSubmit: async (values) => {
      const dataRaw = await fetch(`${baseUrl}/contactform`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await dataRaw.json();
      console.log(data);
      if (data.success) {
        setSubmitResult(true);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-black font-bold text-5xl my-8 font-sans">
          Contact Form
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row mb-4">
            <div>
              <label htmlFor="name">
                {formik.touched.name && formik.errors.name ? (
                  <div className="block text-sm font-semibold text-red-700">
                    {formik.errors.name}
                  </div>
                ) : null}
              </label>
              <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type="text"
                placeholder="Your Name*"
                className={`${
                  formik.touched.name && formik.errors.name
                    ? ` border-red-600 rounded-md`
                    : `outline-none`
                } p-3 border focus:outline-none lg:mr-4 mb-4 lg:mb-0`}
              />
            </div>
            <div>
              <label htmlFor="email">
                {formik.touched.email && formik.errors.email ? (
                  <div className="block text-sm font-semibold text-red-700">
                    {formik.errors.email}
                  </div>
                ) : null}
              </label>
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                placeholder="Your Email*"
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "border-red-600 rounded-md"
                    : ""
                } p-3 border focus:outline-none`}
              />
            </div>
          </div>
          <label htmlFor="phone">
            {formik.touched.phone && formik.errors.phone ? (
              <div className="block text-sm font-semibold text-red-700">
                {formik.errors.phone}
              </div>
            ) : null}
          </label>
          <input
            id="phone"
            name="phone"
            // {...formik.getFieldProps("phone")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="number"
            placeholder="Phone*"
            className={`${
              formik.touched.phone && formik.errors.phone
                ? ` border-red-600 rounded-md`
                : `outline-none`
            }  p-3 border focus:outline-none mb-4`}
          />
          <div className="flex flex-col mb-4">
            <label htmlFor="subject">
              {formik.touched.subject && formik.errors.subject ? (
                <div className="block text-sm font-semibold text-red-700">
                  {formik.errors.subject}
                </div>
              ) : null}
            </label>
            <div>
              <input
                id="subject"
                name="subject"
                // {...formik.getFieldProps("subject")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                type="text"
                placeholder="Subject*"
                className={`${
                  formik.touched.subject &&
                  formik.errors.subject &&
                  "border-red-600 rounded-md"
                } p-3 border focus:outline-none lg:mr-4 mb-4 lg:mb-0 `}
              />
            </div>
          </div>
          <label htmlFor="message">
            {formik.touched.message && formik.errors.message ? (
              <div className="block text-sm font-semibold text-red-700">
                {formik.errors.message}
              </div>
            ) : null}
          </label>
          <textarea
            name="message"
            // {...formik.getFieldProps("message")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            cols="30"
            rows="10"
            className={`${
              formik.touched.message &&
              formik.errors.message &&
              "border-red-600 rounded-md"
            } p-3 h-28 border focus:outline-none resize-none`}
            placeholder="Your Message..."
          ></textarea>
          <div>
            {submitResult && (
              <div className=" duration-500 mt-2 rounded p-2 bg-green-500 text-black border border-black font-sans font-bold">
                Message sent successfully
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans "
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
