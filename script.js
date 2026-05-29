const script = [
    { name: "偵探", text: "說到底，私家偵探在現代已經被徵信社取代了吧？至於我的工作內容呢⋯⋯" },
    { name: "孫子", text: "（推門而入）請問您是鼎鼎大名的可以幫人找回故事的偵探嗎？我急需你的幫助。" },
    { name: "偵探", text: "哦，看來有新任務了。歡迎光臨，請問需要什麼幫助呢？" },
    { name: "孫子", text: "我奶奶80歲失智了，醫生建議聊聊童年。但她15歲就離家，可以請你回她老家收集記憶嗎？" },
    { name: "偵探", text: "當然沒問題，交給我吧！這就出發去老家看看。" },
    { name: "旁白", text: "偵探來到了荒廢已久的老家門口，地上散落著一些東西。" },
    { name: "偵探", text: "雖然看的出來房子很久沒住人了，但東西擺放的還滿整齊的…先來看看有什麼吧。" },
    { name: "偵探", text: "是個現代化的的廚房呢！居然還有烤箱，不過沒有瓦斯爐，看來是用灶台煮飯？是特地保留磚頭風格嗎？" },
    { name: "偵探", text: "text of skip" },
    { name: "偵探", text: "看來是這個房間了，（推門）房間居然那麼樸素嗎？" },
    { name: "偵探", text: "text of skip2" },
    { name: "偵探", text: "這些就是我找到的關於您的奶奶的回憶物品，以及這份文件幫你整理了奶奶的童年故事，就讓你決定該如何運用吧。" },
    { name: "孫子", text: "⋯謝謝您。" },
    { name: "孫子", text: "心道：這些回憶對奶奶來說應該會帶來痛苦吧，我還是不要告訴他好了，就用他在我們家的回憶來陪伴她就行了。" },
    { name: "偵探", text: "text of skip3" },

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

nextBtn.addEventListener('click', () => {
    currentStep++;

    if (currentStep < script.length) {
        speakerName.innerText = script[currentStep].name;
        dialogueText.innerText = script[currentStep].text;
    }
    if (currentStep === 7) {
        document.getElementById("livrscene").style.display = "block";
        nextBtn.style.display = "none";
        document.getElementById("dialogue-box").style.display = "none";
    }
    if (currentStep === 9) {
        document.getElementById("kitchenscene").style.display = "block";        
        nextBtn.style.display = "none";
        document.getElementById("dialogue-box").style.display = "none";
    }
    if (currentStep === 11) {
        document.getElementById("bedrscene").style.display = "block";        
        nextBtn.style.display = "none";
        document.getElementById("dialogue-box").style.display = "none";
    }
    if (currentStep === 14) {
        document.getElementById("dialogue-box").style.display = "none";
        document.getElementById("gotopoem").style.display = "block";
    }
});

function closeAllPanels() {
    const panels = [
        "tvmessage",
        "papertext",
        "smallpaper",
        "clockmessage",
        "pad",
        "result",
        "resulttt",
        "steamerresult",
        "screen",
        "timePicker",
        "changetimeuse",
        "passshape",
        "shapelock",
        "key",
        "dialogueBox",
        "dtext",
        "ovenmessage",
        "twmessage",
        "stovemessage",
        "elfwords",
        "stovemessage2",
        "pad1",
        "screen1",
        "moldpass",
        "keyk1",
        "pad2",
        "screen2",
        "dialogueBox1",
        "kwlocked",
        "shapelockk",
        "kwpass",
        "dialogueBox2",
        "beforediarytext",
        "puzzle",
        "puzzlelock",
        "drawer2_paper",
        "drawer2pad",
        "drawer2screen",
        "drawer3pad",
        "drawer3screen",
        "drawer1_paper",
        "d1unlock",
        "d2unlock",
        "d3unlock",
        "keyb"
    ];
    panels.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = "none";
        }
    });
}



function collectItem(itemName) {
    if (!inventory.includes(itemName)) {
        inventory.push(itemName);
        document.getElementById('inventory-list').innerText =
            inventory.join(", ");
    }
}


