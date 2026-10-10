import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact, createContactPayload } from "./contactValidation.js";

const valid = {
    firstName: " Raza ", lastName: " Ahmed ", country: "PK", phone: "03001234567",
    email: " raza@example.com ", message: " React portfolio ", termsAccepted: true,
};

test("valid local phone produces a trimmed international payload", () => {
    assert.deepEqual(validateContact(valid), {});
    assert.deepEqual(createContactPayload(valid, "Pakistan"), {
        firstName: "Raza", lastName: "Ahmed", countryCode: "PK", country: "Pakistan",
        phone: "+923001234567", email: "raza@example.com", message: "React portfolio", termsAccepted: true,
    });
});

test("missing required fields and consent each have field errors", () => {
    const errors = validateContact({ firstName: "  ", lastName: "", phone: "", country: "", email: "", message: "", termsAccepted: false });
    assert.deepEqual(Object.keys(errors).sort(), ["country", "firstName", "lastName", "phone", "termsAccepted"].sort());
});

test("invalid phone, country, email and oversized message are rejected", () => {
    const errors = validateContact({ ...valid, phone: "abc123", country: "ZZ", email: "bad@", message: "a".repeat(2001) });
    for (const field of ["phone", "country", "email", "message"]) assert.ok(errors[field]);
});

test("optional email and message and international phone are accepted", () => {
    assert.deepEqual(validateContact({ ...valid, phone: "+12025550123", country: "US", email: "", message: "" }), {});
});
