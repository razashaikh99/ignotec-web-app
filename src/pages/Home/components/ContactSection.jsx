import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { getCountries } from "libphonenumber-js/max";
import Button from "../../../components/Button";
import { validateContact, createContactPayload } from "./contactValidation";

const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
const flagAssets = import.meta.glob("/node_modules/country-flag-icons/3x2/*.svg", { eager: true, query: "?url&no-inline", import: "default" });
const countries = getCountries().map((value) => ({ value, label: countryNames.of(value) })).sort((a, b) => a.label.localeCompare(b.label));
const initialValues = { firstName: "", lastName: "", phone: "", country: "", email: "", message: "", termsAccepted: false };

const ContactSection = () => {
    const id = useId();
    const formRef = useRef(null);
    const countryRef = useRef(null);
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");
    const update = (name, value) => {
        const next = { ...values, [name]: value };
        setValues(next);
        setStatus("");
        setErrors((previous) => {
            const checked = validateContact(next);
            const result = { ...previous };
            for (const field of Object.keys(previous)) {
                if (checked[field]) result[field] = checked[field];
                else delete result[field];
            }
            return result;
        });
    };
    const onBlur = (name) => {
        const error = validateContact(values)[name];
        setErrors((previous) => ({ ...previous, [name]: error }));
    };
    const submit = (event) => {
        event.preventDefault();
        const checked = validateContact(values);
        setErrors(checked);
        setStatus("");
        const first = Object.keys(checked)[0];
        if (first) {
            if (first === "country") countryRef.current?.focus();
            else formRef.current.elements.namedItem(first)?.focus();
            return;
        }
        try {
            console.log("Contact enquiry payload:", createContactPayload(values, countryNames.of(values.country)));
            setStatus("Your enquiry has been validated and logged for preview.");
        } catch {
            setErrors((previous) => ({ ...previous, submit: "Something went wrong. Please try again." }));
        }
    };
    const errorText = (name) => errors[name] && <p id={`${id}-${name}-error`} className="mt-2 text-xs leading-5 text-red-600">{errors[name]}</p>;
    const inputClasses = (name) => `w-full rounded-full border bg-white px-5 py-3.5 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:ring-4 ${errors[name] ? "border-red-500 focus:ring-red-100" : "border-slate-300 focus:border-purple-500 focus:ring-purple-100"}`;
    const input = (name, label, placeholder, type = "text", required = false, autoComplete) => (
        <div>
            <label htmlFor={`${id}-${name}`} className="mb-2 block text-sm font-medium text-slate-900">{label}{required && <span className="text-red-500"> *</span>}</label>
            <input id={`${id}-${name}`} name={name} type={type} value={values[name]} autoComplete={autoComplete} required={required}
                placeholder={placeholder} onChange={(event) => update(name, event.target.value)} onBlur={() => onBlur(name)}
                aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined} className={inputClasses(name)} />
            {errorText(name)}
        </div>
    );

    return (
        <section className="relative isolate overflow-hidden bg-black py-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_right_bottom,#c111a9_0%,#521b55_25%,transparent_65%)]" />
            <div className="mx-auto grid max-w-360 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-14">
                <h2 className="max-w-140 text-4xl leading-tight font-normal tracking-tight text-white sm:text-5xl">Let's <span className="bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">build what's</span><br /> next, together.</h2>
                <form ref={formRef} onSubmit={submit} noValidate className="w-full rounded-3xl bg-white p-6 shadow-2xl sm:p-9">
                    <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {input("firstName", "First name", "First name", "text", true, "given-name")}
                            {input("lastName", "Last name", "Last name", "text", true, "family-name")}
                        </div>
                        {input("phone", "Contact number", "Phone number", "tel", true, "tel")}
                        <div>
                            <label htmlFor={`${id}-country`} className="mb-2 block text-sm font-medium text-slate-900">Country <span className="text-red-500">*</span></label>
                            <Select ref={countryRef} inputId={`${id}-country`} instanceId={`${id}-country-select`} name="country" options={countries}
                                value={countries.find((country) => country.value === values.country) || null} placeholder="Search or select country" isSearchable
                                onChange={(option) => update("country", option?.value || "")} onBlur={() => onBlur("country")}
                                aria-required="true" aria-invalid={Boolean(errors.country)} aria-describedby={errors.country ? `${id}-country-error` : undefined}
                                formatOptionLabel={(option) => <span className="flex items-center gap-3"><img alt="" loading="lazy" width="24" height="16" src={flagAssets[`/node_modules/country-flag-icons/3x2/${option.value}.svg`]} className="h-4 w-6 shrink-0 rounded-sm object-cover" />{option.label}</span>}
                                styles={{ control: (base, state) => ({ ...base, minHeight: 50, borderRadius: 999, paddingInline: 12, fontSize: 14, borderColor: errors.country ? "#ef4444" : state.isFocused ? "#a855f7" : "#cbd5e1", boxShadow: state.isFocused ? "0 0 0 4px #f3e8ff" : "none" }), menu: (base) => ({ ...base, zIndex: 30, borderRadius: 16, overflow: "hidden" }), option: (base, state) => ({ ...base, fontSize: 14, color: "#0f172a", backgroundColor: state.isSelected ? "#e9d5ff" : state.isFocused ? "#faf5ff" : "white" }) }} />
                            {errorText("country")}
                        </div>
                        {input("email", "Email", "you@company.com", "email", false, "email")}
                        <div>
                            <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-medium text-slate-900">How may we provide our assistance and support to you?</label>
                            <textarea id={`${id}-message`} name="message" rows={4} value={values.message} placeholder="Tell us a little about your project..."
                                onChange={(event) => update("message", event.target.value)} onBlur={() => onBlur("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${id}-message-error` : undefined}
                                className={`${inputClasses("message")} rounded-3xl! resize-y`} />
                            {errorText("message")}
                        </div>
                        <div>
                            <label className="flex items-center gap-3 text-sm text-slate-700">
                                <input name="termsAccepted" type="checkbox" required checked={values.termsAccepted} onChange={(event) => update("termsAccepted", event.target.checked)}
                                    aria-invalid={Boolean(errors.termsAccepted)} aria-describedby={errors.termsAccepted ? `${id}-termsAccepted-error` : undefined} className="size-5 accent-purple-600" />
                                <span>I agree to the <Link to="/terms" className="text-purple-700 underline underline-offset-2">Terms &amp; Conditions</Link></span>
                            </label>
                            {errorText("termsAccepted")}
                        </div>
                        <p className="text-xs leading-5 text-slate-500">By submitting this form, you agree to our <Link to="/privacy-policy" className="text-purple-700 underline">Privacy Policy</Link> and allow us to contact you about your enquiry.</p>
                        {errorText("submit")}
                        {status && <p role="status" className="rounded-xl bg-green-50 p-3 text-sm text-green-700">{status}</p>}
                        <Button type="submit" variant="outline" showArrow={false} className="shadow-sm">Submit Enquiry</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
