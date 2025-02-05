const messages = [
    "เราแน่ใจหรอเบบี้?",
    "ชัวร์นะ??",
    "คิดดีแล้วนะะ?",
    "เบบี้ plss...",
    "คิดอีกที!",
    "ถ้าเราบอกไม่, ผมจะเศร้านะ!...",
    "ผมเสียใจ ╯︿╰ ...",
    "ผมจะเศร้าม๊ากมากกกกก...",
    "ได้!, ผมจะไม่ถามเราแล้ววว...",
    "ล้อเล่นนน ใครจะยอมแพ้กัน, กด yes เลยนะ ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
