// Lấy ra các phần tử cần kiểm tra
const usernameInput = document.getElementById("user");
const passwordInput = document.getElementById("pass");
const form = document.getElementById("regfr");

form.addEventListener("submit", function (event) {
  // Ngăn chặn hành động mặc định của form khi submit
  event.preventDefault();
  if (usernameInput.value.trim() === "") {
    alert("Vui lòng nhập tên đăng nhập");
    usernameInput.focus();
    return;
  }

  if (passwordInput.value.trim() === "") {
    alert("Vui lòng nhập mật khẩu");
    passwordInput.focus();
    return;
  }

  // Nếu điều kiện nhập đều hợp lệ, submit form
  form.submit();
});
