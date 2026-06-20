```javascript
// ======================
// 자리 구조
// ======================

// 2분단 마지막 자리(19번)를 빈자리로 사용
const EMPTY_SEAT = 19;

// 시력 학생이 배정될 수 있는 자리
const FRONT_SEATS = [
    0,1,2,3,      // 1분단 1~2행
    10,11,12,13,  // 2분단 1~2행
    20,21,22,23   // 3분단 1~2행
];

let previousSeats = {};
let currentSeats = {};

// ======================
// 이벤트 등록
// ======================

document
.getElementById("generateBtn")
.addEventListener("click", generateSeats);

document
.getElementById("downloadBtn")
.addEventListener("click", downloadExcel);

document
.getElementById("historyFile")
.addEventListener("change", loadHistoryExcel);

document
.getElementById("studentFile")
.addEventListener("change", loadStudentExcel);

// ======================
// 공통 함수
// ======================

function shuffle(arr){

    for(let i=arr.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [arr[i],arr[j]]
        =
        [arr[j],arr[i]];
    }

    return arr;
}

// ======================
// 학생 엑셀 불러오기
// 형식
// 이름 | 성별 | 앞자리
// ======================

function loadStudentExcel(e){

    const file=e.target.files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=function(evt){

        const data=new Uint8Array(evt.target.result);

        const workbook=
        XLSX.read(data,{type:"array"});

        const sheet=
        workbook.Sheets[
            workbook.SheetNames[0]
        ];

        const rows=
        XLSX.utils.sheet_to_json(sheet);

        const boys=[];
        const girls=[];
        const front=[];

        rows.forEach(r=>{

            const name=
            String(r["이름"]||"").trim();

            const gender=
            String(r["성별"]||"").trim();

            const vision=
            String(r["앞자리"]||"").trim();

            if(!name) return;

            if(gender==="남"){
                boys.push(name);
            }
            else{
                girls.push(name);
            }

            if(
                vision==="O" ||
                vision==="o" ||
                vision==="예"
            ){
                front.push(name);
            }

        });

        document
        .getElementById("boys")
        .value=boys.join("\n");

        document
        .getElementById("girls")
        .value=girls.join("\n");

        document
        .getElementById("frontStudents")
        .value=front.join("\n");

        alert("학생 명단을 불러왔습니다.");

    };

    reader.readAsArrayBuffer(file);

}

// ======================
// 이전 자리 엑셀 불러오기
// 이름 | 자리번호
// ======================

function loadHistoryExcel(e){

    const file=e.target.files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=function(evt){

        const data=
        new Uint8Array(evt.target.result);

        const workbook=
        XLSX.read(data,{type:"array"});

        const sheet=
        workbook.Sheets[
            workbook.SheetNames[0]
        ];

        const rows=
        XLSX.utils.sheet_to_json(sheet);

        previousSeats={};

        rows.forEach(r=>{

            previousSeats[
                String(r["이름"]).trim()
            ]
            =
            Number(r["자리번호"]);

        });

        alert("이전 자리 정보를 불러왔습니다.");

    };

    reader.readAsArrayBuffer(file);

}

// ======================
// 자리 배치
// ======================

function generateSeats(){

    const boys=
    document
    .getElementById("boys")
    .value
    .split("\n")
    .map(v=>v.trim())
    .filter(v=>v);

    const girls=
    document
    .getElementById("girls")
    .value
    .split("\n")
    .map(v=>v.trim())
    .filter(v=>v);

    const frontStudents=
    document
    .getElementById("frontStudents")
    .value
    .split("\n")
    .map(v=>v.trim())
    .filter(v=>v);

    if(
        boys.length +
        girls.length !== 27
    ){
        alert("학생 수는 27명이어야 합니다.");
        return;
    }

    if(
        frontStudents.length >
        FRONT_SEATS.length
    ){
        alert("앞자리 학생 수가 너무 많습니다.");
        return;
    }

    currentSeats={};

    // ------------------
    // 시력 학생 먼저 배치
    // ------------------

    let availableFront=
    [...FRONT_SEATS];

    shuffle(availableFront);

    frontStudents.forEach(student=>{

        const seat=
        availableFront.pop();

        currentSeats[seat]=student;

    });

    // ------------------
    // 남학생 자리
    // ------------------

    const maleSeats=[
        0,2,4,6,8,
        10,12,14,16,18,
        20,22,24,26
    ];

    // ------------------
    // 여학생 자리
    // ------------------

    const femaleSeats=[
        1,3,5,7,9,
        11,13,15,17,
        21,23,25,27
    ];

    let remainBoys=
    boys.filter(
        s=>!frontStudents.includes(s)
    );

    let remainGirls=
    girls.filter(
        s=>!frontStudents.includes(s)
    );

    shuffle(remainBoys);
    shuffle(remainGirls);

    fillSeats(
        remainBoys,
        maleSeats
    );

    fillSeats(
        remainGirls,
        femaleSeats
    );

    drawClassroom();

}

// ======================
// 학생 배치
// ======================

function fillSeats(
    students,
    seatList
){

    seatList.forEach(seat=>{

        if(
            currentSeats[seat]
        ) return;

        if(
            seat===EMPTY_SEAT
        ) return;

        let foundIndex=
        students.findIndex(student=>{

            return (
                previousSeats[student]
                !== seat
            );

        });

        if(foundIndex===-1){

            foundIndex=0;

        }

        const student=
        students.splice(
            foundIndex,
            1
        )[0];

        if(student){

            currentSeats[seat]
            =
            student;

        }

    });

}

// ======================
// 교실 그리기
// ======================

function drawClassroom(){

    const classroom=
    document.getElementById(
        "classroom"
    );

    classroom.innerHTML="";

    createSection(
        classroom,
        "1분단",
        0,
        10
    );

    createSection(
        classroom,
        "2분단",
        10,
        20
    );

    createSection(
        classroom,
        "3분단",
        20,
        28
    );

}

// ======================

function createSection(
    parent,
    title,
    start,
    end
){

    const wrapper=
    document.createElement("div");

    wrapper.className=
    "section-wrapper";

    const titleDiv=
    document.createElement("div");

    titleDiv.className=
    "section-title";

    titleDiv.textContent=
    title;

    const section=
    document.createElement("div");

    section.className=
    "section";

    for(
        let i=start;
        i<end;
        i++
    ){

        const seat=
        document.createElement("div");

        seat.className=
        "seat";

        if(
            FRONT_SEATS.includes(i)
        ){
            seat.classList.add(
                "front-seat"
            );
        }

        if(
            i===EMPTY_SEAT
        ){

            seat.classList.add(
                "empty"
            );

            seat.textContent=
            "빈자리";

        }
        else{

            seat.textContent=
            currentSeats[i]
            || "";

        }

        section.appendChild(
            seat
        );

    }

    wrapper.appendChild(
        titleDiv
    );

    wrapper.appendChild(
        section
    );

    parent.appendChild(
        wrapper
    );

}

// ======================
// 결과 엑셀 저장
// ======================

function downloadExcel(){

    const rows=[];

    Object.keys(currentSeats)
    .forEach(seat=>{

        rows.push({
            이름:
            currentSeats[seat],

            자리번호:
            Number(seat)
        });

    });

    const worksheet=
    XLSX.utils.json_to_sheet(rows);

    const workbook=
    XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "자리배치"
    );

    XLSX.writeFile(
        workbook,
        "자리배치결과.xlsx"
    );

}
```