function showtvMessage() {
    const msg = document.getElementById("tvmessage");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("tvmessage").style.display = "block";
    }
}    
function remotecode() {
    const msg = document.getElementById("pad");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("pad").style.display = "block";
        document.getElementById("screen").style.display = "block";
    }
}
function showMessage3() {
    const msg = document.getElementById("clockmessage");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("clockmessage").style.display = "block";
    }
}
function showMessage4() {
    const msg = document.getElementById("ovenmessage");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("ovenmessage").style.display = "block";
    }
}
function showMessage5() {
    const msg = document.getElementById("stovemessage");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("stovemessage").style.display = "block";
        document.getElementById("elfwords").style.display = "block";
        document.getElementById("stovemessage2").style.display = "block";
    }
}
function showMessage6() {
    const msg = document.getElementById("pad1");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("pad1").style.display = "block";
        document.getElementById("screen1").style.display = "block";
    }
}
function showMessage7() {
    const msg = document.getElementById("twmessage");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("twmessage").style.display = "block";
    }
}
function showMessage9() {
    const msg = document.getElementById("pad2");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("pad2").style.display = "block";
        document.getElementById("screen2").style.display = "block";
        document.getElementById("result").innerHTML = "這個櫃子也打不開⋯這次的委託比想像中累，錢果然很難賺⋯";
    }
}
function showMessage8() {
    const msg = document.getElementById("d1unlock");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("d1unlock").style.display = "block";
    }
}
function shapelock() {
    const msg = document.getElementById("shapelock");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        msg.style.display = "block";
        document.getElementById("result").innerHTML = "嗯?看來需要知道密碼才能打開";
        nextShape(index);
    }
}
const shapes = ["○", "△", "□", "☆"];
let current1 = [0, 0, 0, 0];
function nextShape(index) {
    current1[index]++;
    if (current1[index] >= shapes.length) {
        current1[index] = 0;
    }
    document.getElementById("slot" + index).innerText = shapes[current1[index]];
    checkPattern();
}
function checkPattern() {
    const pattern = current1.join("");
    console.log(pattern);
    if (pattern === "0212") {
        document.getElementById("resulttt").innerHTML ="找到鑰匙了，帶著它走吧！";
        document.getElementById("gotokitchen").style.display = "block";
        document.getElementById("key").style.display = "block";
        collectItem('鑰匙');
    }
    else {
        document.getElementById("resulttt").innerHTML = "嗯?看來需要知道密碼才能打開";
    }
}

function showDialogue() {
    const msg = document.getElementById("dialogueBox");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("dtext").style.display = "none";
        document.getElementById("dialogueBox").style.display = "block";
        
    }
}
let current = 0;
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
        document.getElementById("dtext").style.display = "none";
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

