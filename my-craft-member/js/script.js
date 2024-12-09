$(function () {
    // 更改密碼
    // 展開
    $(".change-password").click(function () {
        $('#password-form,.confirm-btn').addClass('show');
        // $("#password-form,.confirm-btn").show(500);
    });
    // 取消
    $(".password-cancel").click(function () {
        $('#password-form,.confirm-btn').removeClass('show');
        // $("#password-form,.confirm-btn").hide(500);
    });
});