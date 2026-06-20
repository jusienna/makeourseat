body {
    font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
    background-color: #f4f6f9 !important;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 1000px;
    text-align: center;
    background: #ffffff !important;
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
    background-color: #7f8c8d !important;
    color: white !important;
    line-height: 45px;
    margin: 0 auto 35px auto;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    display: block !important;
}

/* 교실 전체 레이아웃 (3개 분단 가로 배치) */
.classroom {
    display: flex !important;
    justify-content: center !important;
    gap: 30px !important;
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

/* 분단 내부 Grid 설정 (강제로 가로 2열 책상 배치 고정) */
.column-group {
    display: grid !important;
    grid-template-columns: repeat(2, 100px) !important; /* 무조건 가로 2줄 */
    gap: 15px !important;
    background-color: #fafbfc !important;
    padding: 15px !important;
    border: 2px solid #e2e8f0 !important;
    border-radius: 12px;
}

/* ★ 학생 책상/의자 스타일 (눈에 무조건 보이도록 배경색과 테두리 강화) */
.seat {
    width: 100px !important;
    height: 70px !important;
    background-color: #3498db !important; /* 선명한 파란색 책상 */
    color: #ffffff !important;
    border: 3px solid #2980b9 !important; /* 짙은 파란색 테두리 */
    border-radius: 8px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    font-weight: bold !important;
    font-size: 16px !important;
    box-shadow: 0 4px 6px rgba(0,0,0,0.15) !important;
    box-sizing: border-box !important;
}

/* 행 표시 (예: 1행) */
.seat .seat-label {
    font-size: 11px !important;
    color: #f1f3f5 !important;
    opacity: 0.9;
    margin-bottom: 4px;
    font-weight: normal;
}

/* 2분단 5행 우측 공백 자리 (빈자리 표시) */
.seat.empty {
    background-color: #e9ecef !important;
    border: 3px dashed #ced4da !important;
    color: #adb5bd !important;
    box-shadow: none !important;
}

/* 하단 버튼 제어 */
.controls {
    margin-top: 25px;
}

button {
    padding: 15px 45px;
    font-size: 18px;
    font-weight: bold;
    background-color: #e74c3c !important;
    color: white !important;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}

button:hover {
    background-color: #c0392b !important;
}

.notice {
    font-size: 13px;
    color: #7f8c8d;
    margin-top: 15px;
}