const timePicker = document.getElementById("timePicker");
function changetime() {
    document.getElementById("tvmessage").style.display = "none";
    document.getElementById("passshape").style.display = "none";
    document.getElementById("cookie1").style.display = "none";
    document.getElementById("cookie2").style.display = "none";
    document.getElementById("pad").style.display = "none";
    document.getElementById("screen").style.display = "none";
    document.getElementById("cookie3").style.display = "none";
    document.getElementById("livrdialogue").style.display = "none";
    document.getElementById("key").style.display = "none";
    document.getElementById("clockmessage").style.display = "none";
    document.getElementById("shapelock").style.display = "none";
    if (timePicker.style.display === 'none'){
        timePicker.style.display = "block";
        timePicker.oninput = function () {
            const selectedTime = timePicker.value;
            console.log(selectedTime);
            if (selectedTime === "19:30") {
                document.getElementById("papertext").style.display = "block";
                document.getElementById("smallpaper").style.display = "block";
            } 
        };
    }
    else{
        closeAllPanels();
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
        document.getElementById("result").innerHTML = "電視畫面變了!";
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
let code1 = "";
function press1(number1) {
    if (code1.length >= 4) return;
    code1 += number1;
    document.getElementById("screen1").innerText = code1;
    if (code1.length === 4) {
        checkCode1();
    }
}
function checkCode1() {
    if (code1 === "0227") {
        document.getElementById("moldpass").style.display = "block";
        document.getElementById("keyk1").style.display = "block";
        document.getElementById("pickupckey").style.display = "block";
    }
    if (hasAllKeys()) {
        document.getElementById("gotoroom").style.display = "block";
    }
}
function clearCode1() {
    code1 = "";
    document.getElementById("screen1").innerText = "----";
}

let code2 = "";
function press2(number2) {
    if (code2.length >= 4) return;
    code2 += number2;
    document.getElementById("screen2").innerText = code2;
    if (code2.length === 4) {
        checkCode2();
    }
}
function checkCode2() {
    if (code2 === "0531") {
        showDialogue1();
    }
}
function clearCode2() {
    code2 = "";
    document.getElementById("screen2").innerText = "----";
}

function tokitchen() {
    currentStep++;
    document.getElementById("dialogue-box").style.display = "block";
    nextBtn.style.display = "block";
    document.getElementById("livingroomrelated").style.display = "none";
    document.getElementById("livrscene").style.display = "none";
    document.getElementById("livrdialogue").style.display = "none";
    document.getElementById("shapelock").style.display = "none";
    document.getElementById("resulttt").style.display = "none";
    document.getElementById("no.lock").style.display = "none";
    document.getElementById("gotokitchen").style.display = "none";
}

function showDialogue1() {
    const msg = document.getElementById("dialogueBox1");
    if (msg.style.display === "block") {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
}

let current11 = 1;
function nextstep1() {
    document.getElementById("text11").style.display = "none";
    document.getElementById("text12").style.display = "none";

    current11++;
    if (current11 === 1) {
        document.getElementById("text11").style.display = "block";
    }
    else if (current11 === 2) {
        document.getElementById("text12").style.display = "block";
    }
    else if (current11 === 3) {
        document.getElementById("resulttt").innerHTML ="找到一把鑰匙呢，我要帶它走！";
        document.getElementById("keyk2").style.display = "block";
        document.getElementById("exitstep1").style.display = "block";
        collectItem('黑鑰匙');
        if (hasAllKeys()) {
            document.getElementById("gotoroom").style.display = "block";
        }
    }
}
function exitsteps1() {
    document.getElementById("dialogueBox1").style.display = "none";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("pad2").style.display = "none";
    document.getElementById("keyk2").style.display = "none";
}

function shapelockk() {
    const msg = document.getElementById("shapelockk");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("kwlocked").style.display = "block";
        msg.style.display = "block";
        nextShapek(indexk);
    }
}
const shapesk = ["○", "❤","△", "⟰", "□", "☆", "+"];
let currentk = [0, 0, 0, 0];
function nextShapek(indexk) {
    currentk[indexk]++;
    if (currentk[indexk] >= shapesk.length) {
        currentk[indexk] = 0;
    }
    document.getElementById("slotk" + indexk).innerText = shapesk[currentk[indexk]];
    checkPatternk();
}
function checkPatternk() {
    const patternk = currentk.join("");
    console.log(patternk);
    if (patternk === "6531") {
        document.getElementById("kwlocked").style.display = "none";
        document.getElementById("kwpass").style.display = "block";
        document.getElementById("stickynote").style.display = "block";
    }
    else {
        document.getElementById("resulttt").innerHTML = "打不開⋯怎麼這裡到處都是鎖呢⋯";
    }
}

function hasAllKeys() {
    return inventory.includes('圓鑰匙') &&
           inventory.includes('鑰匙') &&
           inventory.includes('黑鑰匙');
 }

function toroom() {
    currentStep++;
    document.getElementById("dialogue-box").style.display = "block";
    nextBtn.style.display = "block";
    closeAllPanels();
    document.getElementById("kitchenscene").style.display = "none";
    document.getElementById("resulttt").style.display = "none";
    document.getElementById("gotoroom").style.display = "none";
}
function takekey() {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("moldpass").style.display = "none";
    document.getElementById("keyk1").style.display = "none";
    document.getElementById("pad1").style.display = "none";
    collectItem('圓鑰匙');
    document.getElementById("pickupckey").style.display = "none";
}

let board = [
    1,3,6,
    5,0,2,
    4,7,8
];

const correctBoard = [
    1,2,3,
    4,5,6,
    7,8,0
];

function showPuzzle(){
    const msg = document.getElementById("puzzlelock");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        msg.style.display = "block";
        document.getElementById("puzzle").style.display = "block";
        drawPuzzle();
    }

}
function moveSteamer(index){

    let empty = board.indexOf(0);

    if(canMove(index, empty)){

        let temp = board[index];

        board[index] = 0;

        board[empty] = temp;

        drawPuzzle();

        checkPuzzle();

    }

}
function canMove(index, empty){

    if(index == empty-1 && empty%3 != 0)return true;

    if(index == empty+1 && index%3 != 0)return true;

    if(index == empty-3)return true;

    if(index == empty+3)return true;

    return false;

}
function drawPuzzle(){

    for(let i=0;i<9;i++){

        let tile =
        document.getElementById("s"+i);

        if(board[i] == 0){

            tile.innerText = "";

        }
        else{

            tile.innerText = board[i];

        }

    }

}

function checkPuzzle(){
    let correct=true;
    for(let i=0; i<9; i++){
        if(board[i]!=correctBoard[i]){
            correct=false;
            break;
        }
    }
    if(correct){
        document.getElementById("steamerresult").style.display = "block";
    }
}

function toending() {
    document.getElementById("bedrscene").style.display = "none";
    document.getElementById("gotoending").style.display = "none";
    currentStep++;
    document.getElementById("dialogue-box").style.display = "block";
    nextBtn.style.display = "block";
    closeAllPanels();
}

function topoem(){
    document.getElementById("gotopoem").style.display = "none";
    document.getElementById("game-container").style.display = "none";
    nextBtn.style.display = "none";
    const ending = document.getElementById("endingfeature");
    ending.style.display = "flex";
    startEndingAnimation();
    document.getElementById("developingdetails").style.display = "block";
}

function showDialoguebdr() {
    const msg = document.getElementById("dialogueBox2");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        msg.style.display = "block";
        document.getElementById("beforediarytext").style.display = "block";
    }
}

