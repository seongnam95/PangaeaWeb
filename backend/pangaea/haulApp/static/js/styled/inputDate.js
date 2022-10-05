var today = new Date(); // 오늘 날짜
var date = new Date();
var parent_ipt = new Object();

$(document).ready(function () {
    $('.ipt-date').attr('maxlength', 8);
    $('.ipt-date').attr('placeholder', "예) 20220918");
    $('.ipt-date').attr('oninput', "this.value=this.value.replace(/[^0-9]/g,'');");
    $('.ipt-date').attr('autocomplete', "off);");
    
    // 날짜 선택 버튼 클릭 이벤트
    $('button[name="btnDate"]').click(function () {
        parent_ipt = $(this).siblings('.ipt-date');
        
        var datatimeRegexp = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
        if (datatimeRegexp.test(parent_ipt.val())) { today = new Date(parent_ipt.val()); }
        
        show_date_pop(parent_ipt);
    });
    
    // 테이블 클릭 이벤트
    $('#pop_calendar_table').on('click', 'td', function (e) {
        var select_date = e.target;
        
        if ($(select_date).text()) {
            today.setDate($(select_date).text());
            var v_today = toStringByFormatting(today);
            parent_ipt.val(v_today);
            
            $("#pop_calendar").css("display", "none");
        }
    });
    
    // 날짜 인풋 정규식
    $('.ipt-date').focusin( function () { $(this).val($(this).val().replace(/[^0-9]/g,"")); });
    $('.ipt-date').focusout( function () {
        var v_date = $(this);
        
        if (v_date.val().length === 8) {
            let number = v_date.val();
            let ymd = "";
            
            ymd += number.substr(0, 4);
            ymd += "-";
            ymd += number.substr(4, 2);
            ymd += "-";
            ymd += number.substr(6);
            
            v_date.val(ymd);
        }
    });
})

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
    var pop_date = $("#pop_calendar");
    if(pop_date.has(e.target).length === 0){
        pop_date.css("display", "none");
    };
})

function show_date_pop(parent) {
    var el_pop_date = $("#pop_calendar");
    var v_parent_offset = parent.offset();
    
    el_pop_date.css("display", "block");
    el_pop_date.css({'left': v_parent_offset.left + parent.width() + 60,
                     'top': v_parent_offset.top});
    
    build();
}

//이전 달을 today에 값을 저장
function beforem() { 
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    build(); //만들기
}

//다음 달을 today에 저장
function nextm() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    build();
}

function build() {
    var nMonth = new Date(today.getFullYear(), today.getMonth(), 1); //현재달의 첫째 날
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); //현재 달의 마지막 날
    var selDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); //선택한 날
    
    var tbcal = document.getElementById("pop_calendar_table"); // 테이블 달력을 만들 테이블
    var yearmonth = document.getElementById("yearmonth"); //  년도와 월 출력할곳

    document.getElementById("btn_year").innerText = today.getFullYear() + "년";
    document.getElementById("btn_month").innerText = (today.getMonth() + 1) + "월";

    // 남은 테이블 줄 삭제
    while (tbcal.rows.length > 0) {
        tbcal.deleteRow(tbcal.rows.length - 1);
    }

    var row = null;
    row = tbcal.insertRow();
    var cnt = 0;
    var cell = {}

    // 1일 시작칸 찾기
    for (var i = 0; i < nMonth.getDay(); i++)  {
        cell = row.insertCell();
        cnt = cnt + 1;
    }

    // 달력 출력
    for (var i = 1; i <= lastDate.getDate(); i++) { 
        cell = row.insertCell();
        cell.innerHTML = i;

        cnt = cnt + 1;
        if (cnt % 7 == 1) {     //일요일 계산
            cell.innerHTML = "<font color=#FF9090>" + i//일요일에 색
        }
        if (cnt % 7 == 0) {     // 1주일이 7일 이므로 토요일 계산
            cell.innerHTML = "<font color=#7ED5E4>" + i //토요일에 색
            row = pop_calendar_table.insertRow();   // 줄 추가
        }
        if (i == selDate.getDate()) {
            cell.innerHTML = "<b>" + i + "</b>";
            $(cell).css('color', 'var(--main-color)');
            $(cell).css('background-color', 'rgb(243,243,243)');
        }
    }
}

function leftPad(value) {
    if (value >= 10) { return value; }
    return `0${value}`;
}

function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}
