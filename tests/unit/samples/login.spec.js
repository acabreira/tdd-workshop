import { mount } from "@vue/test-utils";
import Component from "../../../src/samples/components/login-component";

describe("[component] login", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(Component);
  });

  test("Username and password input boxes should be visible", () => {

    expect(wrapper.find("input[data-test-id=email]").isVisible()).toBe(true);
    expect(wrapper.find("input[data-test-id=password]").isVisible()).toBe(true);

  });

  test("Forgot password link is displayed", () => {
    expect(wrapper.find("a[data-test-id=forgot_password_link]").isVisible()).toBe(true);
  });

  test("Login button should visible", () => {
    expect(wrapper.find("button[data-test-id=login_button]").isVisible()).toBe(true);
  });

  /**
   * Need to add:
   * When login button is clicked, function login() should be called
   * Username/password verifications
   * Clicking forgot password link opens a different component (verification can be stubbed)
   */

});
