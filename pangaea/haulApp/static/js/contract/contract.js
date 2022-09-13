
$(document).ready(function(){
    var els = document.querySelectorAll(".selectize");
    els.forEach(function(select){
        NiceSelect.bind(select);
    });

    $("input[name=price]").on("change keyup paste", function() {
        inputNumberFormat(this);

        // 한글 금액표기
        priceStr = this.value;
        parent_div = $(this).parent("div").parent("div");
        if(priceStr) {
            priceKr = String(parseInt(uncomma(priceStr)) * 10000);
            convVal = numberToKorean(priceKr);

            parent_div.find(".price-kor").text(convVal);
        }
        else {
            parent_div.find(".price-kor").text('');
        };
    });

    $("input:radio[name=contract]").change(function() {
        var contract_type = $('input[name="contract"]:checked').val();
        if (contract_type == 1) {
            $("#sec_price").find("h5").text("매매가");
            $("#sec_price").find(".item-name").find("p").text("매매가");
            $("#sec_rental").hide();
            $("#sec_middle_pay").show();
        }
        else if (contract_type == 2) {
            $("#sec_price").find("h5").text("보증금");
            $("#sec_price").find(".item-name").find("p").text("보증금");
            $("#sec_rental").hide();
            $("#sec_middle_pay").hide();
        }
        else if (contract_type == 3) {
            $("#sec_price").find("h5").text("보증금");
            $("#sec_price").find(".item-name").find("p").text("보증금");
            $("#sec_rental").show();
            $("#sec_middle_pay").hide();
        }
    })

    var selectTarget = $('#test-id');
    selectTarget.change(function(){
        var target_val = $(this).children('option:selected').text();
    });

    $('#opt_rentar_day').change(function() {
        var select_val = $(this).children('option:selected').val();
        if (select_val == 1) {
            $('#txt_rentar_day').val("");
            $('#txt_rentar_day').attr("disabled", false);
        }
        else {
            if (select_val == 2) {
                if ($('#day_balance').val()) {
                    var day = new Date($('#day_balance').val()).getDate();
                    $('#txt_rentar_day').val(day);
                } else { $('#txt_rentar_day').val(""); }
            }
            else if (select_val == 3) {
                var startDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
                $('#txt_rentar_day').val(startDate.getDate());
            }
            else if (select_val == 4) {
                var endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
                $('#txt_rentar_day').val(endDate.getDate());
            }
            $('#txt_rentar_day').attr("disabled", true);
        }
    });
});

function comma(str) {str = String(str); return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');}
function uncomma(str) { str = String(str); return str.replace(/[^\d]+/g, ''); }
function inputNumberFormat(obj) { obj.value = comma(uncomma(obj.value)); }
function inputOnlyNumberFormat(obj) { obj.value = onlynumber(uncomma(obj.value)); }
function onlynumber(str) { str = String(str); return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1'); }

// 금액표기 한글 변환
function numberToKorean(number) {
    var inputNumber = number < 0 ? false : number;
    var unitWords = ["", "만", "억 ", "조 ", "경 "];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = "";

    for (var i = 0; i < splitCount; i++) {
        var unitResult =
            (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
            unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
            resultArray[i] = unitResult;
        }
    }
    for (var i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString.trimEnd() + '원';
}