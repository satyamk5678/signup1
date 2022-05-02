import React from "react";
import "./index.css";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
        <span class="Sign-Up">
          Sign Up
        </span>
        <span class="No-credit-card-requi Text-Style-4">
          No credit card required
        </span>

        <input
          id="Email address"
          class="form-field"
          type="text"
          placeholder="Email address"
          name="Email address"
        />

        <input
          id="Company Name"
          class="form-field"
          type="text"
          placeholder="Company Name"
          name="Company Name"
        />

        <input
          id="Password"
          class="form-field"
          type="text"
          placeholder="Password"
          name="Password"
        />
        <div class="tacbox">
          <input id="checkbox" type="checkbox" />
          <label for="checkbox"> I agree to the <a href="">Terms & Conditions</a></label>
        </div>
        <button class="form-field " type="submit">
          Get Started
        </button>
        <p class="para-2">
          Already have an account? <a href="signIn.html">Sign in</a>
        </p>
      </form>
    </div>
  );
}



