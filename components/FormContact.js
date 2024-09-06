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
    },
    onSubmit: async (data, { resetForm }) => {
      setIsSubmitting(true);
      submitButtonRef.current.disabled = true;

      const formData = new FormData();
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
            <span className="bg-orange w-full p-4 block rounded mt-3">
              <span className="font-medium">send</span> requestSend
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
            className="bg-black text-white font-medium px-4 py-4 mt-3 rounded-lg hover:bg-orange hover:text-black w-full"
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
