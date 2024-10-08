import { useRouter } from "next/router";
import { useState, useRef } from "react";
import {
  Label,
  Button,
  TextInput,
  Alert,
  HiMail,
  HiInformationCircle,
  FileInput,
} from "flowbite-react";

import { useFormik } from "formik";
import { useFormikContext, Formik, Form, Field } from "formik";
import * as yup from "yup";
import Image from "next/image";

import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";

export default function FormContact() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = useRouter();

  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitButtonRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      website: "",
      message: "",
      currentPosition: "",
      industrySegment: "",
      numberOfEmployees: "",
    },
    onSubmit: async (data, { resetForm }) => {
      setIsSubmitting(true);
      submitButtonRef.current.disabled = true;

      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("companyName", data.companyName);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("website", data.website);
      formData.append("message", data.message);
      formData.append("currentPosition", data.currentPosition);
      formData.append("industrySegment", data.industrySegment);
      formData.append("numberOfEmployees", data.numberOfEmployees);
      try {
        let res = await fetch("/api/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
        let resJson = await res.json();
        if (res.status === 200) {
          console.log("E-mail foi enviado para API");
          setStatus("success");
          submitButtonRef.current.disabled = false;
          resetForm({ values: "" });
          setIsSubmitting(false);
        } else if (res.status === 401) {
          setMessage(Sending);
          setStatus("error");
          submitButtonRef.current.disabled = false;
          setIsSubmitting(false);
        } else {
          setMessage(Sending);
          setStatus("error");
          submitButtonRef.current.disabled = false;
          setIsSubmitting(false);
        }
      } catch (err) {
        console.log(err);
      }

      setSubmitted(true);
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      fullName: yup.string().trim().required("isRequired"),
      companyName: yup.string().trim().required("isRequired"),
      phone: yup
        .string()
        .test("phone", "phoneValid", (value) => {
          return isValidPhoneNumber(value);
        })
        .required("isRequired"),
      email: yup.string().email("emailValid").required("isRequired"),
      message: yup.string().required("isRequired"),
      currentPosition: yup.string().required("isRequired"),
      industrySegment: yup.string().required("isRequired"),
      numberOfEmployees: yup.string().required("isRequired"),
    }),
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <form className="p-4 " onSubmit={formik.handleSubmit}>
          <div>
            <h4 className="text-orange font-bold text-lg mb-4">
              Fill in the form and our sales team will get in touch!
            </h4>
          </div>

          <div className="mt-4">
            <label
              htmlFor="fullName"
              className="block mb-3 font-medium text-black"
            >
              Name
            </label>
            <input
              type="text"
              name="fullName"
              className="bg-gray w-full p-2 rounded text-black"
              placeholder=""
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fullName && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.fullName}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="companyName"
              className="block mb-3 font-medium text-black"
            >
              Company
            </label>
            <input
              type="text"
              name="companyName"
              className="bg-gray w-full p-2 rounded text-black"
              placeholder=""
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.companyName && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.companyName}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="phone"
              className="block mb-3 font-medium text-black"
            >
              Phone
            </label>
            <PhoneInput
              international
              minLength={6}
              // defaultCountry="US"
              type="text"
              name="phone"
              className="bg-gray w-full p-2 rounded text-black"
              value={""}
              onChange={(e) => {
                formik.setFieldValue("phone", e);
              }}
              // onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-3 font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray w-full p-2 rounded text-black"
              placeholder="john@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="website"
              className="block mb-3 font-medium text-black"
            >
              Website
            </label>
            <input
              type="text"
              name="website"
              className="bg-gray w-full p-2 rounded text-black"
              placeholder=""
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.website && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.website}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="currentPosition"
              className="block mb-3 font-medium text-black"
            >
              Current Position
            </label>
            <input
              type="text"
              name="currentPosition"
              className="bg-gray w-full p-2 rounded text-black"
              placeholder=""
              value={formik.values.currentPosition}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.currentPosition && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.currentPosition}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="industrySegment"
              className="block mb-3 font-medium text-black"
            >
              Industry Segment
            </label>
            <select
              name="industrySegment"
              className="bg-gray w-full p-2  text-black rounded-md"
              value={formik.values.industrySegment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option></option>

              <option value="Advertising Agency">Advertising Agency</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Food and Beverages">Food and Beverages</option>
              <option value="Automotive">Automotive</option>
              <option value="Medical and Hospital Care">
                Medical and Hospital Care
              </option>
              <option value="Toys">Toys</option>
              <option value="Home and Decoration">Home and Decoration</option>
              <option value="Culture, Sports and Leisure">
                Culture, Sports and Leisure
              </option>
              <option value="Retail and Trade">Retail and Trade</option>
              <option value="Consulting">Consulting</option>
              <option value="Education">Education</option>
              <option value="Electronics">Electronics</option>
              <option value="Energy">Energy</option>
              <option value="Pharmaceutical">Pharmaceutical</option>
              <option value="Financial">Financial</option>
              <option value="Hygiene and Beauty">Hygiene and Beauty</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Logistics and Transportation">
                Logistics and Transportation
              </option>
              <option value="Media">Media</option>
              <option value="Mining and Metallurgy">
                Mining and Metallurgy
              </option>
              <option value="Fashion">Fashion</option>
              <option value="Oil and Gas">Oil and Gas</option>
              <option value="Chemical">Chemical</option>
              <option value="Health">Health</option>
              <option value="Insurance">Insurance</option>
              <option value="Corporate Services">Corporate Services</option>
              <option value="Legal Services">Legal Services</option>
              <option value="Public Sector">Public Sector</option>
              <option value="Technology">Technology</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Tourism">Tourism</option>
              <option value="Other">Other</option>
            </select>
            {formik.errors.industrySegment && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.industrySegment}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="numberOfEmployees"
              className="block mb-3 font-medium text-black"
            >
              Number Of Employees
            </label>
            <select
              name="numberOfEmployees"
              className="bg-gray w-full p-2  text-black rounded-md"
              value={formik.values.numberOfEmployees}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option></option>

              <option value="Up to 50">Up to 50</option>
              <option value="From 51 to 100">From 51 to 100</option>
              <option value="From 101 to 200">From 101 to 200</option>
              <option value="From 201 to 500">From 201 to 500</option>
              <option value="From 501 to 1,000">From 501 to 1,000</option>
              <option value="From 1,001 to 5,000">From 1,001 to 5,000</option>
              <option value="From 5,001 to 10,000">From 5,001 to 10,000</option>
              <option value="Above 10,001">Above 10,001</option>
              <option value="Self-employed">Self-employed</option>
            </select>
            {formik.errors.numberOfEmployees && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.numberOfEmployees}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="website"
              className="block mb-3 font-medium text-black"
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              className="bg-gray w-full p-2 rounded text-black"
              placeholder=""
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.message && (
              <div className="text-orange font-bold text-xs mt-1">
                {formik.errors.message}
              </div>
            )}
          </div>

          {/* <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="resume" value={t("resume")} />
            </div>
            <FileInput
              id="file"
              type="file"
              name="file"
              accept="application/pdf,.doc,.docx"
              required={true}
              onChange={(e) =>
                formik.setFieldValue("file", e.currentTarget.files[0])
              }
              onBlur={formik.handleBlur}
            />
          </div> */}

          {status === "success" && (
            <span className="bg-orange text-white w-full p-4 block rounded-lg mt-3">
              Form Sent!
            </span>
          )}
          {status === "error" && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span>
                <span className="font-medium">{t("error")}</span> requestNotSend
              </span>
            </Alert>
          )}

          {isSubmitting && (
            <div>
              <Alert color="info" icon={HiInformationCircle}>
                <span>
                  <span className="font-medium">Sending</span> wait
                </span>
              </Alert>
            </div>
          )}

          <button
            type="submit"
            className="bg-indigo-600 text-white font-medium px-4 py-4 mt-3 rounded-lg hover:bg-orange hover:text-black w-full"
            ref={submitButtonRef}
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
