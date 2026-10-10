import { getCountries, parsePhoneNumberFromString } from "libphonenumber-js/max";

export function validateContact(values) {
    const errors = {};
    for (const field of ["firstName", "lastName"]) {
        if (!values[field].trim()) errors[field] = "Please enter your name.";
        else if (values[field].trim().length > 80) errors[field] = "Use 80 characters or fewer.";
    }
    if (!getCountries().includes(values.country)) errors.country = "Please select your country.";
    if (!values.phone.trim()) errors.phone = "Please enter your contact number.";
    else {
        const phone = parsePhoneNumberFromString(values.phone, values.country || undefined);
        if (!/^[+\d\s().-]+$/.test(values.phone) || !phone?.isValid()) errors.phone = "Enter a valid phone number, including the country code if needed.";
    }
    if (values.email.trim() && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) || values.email.trim().length > 254)) errors.email = "Please enter a valid email address.";
    if (values.message.trim().length > 2000) errors.message = "Use 2,000 characters or fewer.";
    if (!values.termsAccepted) errors.termsAccepted = "Please accept the Terms & Conditions.";
    return errors;
}

export function createContactPayload(values, countryName) {
    return {
        firstName: values.firstName.trim(), lastName: values.lastName.trim(),
        phone: parsePhoneNumberFromString(values.phone, values.country).number,
        countryCode: values.country, country: countryName,
        email: values.email.trim(), message: values.message.trim(),
        termsAccepted: values.termsAccepted,
    };
}
