document.addEventListener("DOMContentLoaded", function() {
    const fireworksContainer = document.querySelector('.fireworks');

    // Tạo pháo
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        // Đặt vị trí ngẫu nhiên trên chiều ngang
        firework.style.left = Math.random() * window.innerWidth + 'px';
        fireworksContainer.appendChild(firework);

        // Xóa pháo sau khi hoàn tất hiệu ứng
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    // Tạo pháo liên tục
    setInterval(createFirework, 300);

    const lettersHappy = document.querySelectorAll('.happy .letter');
    const lettersBirthday = document.querySelectorAll('.birthday .letter');
    const message = document.querySelector('.fade-in');
    const cake = document.querySelector('.cake');
    const gif = document.querySelector('.mewmew-gif');
    const balloon = document.querySelector('.balloon');
    const customImage = document.querySelector('.custom-image');
    const customImage1 = document.querySelector('.custom-image1');

    // Hiệu ứng cho các chữ cái trong "Happy"
    lettersHappy.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('show');
        }, index * 200); // Thời gian giữa các chữ cái
    });

    // Hiệu ứng cho các chữ cái trong "Birthday"
    setTimeout(() => {
        lettersBirthday.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('show');
            }, index * 200); // Thời gian giữa các chữ cái
        });
    }, lettersHappy.length * 200 + 500); // Thời gian xuất hiện của "Birthday"

    // Hiệu ứng cho thẻ <p>, ảnh GIF, hai hình ảnh
    setTimeout(() => {
        message.classList.add('show');
        customImage.classList.add('show');
        customImage1.classList.add('show');
        gif.classList.add('show'); // Hiển thị GIF
        balloon.classList.add('show'); // Hiển thị icon bóng bay
    }, (lettersHappy.length + lettersBirthday.length) * 200 + 3000); // Thời gian xuất hiện của thẻ <p>

    // Hiệu ứng cho ảnh bánh sinh nhật
    setTimeout(() => {
        cake.classList.add('show');
    }, (lettersHappy.length + lettersBirthday.length) * 200 + 1500); // Thời gian xuất hiện của ảnh bánh sinh nhật

    // Hiệu ứng cho icon bức thư sau 10 giây
    setTimeout(() => {
        const openLetterButton = document.querySelector('.open-letter');
        openLetterButton.classList.add('show'); // Hiển thị icon bức thư
    }, (lettersHappy.length + lettersBirthday.length) * 200 + 1500 + 5000); // 10 giây sau bánh sinh nhật

    const openLetterButton = document.querySelector('.open-letter');
    const letterContainer = document.querySelector('.letter-container');
    const closeLetterButton = document.querySelector('.close-letter');

    openLetterButton.addEventListener('click', () => {
        letterContainer.style.display = 'block'; // Hiển thị bức thư
    });

    closeLetterButton.addEventListener('click', () => {
        letterContainer.style.display = 'none'; // Ẩn bức thư
    });
});