let current2 = 0;
function nextstep2() {
    document.getElementById("textbd1").style.display = "none";
    document.getElementById("textbd2").style.display = "none";
    document.getElementById("textbd3").style.display = "none";
    document.getElementById("textbd4").style.display = "none";
    document.getElementById("textbd5").style.display = "none";
    document.getElementById("textbd6").style.display = "none";
    document.getElementById("textbd7").style.display = "none";
    document.getElementById("textbd7.5").style.display = "none";
    document.getElementById("textbd8").style.display = "none";    
    document.getElementById("textbd9").style.display = "none";
    document.getElementById("textbd10").style.display = "none";
    current2++;
    if (current2 === 1) {
        document.getElementById("beforediarytext").style.display = "none";
        document.getElementById("textbd1").style.display = "block";
    }
    else if (current2 === 2) {
        document.getElementById("textbd2").style.display = "block";
    }
    else if (current2 === 3) {
        document.getElementById("textbd3").style.display = "block";
    }
    else if (current2 === 4) {
        document.getElementById("textbd4").style.display = "block";
    }
    else if (current2 === 5) {
        document.getElementById("textbd5").style.display = "block";
    }
    else if (current2 === 6) {
        document.getElementById("textbd6").style.display = "block";
    }
    else if (current2 === 7) {
        document.getElementById("textbd7").style.display = "block";
    }
    else if (current2 === 8) {
        document.getElementById("textbd7.5").style.display = "block";
    }
    else if (current2 === 9) {
        document.getElementById("textbd8").style.display = "block";
    }
    else if (current2 === 10) {
        document.getElementById("textbd9").style.display = "block";
    }
    else if (current2 === 11) {
        document.getElementById("textbd10").style.display = "block";
        document.getElementById("exitstep2").style.display = "block";
    }
}
function exitsteps2() {
    document.getElementById("dialogueBox2").style.display = "none";
    document.getElementById("gotoending").style.display = "block";
}

function showpaper1(){
    document.getElementById("drawer1_paper").style.display ="block";
}

function showpaper2(){
    document.getElementById("drawer2_paper").style.display ="block";
}

function drawer2code(){
    const msg = document.getElementById("drawer2pad");
    if (msg.style.display === "block") {
        closeAllPanels();
    }
    else{
        closeAllPanels();
        document.getElementById("drawer2pad").style.display = "block";
        document.getElementById("drawer2screen").style.display = "block";
    }
    
}
let code3="";
function press3(number3) {
    if (code3.length >= 4) return;
    code3 += number3;
    document.getElementById("drawer2screen").innerText = code3;
    if (code3.length === 4) {
        checkCode3();
    }
}
function checkCode3() {
    if (code3 === "4761") {
        document.getElementById("d2unlock").style.display = "block";
    }
    else {
        document.getElementById("result").innerHTML = "看來不是這個數字...試試看別的吧";
        document.getElementById("result").style.display = "block";

    }
}
function clearCode3() {
    code3 = "";
    document.getElementById("drawer2screen").innerText = "----";
}
function drawer3code(){
    const msg = document.getElementById("drawer3pad");
    if (msg.style.display === "block") {
        closeAllPanels();
        document.getElementById("result").style.display = "none";
        
    }
    else{
        closeAllPanels();
        document.getElementById("drawer3pad").style.display = "block";
        document.getElementById("drawer3screen").style.display = "block";
    }
}
let code4="";
function press4(number4) {
    if (code4.length >= 4) return;
    code4 += number4;
    document.getElementById("drawer3screen").innerText = code4;
    if (code4.length === 4) {
        checkCode4();
    }
}
function checkCode4() {
    if (code4 === "1594") {
        document.getElementById("d3unlock").style.display = "block";
        document.getElementById("keyb").style.display = "block";
        collectItem("書鑰匙");
    }
    else {
        document.getElementById("result").innerHTML = "看來不是這個數字...試試看別的吧";
        document.getElementById("result").style.display = "block";

    }
}
function clearCode4() {
    code4 = "";
    document.getElementById("drawer3screen").innerText = "----";
}