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