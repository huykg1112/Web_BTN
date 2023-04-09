const form = document.getElementById("regfr");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone_n");
const emailInput = document.getElementById("email");
const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");
const repassInput = document.getElementById("repass");
const checkBox = document.getElementById("check");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value;
  const addressValue = addressInput.value;
  const phoneValue = phoneInput.value;
  const emailValue = emailInput.value;
  const userValue = userInput.value;
  const passValue = passInput.value;
  const repassValue = repassInput.value;
  const isChecked = checkBox.checked;

  if (nameValue.trim() === "") {
    alert("Vui lòng nhập vào họ và tên ");
    nameInput.focus();
    return;
  }

  if (addressValue.trim() === "") {
    alert("Vui lòng nhập địa chỉ nơi bạn ở");
    addressInput.focus();
    return;
  }
  if (phoneValue === "") {
    alert("Vui lòng nhập Số điện thoại");
    phoneInput.focus();
    return;
  } else if (!/^[0-9]+$/.test(phoneValue)) {
    alert("Số điện thoại không đúng định dạng");
    phoneInput.focus();
    return;
  }
  if (!validateEmail(emailValue)) {
    alert("Email không hợp lệ!");
    emailInput.focus();
    return;
  }
  if (userValue.trim() === "") {
    alert("Vui lòng nhập tên đăng nhập");
    userInput.focus();
    return;
  }

  if (passValue.trim() === "") {
    alert("Vui lòng nhập mật khẩu");
    passInput.focus();
    return;
  }

  if (passValue.length < 8) {
    alert("Mật khẩu phải có ít nhất 8 ký tự");
    passInput.focus();
    return;
  }

  if (!/[A-Z]/.test(passValue)) {
    alert("Mật khẩu phải chứa ít nhất một chữ cái viết hoa");
    passInput.focus();
    return;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(passValue)) {
    alert("Mật khẩu phải chứa ít nhất một ký tự đặc biệt");
    passValue.focus();
    return;
  }
  if (repassValue === "") {
    alert("Vui lòng nhập lại Mật khẩu");
    passValue.focus();
    return;
  } else if (passValue !== repassValue) {
    alert("Mật khẩu không khớp");
    repassValue.focus();
    return;
  }

  if (!isChecked) {
    alert("Vui lòng đồng ý với điều khoản và chính sách của chúng tôi");
    return;
  }
  alert("Bạn đã đăng ký thành công");
  form.submit();
});
