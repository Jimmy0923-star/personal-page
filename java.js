function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('nav a').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});


$(document).ready(function() {
    $('#submitBtn').on('click', function() {
        // 檢查是否有選擇角色
        if (!$('input[name="character"]:checked').val()) {
            alert('請選擇一個角色！');
            return;
        }
        
        // 顯示成功訊息
        $('#responseMessage').text('謝謝您的投票！');
    });
});
