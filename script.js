body {
    font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
    background-color: #f4f6f9;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 1000px;
    text-align: center;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

h1 {
    color: #2c3e50;
    margin-bottom: 25px;
}

/* 교탁 스타일 */
.teacher-desk {
    width: 220px;
    height: 45px;
    background-color: #7f8c8d;
    color: white;
    line-height: 45px;
    margin: 0 auto 35px auto;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
}

/* 교실 전체 레이아웃 (3개 분단 가로 배치) */
.classroom {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 35px;
    flex-wrap: wrap; /* 화면이 좁아지면 아래로 내려가도록 보장 */
}

.group-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.group-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    color: #34495e;
    background: #e1e8ed;
    padding: 4px 15px;
    border-radius: 10px;
}

/* 분단 내부 Grid 설정 (확실하게 2열 구조 고정) */
.column-group {
    display: grid;
    grid-template-columns: repeat(2, 80px); /* 가로 2열, 각 자리 80px */
    gap: 12px;
    background-color: #fdfdfd;
    padding: 15px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    min-height: 200px;
}

/* 학생 의자/책상 스타일 (눈에 확 띄는 사각형 구조) */
.seat {
    width: 80px;
    height: 60px;
    background-color: #3498db;
    color: white;
    border: 2px solid #2980b9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 행 표시 레이블 소텍스트 */
.seat .seat-label {
    font-size: 10px;
    opacity: 0.85;
    margin-bottom: 3px;
}

/* 2분단 5행 우측 공백 자리 전용 스타일 */
.seat.empty {
    background-color: #e9ecef;
    border: 2px dashed #ced4da;
    color: #adb5bd;
    box-shadow: none;
}

/* 하단 버튼 및 가이드 */
.controls {
    margin-top: 25px;
}

button {
    padding: 15px 45px;
    font-size: 18px;
    font-weight: bold;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
    transition: all 0.2s ease;
}

button:hover {
    background-color: #c0392b;
    transform: translateY(-1px);
}

.notice {
    font-size: 13px;
    color: #7f8c8d;
    margin-top: 15px;
}
