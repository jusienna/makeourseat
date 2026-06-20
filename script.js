:root {
    --chair-color: #e0e0e0;
    --chair-active: #4ea8de;
    --text-color: #333;
}

body {
    font-family: 'Malgun Gothic', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    color: var(--text-color);
}

.container {
    width: 100%;
    max-width: 900px;
    text-align: center;
}

h1 {
    margin-bottom: 30px;
    color: #2b2d42;
}

/* 교탁 스타일 */
.teacher-desk {
    width: 200px;
    height: 50px;
    background-color: #8d99ae;
    color: white;
    line-height: 50px;
    margin: 0 auto 40px auto;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* 교실 전체 (3분단 가로 정렬) */
.classroom {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 40px;
}

/* 각 분단 스타일 (2열 구조) */
.column-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    flex: 1;
}

/* 학생 의자 스타일 */
.seat {
    height: 55px;
    background-color: var(--chair-color);
    border: 2px solid #bdc3c7;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease;
}

.seat.assigned {
    background-color: var(--chair-active);
    color: white;
    border-color: #0077b6;
}

.seat.empty {
    background-color: #f1f3f5;
    border: 2px dashed #dee2e6;
    color: #adb5bd;
}

.seat .seat-label {
    font-size: 10px;
    opacity: 0.8;
    margin-bottom: 2px;
}

/* 버튼 및 하단 제어 */
.controls {
    margin-top: 20px;
}

button {
    padding: 15px 40px;
    font-size: 18px;
    font-weight: bold;
    background-color: #ef233c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: background 0.2s;
}

button:hover {
    background-color: #d90429;
}

.notice {
    font-size: 13px;
    color: #6c757d;
    margin-top: 15px;
}
