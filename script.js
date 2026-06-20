```css id="f8q2vm"
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:"Malgun Gothic", sans-serif;
    background:#f5f7fb;
    padding:20px;
    text-align:center;
}

h1{
    margin-bottom:20px;
}

.controls{
    margin-bottom:30px;
}

textarea{
    width:320px;
    height:300px;
    padding:10px;
    font-size:14px;
    border:1px solid #ccc;
    border-radius:8px;
}

button{
    display:block;
    margin:15px auto;
    padding:12px 24px;
    font-size:16px;
    border:none;
    border-radius:8px;
    background:#1976d2;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#1565c0;
}

.teacher{
    width:200px;
    margin:20px auto 40px auto;
    padding:15px;
    background:#ffd54f;
    border-radius:10px;
    font-weight:bold;
    font-size:20px;
}

#classroom{
    display:flex;
    justify-content:center;
    gap:50px;
    align-items:flex-start;
    flex-wrap:wrap;
}

.section{
    display:grid;
    grid-template-columns:repeat(2,120px);
    gap:10px;
}

.section-wrapper{
    display:flex;
    flex-direction:column;
    align-items:center;
}

.section-title{
    margin-bottom:10px;
    font-size:18px;
    font-weight:bold;
}

.seat{
    width:120px;
    height:70px;
    background:white;
    border:2px solid #90caf9;
    border-radius:8px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    box-shadow:0 2px 4px rgba(0,0,0,0.1);
}

.seat-number{
    font-size:12px;
    color:#666;
}

.student-name{
    font-size:15px;
    font-weight:bold;
}

.empty{
    background:#e0e0e0;
    border-color:#bdbdbd;
}

.empty .student-name{
    color:#777;
}
```
