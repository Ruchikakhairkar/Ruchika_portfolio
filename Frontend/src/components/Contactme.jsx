import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone is required";
    } else if (formData.phone.length < 10) {
      validationErrors.phone = "Phone must be at least 10 characters long";
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitting form with data:", formData);

      fetch("http://localhost/Project/Ruchika_Khairkar/Backend/insert.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form submission successful:", data);
          setSubmissionStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setSubmissionStatus("error");
        });
    }
  };

  return (
    <section id="contactme">
      <div className="container py-10">
        <div className="subcontainer md:mx-36 mx-7 md:grid grid-cols-2 gap-0">
          <div className="ml-10 flex items-center justify-center">
            {/* <h1 className="text-center  mb-4 text-2xl font-bold">Let's Chat</h1>
            <h1 className="text-center  mb-4 text-2xl uppercase">
              For inquiries, collaborations, or discussions, use the form—I’m
              eager to connect!
            </h1> */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Let's chat,</h2>

              <p className="text-3xl text-gray-600">
                For inquiries, collaborations, or discussions, use the form—I’m
                eager to connect!
              </p>
              <p className="text-2xl text-gray-500">
                Let's create something together 🌟
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              method="post"
              className="shadow padding "
            >
              <h2 className="contactme p-2 text-center text-2xl font-semibold uppercase mb-4 bg-blue">
                Contact Me
              </h2>
              <div className="mt-4 ">
                <label
                  htmlFor="name"
                  className="text-gray-700 font-medium mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="block border rounded p-3 w-full"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="red">{errors.name}</p>}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  className="block border rounded p-3 w-full"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="red">{errors.email}</p>}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="text-gray-700 font-medium mb-2"
                >
                  Phone:
                </label>
                <input
                  type="text"
                  className="block border rounded p-3 w-full"
                  id="phone"
                  name="phone"
                  placeholder="Phone no."
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="red">{errors.phone}</p>}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-2"
                >
                  Message:
                </label>
                <textarea
                  className="block border rounded w-full p-3"
                  id="message"
                  name="message"
                  placeholder="Enter message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 mb-4">
                <button
                  type="submit"
                  className="block p-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
                >
                  Send
                </button>
              </div>
              {submissionStatus === "success" && (
                <p className="text-green-500 text-center">
                  Form submitted successfully!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="red text-center">
                  There was an error submitting the form.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
