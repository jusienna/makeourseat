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
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 교실 전체 레이아웃 (3개 분단 가로 배치) */
.classroom {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 35px;
}

.group-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.group-title {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
    color: #34495e;
    background: #e1e8ed;
    padding: 6px 16px;
    border-radius: 20px;
}

/* 분단 내부 Grid 설정 (★ 가로 2열 고정 및 간격 조정) */
.column-group {
    display: grid;
    grid-template-columns: repeat(2, 90px); /* 가로 2열 고정 (각 자리 90px) */
    gap: 12px;
    background-color: #fafbfc;
    padding: 15px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
}

/* 학생 책상/의자 스타일 (진짜 교실 자리처럼 테두리와 음영 부여) */
.seat {
    width: 90px;
    height: 65px;
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    box-sizing: border-box;
}

/* 행 표시 소텍스트 */
.seat .seat-label {
    font-size: 11px;
    opacity: 0.85;
    margin-bottom: 4px;
    font-weight: normal;
}

/* 2분단 5행 우측 공백 자리 전용 스타일 */
.seat.empty {
    background-color: #e9ecef;
    border: 2px dashed #ced4da;
    color: #adb5bd;
    box-shadow: none;
}

/* 하단 버튼 제어 */
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
