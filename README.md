# Wanted Pre-Onboarding 6차 10팀 과제2

## 🌏 배포링크

- http://wanted610.s3-website.ap-northeast-2.amazonaws.com/

### 일반 사용자로 이용하기

```
id : test@test.com
password : test123!
```

<br>

### 관리자로 이용하기

```
id : admin@admin.com
password : admin123!
```

<br>

## 👋 팀원소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/HE-SW">
            <img src="https://avatars.githubusercontent.com/HE-SW" width="140px" /> <br>김한얼</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/eazae">
            <img src="https://avatars.githubusercontent.com/eazae" width="140px" /> <br>신이재</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" /> <br>윤관 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jihyun-jeon">
          <img src="https://avatars.githubusercontent.com/jihyun-jeon" width="140px" /> <br> 전지현</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Dev-jwJeong">
            <img src="https://avatars.githubusercontent.com/Dev-jwJeong" width="140px" /> <br>정재욱</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/qkrwlstjd">
            <img src="https://avatars.githubusercontent.com/qkrwlstjd" width="140px" /> <br> 박진성 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/seungyeonchoo">
            <img src="https://avatars.githubusercontent.com/seungyeonchoo" width="140px" /> <br> 추승연 </a> <br></td>
    </tr>
<tr>
        <td align="center">공통 컴포넌트 구현</td>
        <td align="center">상품 상세 페이지 구현</td>
        <td align="center">상품 등록(관리자) 페이지 구현</td>
        <td align="center">상품 등록 목록 페이지 구현</td>
        <td align="center">상품 목록 페이지 구현</td>
        <td align="center">주문하기 페이지 구현</td>
        <td align="center">주문완료 페이지 구현</td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명](#기능별-설명)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## 프로젝트 개요

### [프루테](https://www.fruitte.co.kr/fruitte)

프라이빗 팜크닉 플랫폼 서비스 프루테의 자체 독립 플랫폼 구성을 위한 프로젝트

- ### 사용자 기능

  - 페이지네이션을 통한 상품 목록 조회
  - 스토어 상품 상세 조회
  - 스토어 상품 주문 (결제 기능은 제외)
  - 스토어 상품 주문 내역 확인

- ### 관리자 기능

  - 스토어 상품 등록 페이지
  - 스토어 상품 목록 페이지

  <br>

> ## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📜product-service.js
 ┃ ┃ ┗ 📜products.js
 ┃ ┣ 📂mocks
 ┃ ┃ ┣ 📜browser.js
 ┃ ┃ ┗ 📜handler.js
 ┃ ┣ 📜Api.js
 ┃ ┗ 📜data.json
 ┣ 📂components
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜CompanyInfo.jsx
 ┃ ┃ ┗ 📜StoreInfo.jsx
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Consult.jsx
 ┃ ┣ 📜Dropdown.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜Input.jsx
 ┃ ┣ 📜LoginModal.jsx
 ┃ ┣ 📜Nav.jsx
 ┃ ┣ 📜Pagination.jsx
 ┃ ┣ 📜ResposiveNav.jsx
 ┃ ┣ 📜Status.jsx
 ┃ ┗ 📜Title.jsx
 ┣ 📂pages
 ┃ ┣ 📂Order
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜BankTransfer.jsx
 ┃ ┃ ┃ ┣ 📜BoxTitle.jsx
 ┃ ┃ ┃ ┣ 📜DeliveryFee.jsx
 ┃ ┃ ┃ ┣ 📜OrderInfo.jsx
 ┃ ┃ ┃ ┣ 📜OrderOption.jsx
 ┃ ┃ ┃ ┣ 📜OrderSummary.jsx
 ┃ ┃ ┃ ┣ 📜OrdererInfo.jsx
 ┃ ┃ ┃ ┣ 📜Payment.jsx
 ┃ ┃ ┃ ┣ 📜PaymentMethod.jsx
 ┃ ┃ ┃ ┣ 📜Product.jsx
 ┃ ┃ ┃ ┣ 📜ProductList.jsx
 ┃ ┃ ┃ ┗ 📜ShippingInfo.jsx
 ┃ ┃ ┗ 📜Order.jsx
 ┃ ┣ 📂OrderContent
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Account.jsx
 ┃ ┃ ┃ ┣ 📜Address.jsx
 ┃ ┃ ┃ ┣ 📜BoxTitle.jsx
 ┃ ┃ ┃ ┣ 📜CreditCard.jsx
 ┃ ┃ ┃ ┣ 📜InfoMenu.jsx
 ┃ ┃ ┃ ┣ 📜OrderTitle.jsx
 ┃ ┃ ┃ ┣ 📜Payment.jsx
 ┃ ┃ ┃ ┣ 📜PaymentDetail.jsx
 ┃ ┃ ┃ ┣ 📜Product.jsx
 ┃ ┃ ┃ ┣ 📜Shipping.jsx
 ┃ ┃ ┃ ┗ 📜TotalPrice.jsx
 ┃ ┃ ┗ 📜OrderContent.jsx
 ┃ ┣ 📂ProductDetail
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂GoodsDetail
 ┃ ┃ ┃ ┃ ┣ 📜GoodsDetailTab.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GoodsInfo.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GoodsQna.jsx
 ┃ ┃ ┃ ┃ ┗ 📜GoodsReview.jsx
 ┃ ┃ ┃ ┣ 📂GoodsTop
 ┃ ┃ ┃ ┃ ┣ 📜GoodsForm.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GoodsImages.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GoodsTop.jsx
 ┃ ┃ ┃ ┃ ┗ 📜SelectedItemQuantitySelector.jsx
 ┃ ┃ ┃ ┗ 📜BreadcrumbHeader.jsx
 ┃ ┃ ┗ 📜ProductDetail.jsx
 ┃ ┣ 📂ProductList
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜ProductItem.jsx
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜ProductList.jsx
 ┃ ┣ 📂Register
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┣ 📜RegisterBox.jsx
 ┃ ┃ ┃ ┃ ┗ 📜RegisterContent.jsx
 ┃ ┃ ┃ ┣ 📜RegisterDescription.jsx
 ┃ ┃ ┃ ┣ 📜RegisterImage.jsx
 ┃ ┃ ┃ ┣ 📜RegisterInfo.jsx
 ┃ ┃ ┃ ┣ 📜RegisterModal.jsx
 ┃ ┃ ┃ ┣ 📜RegisterOption.jsx
 ┃ ┃ ┃ ┣ 📜RegisterOptionList.jsx
 ┃ ┃ ┃ ┣ 📜RegisterPrice.jsx
 ┃ ┃ ┃ ┣ 📜RegisterStatus.jsx
 ┃ ┃ ┃ ┗ 📜RegisterTitle.jsx
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜Register.jsx
 ┃ ┗ 📂RegisterList
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Filter.jsx
 ┃ ┃ ┃ ┣ 📜OptionTable.jsx
 ┃ ┃ ┃ ┣ 📜ProductTable.jsx
 ┃ ┃ ┃ ┗ 📜TdEl.jsx
 ┃ ┃ ┗ 📜RegisterList.jsx
 ┣ 📂store
 ┃ ┗ 📜.gitkeep
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜addComma.js
 ┃ ┗ 📜sliceArr.js
 ┣ 📜App.js
 ┣ 📜Routes.jsx
 ┗ 📜index.js
```

<br>

> ## 기능별 설명

<details>
  <summary>1. 상품 목록 조회</summary>
  
## 상품 목록 조회

- 전체 상품 목록 리스트 조회 후 다시 10개씩 2차원 배열로 구성
- 현재 페이지를 useState로 관리, 페이지네이션의 버튼이 눌릴 때 마다 state값 변경으로 재 구성한 배열의 인덱스 접근
- 상품 목록 리스트의 개별 상품 클릭 시 상품의 id값을 조회하여 상품 상세 조회 페이지로 이동
</details>
<details>
<summary>2. 상품 상세 조회</summary>

## 상품 상세 페이지

### 개요

- 상품 상세 페이지 상단에 홈, 상품목록 홈으로 돌아갈 수 있는 링크
- 상품 이미지 랜더링, 하단에는 thumbnail로 디스플레이 (가로 스크롤)
  - 이미지 클릭시 상단 메인이미지로 크게 뜨도록 동작처리
- 상품 정보: 제목, 요약설명, 원산지, 배송방법, 배송비, 옵션, 판매불가여부, 총 금액, 구매버튼 등을 구현
- 옵션값 조정에 따라 상품 총 금액이 각 옵션탭 별, 총 상품금액에 반영이 되도록 처리

### 상품 상태에 따른 분기처리

- 상품 설명:
  - 상품 status(할인중상품, 베스트상품, 품절상품, 추천상품, 판매대기상품)에 따라 뱃지
    ![image](https://user-images.githubusercontent.com/96093461/188343854-4de12775-5c93-43c7-a506-2f46d3fe7419.png)
- 옵션이 하나인 상품: 옵션 선택 드랍다운 없이 바로 1개의 수량 선택, 옵션 삭제 버튼 생략
- 판매대기인 상품: 네이버페이 부분 제거 및 버튼 비활성화
- 품절 옵션이 포함된 상품: 해당 옵션은 선택이 안되도록 처리
  - 품절 항목의 텍스트는 strike 처리
    <br><img width="200" alt="Screen Shot 2022-09-05 at 10 40 42 AM" src="https://user-images.githubusercontent.com/96093461/188343920-ad0ab35b-d11c-4b78-a2ee-a710e896cc4f.png">
- 재고에 따른 주문가능 수량 제한: 상품 옵션 선택 시 수량이 기본으로 1로 들어가고, **≥1개 이상** **≤재고수량 이하**의 값을 조정할 수 있는 버튼 구현
- 중복된 상품 옵션 선택 시: '이미 선택한 옵션입니다'라는 메세지 출력
- 옵션 선택 삭제 버튼: 경고 안내창을 띄워준 뒤 제거 처리, 총 주문수량 및 총 가격에도 반영

### 상품 정보 탭

- hash link로 해당 탭 클릭 시 대응되는 부분으로 스크롤 되도록 처리
- sticky position으로 탭을 상단에 고정

### 구매하기 버튼 클릭 시

- sessionStorage에 `PROD_SELECTED_OPTION_<상품id>` key값으로 구매정보(상품id, 선택옵션, 배송비) 저장

```
{
  delivery_fee: 0
  options: [
    {opIdx: 1, option: "4kg", quantity: 3, priceSum: 92000},
    {opIdx: 0, option: "2kg", quantity: 1, priceSum: 52000}
  ]
  prodIdx: "5"
}
```

- '구매하기' 페이지로 라우팅

### UI 관련

- 반응형 UI 적용
- 공통 컴포넌트 활용
</details>
<details>
<summary>3. 상품 주문</summary>

## 주문 페이지

### 주문할 상품정보 조회

### 주문자 정보

회원이라면 - 회원정보를 가져와서 입력 미구현

### 배송 정보

- 주문자 정보를 복사
- 주소 선택시 다음api호출

### 주문 상품 정보

- 상품가격과 배송비의 합계

### 결제수단

- 신용카드 미구현
- 무통장입금선택시
- 현금영수증정보입력

</details>
<details>
<summary>4. 상품 주문 내역</summary>

## 주문 내역 확인 페이지

### 개요

- 결제 완료 후 주문 내역 확인 페이지로 이동
- 확인 누르면 홈페이지로 리다이렉트

### 주문 정보 관리

- 주문 페이지에서 입력한 상품정보/결제정보/배송정보를 sessionStorage를 통해 전달받아 조회
- useEffect로 페이지가 처음 렌더링된 이후 sessionStorage를 주문 내역 확인 페이지 내의 useState로 관리
- props를 통해 각 항목에 맞는 정보 전달
- 결제방법 및 회원여부에 따른 컴포넌트 구조 변경

### 홈으로 버튼 클릭 시

- useNavigate를 활용해 '홈으로' 버튼 클릭 시 상품조회 페이지로 이동

### UI 관련

- 반응형 UI 적용

</details>
<details>
<summary>5. 상품 등록</summary>

## 관리자 상품 등록

### 개요

- 관리자 물품 등록할 때 명시적으로 보여지기 위해 항목별로 구분된 입력 구현(입력 항목별 컴포넌트화)
- 전체적인 페이지 색 구성은 프루떼 홈페이지를 참고
- 이미지는 미리보기를 제공하고 쉽게 파일 변경을 할 수 있는 버튼제공
- 입력된 옵션은 바로바로 확인할 수 있게 구현
- 상품 상태관리는 버튼을 통해 쉽게 설정할 수 있게 구현
- 전체적으로 UX에 초점을 둔 기능 개발

### 입력 항목별 컴포넌트화

- 공통적으로 적용되는 스타일의 경우 하나의 공통 컴포넌트를 만들고 children 속성을 활용해서 적용
- 부모 컴포넌트에서 자식 컴포넌트로 data와 data를 변경할 수 있는 setData 함수를 props 해주어서 각 컴포넌트에서 입력값들이 생기면 바로 값을 갱신할 수 있도록 구현

### 이미지 미리보기, 수정, 삭제 기능

![이미지관련](https://user-images.githubusercontent.com/79856086/188420058-51967452-bc5f-4777-a24c-5ec574133771.gif)

- input의 multiple 속성으로 여러 이미지를 동시에 올릴 수 있게 하고 올린 이미지를 미리볼 수 있게 구현.
- input event의 target.files 길이를 활용해 길이가 1이상이면 업로드 버튼을 없애고 0이면 업로드하는 버튼을 보이게 구현
- 이미지를 map을 통해 랜더링 하기 때문에 이 때 넘겨주는 id 값을 이용해서 현재 올린 이미지 경로들 중에 id 번째에 해당하는 값을 갱신하여 이미지 수정할 수 있게 구현. 삭제도 마찬가지로 id값에 해당하는 경로를 없앤 후 다시 랜더링 해주는 방식으로 구현
</details>
<details>
<summary>6. 상품 목록 관리</summary>

## 관리자 상품 목록 페이지

- 경로 : /register_list
- 상품 리스트 데이터를 state로 관리
- 원본 데이터를 가공하여 사용함<br/>
  (이유 : map메소드를 사용하여 렌더할 경우 tr요소가 여러 형제요소로 되기 때문에 key값을 상위 태그에 넣을 수 없어서)
- 상품 삭제 기능 : filter메서드를 이용하여 해당 id값을 제외한 데이터를 반환함.
- 상품 노출 여부 선택기능
- 페이지네이션 : 공통 컴포넌트 재활용
- 상품 검색 기능 : 상태 검색은 UI만 있음
</details>
<details>
<summary>7. 공통 컴포넌트</summary>

## 공통 컴퍼넌트

- src/components
  - Router 에서 Nav, Footer 컴포넌트를 넣어 전체페이지 적용
  - Nav - login state에 따라 Admin, fruitstore 경로 표시 이동
  - 공용 컴포넌트 Input,Button Props 에 따른 자동 완성 기능
- src/api/mockApi
  - msw 라이브러리 사용
  - products_List 를 미리 만들어 놓고 로컬환경에서 mock api 사요
  - findId, getAll, getIsShowTrue, create , updateData, pagenation

</details>

###

</details>
<br>

> ## 미구현 내용

1. 깃 Actions

- 수동배포는 잘 되는데 자동배포는 build 과정에서 알 수 없는 에러가 발생해서 학습 후 해결예정

2. 상세 조회 페이지

- 톡상담은 UI 클릭하면 alert
- 결제 카카오 API

3. 관리자 상품 리스트 페이지

- 리스트 다중 검색
- 테이블 헤더 고정
  <br>

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/FRUITTE/wiki/%EA%B9%83-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/FRUITTE/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

> ## Prettier, Eslint

- ### [코딩 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/FRUITTE/wiki/%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}

```

<br>

> ## 회고

### 윤관

- 프로젝트 초반 회의가 굉장히 어려웠다. 코드 컨벤션, 깃 컨벤션, 그라운드 룰 등 프로젝트를 진행하기 필요한 규칙들을 정하는데 하루를 온종일 투자한 것 같다. 처음이다보니 조금 길어져서 아쉬웠지만, 그만큼 꼼꼼하게 초반 세팅을 마쳐서 다음부터는 금방 프로젝트 개발에 투입될 수 있을거 같아서 다음 프로젝트가 기대된다.
- 명세가 조금 모호해서 어느 수준까지 프로젝트를 구현해야할지 어려웠지만, 팀원들끼리 회의를 통해 차근차근 정하면서 완성된 프로젝트를 할 수 있었다고 생각한다.

### 김한얼

- 어떤 것을 만들어야 할지 초반 기획에서 구체적으로 짜야 이후 회의나, 개발에서 시간을 더욱 단축할수 있을 것같다.
- 라이브러리 사용시 어디서 사용하고 어떤 상황에서 사용하는지 명확하게 알고 적용해야 할지 정확하게 알고 사용해야겠다. (배포시 msw 라이브러리 적용불가로 인한 api 사용안하고, 더미데이터 사용..)

### 박진성

- 초기에 기획. 설계 단계에서 좀 더 꼼꼼하고 확실하게 넘어가고,
  좀 더 작은 단위의 개발의 모음으로 순서대로 개발을 했다면(ex 커먼->상품 등록->상품목록->주문->주문내역)
  기획 단계에서 모자란 부분(수량, 옵션, 배송비) 같은? 빠진 부분을 체크하면서 넘어갔지 않았을까..

### 신이재

- 데이터의 스키마나 구현해야 될 기능들의 구현 명세가 명확하지 않아서 초반에 프로젝트 설계에 시간이 많이 소요된 것 같다.
- 페이지 단위로 기능 개발을 분담하여 빠르게 개발할 수 있었다.

### 전지현

- 관리자 리스트 페이지는 기획을 했어야 했는데 초반에 기획을 더 구체적으로 하여 공통 컴포넌트을 먼저 잡고 갔어야했다.

### 정재욱

- 초반 기획이 오래 걸려도 확실하게 정하고 시작하는게 오히려 시간 절약이 될꺼 같다.

### 추승연

- 컴포넌트 구조를 설정하여 반복되는 코드를 최소화할 수 있도록 고민해야될 것 같다.
  <br>
