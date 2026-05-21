const script = [
    { name: "偵探", text: "說到底，私家偵探在現代已經被徵信社取代了吧？至於我的工作內容呢⋯⋯" },
    { name: "孫子", text: "（推門而入）請問您是鼎鼎大名的可以幫人找回故事的偵探嗎？我急需你的幫助。" },
    { name: "偵探", text: "哦，看來有新任務了。歡迎光臨，請問需要什麼幫助呢？" },
    { name: "孫子", text: "我奶奶90歲失智了，醫生建議聊聊童年。但她20歲就離家，可以請你回她老家收集記憶嗎？" },
    { name: "偵探", text: "當然沒問題，交給我吧！這就出發去老家看看。" },
    { name: "旁白", text: "偵探來到了荒廢已久的老家門口，地上散落著一些東西。" }
];

let currentStep = 0;
let inventory = [];


const speakerName = document.getElementById('speaker-name');
const dialogueText = document.getElementById('dialogue-text');
const nextBtn = document.getElementById('next-btn');
const interactionZone = document.getElementById('interaction-zone');
const narration = document.getElementById('narration');

speakerName.innerText = script[0].name;
dialogueText.innerText = script[0].text;

function showMessage1() {
    const msg = document.getElementById("tvmessage");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}
function showMessage2() {
    const msg = document.getElementById("remotemessage");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}
function showMessage3() {
    const msg = document.getElementById("clockmessage");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}
function showMessage4() {
    const msg = document.getElementById("boxmessage");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}
function showDialogue() {
    const msg = document.getElementById("dialogueBox");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}

let current = 1;
function nextstep() {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none";
    document.getElementById("text4").style.display = "none";
    document.getElementById("cookie1").style.display = "none";
    document.getElementById("cookie2").style.display = "none";
    document.getElementById("cookie3").style.display = "none";

    current++;
    if (current === 1) {
        document.getElementById("text1").style.display = "block";
    }
    else if (current === 2) {
        document.getElementById("cookie3").style.display = "block";
    }
    else if (current === 3) {
        document.getElementById("text2").style.display = "block";
    }
    else if (current === 4) {
        document.getElementById("cookie1").style.display = "block";
    }
    else if (current === 5) {
        document.getElementById("text3").style.display = "block";
    }
    else if (current === 6) {
        document.getElementById("cookie2").style.display = "block";
    }
    else if (current === 7) {
        document.getElementById("text4").style.display = "block";
    }else if (current === 8) {
        document.getElementById("exitstep").style.display = "block";
    }
}
function exitsteps() {
    document.getElementById("dialogueBox").style.display = "none";
}
function changetime() {
    const msg1 = document.getElementById("smallpaper");
    if (msg1.style.display === "block") {
        msg1.style.display = "none";
    }
    const msg2 = document.getElementById("papertext");
    if (msg2.style.display === "block") {
        msg2.style.display = "none";
    }
    const msg3 = document.getElementById("timePicker");
    if (msg3.style.display === "block") {
        msg3.style.display = "none";
    }
    else{
        document.getElementById("timePicker").style.display = "block";
        const timePicker = document.getElementById("timePicker");
        const result = document.getElementById("result");

        timePicker.addEventListener("input", () => {
            const selectedTime = timePicker.value;
            console.log(selectedTime);
            if (selectedTime === "19:30") {
                document.getElementById("papertext").style.display = "block";
                document.getElementById("smallpaper").style.display = "block";
            }

        });
    }   
}
function remotecode() {
    const msg1 = document.getElementById("passshape");
    if (msg1.style.display === "block") {
        msg1.style.display = "none";
    }
    const msg2 = document.getElementById("pad");
    if (msg2.style.display === "block") {
        msg2.style.display = "none";
    }
    const msg3 = document.getElementById("screen");
    if (msg3.style.display === "block") {
        msg3.style.display = "none";
    }else{
    document.getElementById("pad").style.display = "block";
    document.getElementById("screen").style.display = "block";
    }
}
let code = "";
function press(number) {
    if (code.length >= 4) return;
    code += number;
    document.getElementById("screen").innerText = code;
    if (code.length === 4) {
        checkCode();
    }
}

function checkCode() {
    if (code === "1310") {
        document.getElementById("passshape").style.display = "block";
    }
    else {
        document.getElementById("result").innerHTML = "看來不是這個數字...試試看別的吧";
    }
}

function clearCode() {
    code = "";
    document.getElementById("screen").innerText = "----";
}

nextBtn.addEventListener('click', () => {
    currentStep++;

    if (currentStep < script.length) {
        speakerName.innerText = script[currentStep].name;
        dialogueText.innerText = script[currentStep].text;

        if (currentStep === script.length - 1) {
            interactionZone.classList.remove('hidden');
        }

    } else {
        dialogueText.innerText = "請開始調查場景中的物品。";
        document.getElementById("livrscene").style.display = "block";
        
        nextBtn.style.display = "none";
    }
});


function collectItem(itemName, event) {
    if (!inventory.includes(itemName)) {
        inventory.push(itemName);

        document.getElementById('inventory-list').innerText =
            inventory.join(", ");

        narration.innerText =
            `旁白：你撿起了 ${itemName}，這似乎隱藏著某段回憶...`;

        // 隱藏按鈕
        event.target.style.display = "none";
    }
}