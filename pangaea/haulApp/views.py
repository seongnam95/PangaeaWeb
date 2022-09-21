from django.shortcuts import render


def main(request):
    template = 'main.html'
    return render(request, template)


def contract(request):
    template = 'contract/basic.html'
    context = temp_data(request.GET.get('contract'))
    print(request.GET.get('contract'))
    
    return render(request, template, context)


def temp_data(data=None):
    contract_kind = ['표준임대차 계약서', '분양권']

    # 0: 부동산계약서, 1: 표준임대차계약서, 2: 분양권, 3: 상가임대차계약서, 4: 상가권리금계약서,
    # 5: 권리양도양수, 6: 전대차계약서, 7: 조합원입주권매매계약서
    prop_types = {'부동산': ['아파트', '다세대', '단독·다가구', '오피스텔', '다중주택', '연립주택', '주상복합', '도시형생활주택', '건물', '원룸', '토지'],
                  '대지권': ['소유권', '임차권', '전세권', '지상권', '사용차권'],
                  '토지지목': ['대(垈)', '전', '답', '임야', '과수원', '광천지', '주차장', '도로', '하천', '제방(堤防)', '구거(溝渠)',
                           '유지(溜池)', '양어장', '공원', '유원지', '사적지', '묘지', '잡종지', '염전', '창고용지', '공장용지', '학교용지',
                           '종교용지', '체육용지', '수도용지', '목장용지', '철도용지', '주유소용지'],
                  '구조': ['철근콘크리트', '철골철근콘크리트', '시멘트벽돌조', '시멘트블럭조', '연와조', '철골조', '목조', '석조', '석회조',
                         '철파이프조', '한옥', '통나무', '흙벽돌조', '스틸', '조립식'],
                  '용도': [],
                  5: [],
                  6: [],
                  7: [],
                  }

    # prop_type = prop_types[]
    prop = {'kind': contract_kind, 'type': "a", 'transaction': '월세'}

    context = {'data': data, 'prop': prop}
    return context
