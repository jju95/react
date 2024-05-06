
<dd>240503 react study</dd>

------------------------------------------------------------

- CRP : 웹 브라우저에서 HTML을 웹 페이지로 변환하게 되는데, 이 과정을 CRP
- 인터렉션 : 인터렉션은 UI를 포함하는 상위 개념
- 목적 달성 절차를 포함하면 인터렉션이고, 그것을 포함하고 있지 않으면 UI

<br/>


<img src="https://velog.velcdn.com/images/hyeone999/post/ee0d729b-fb8d-4f8c-bb2a-b315c4741a25/image.png" width="600" height="300">

가상돔 : 실제 돔을 메모리에 복사해준것


리액트 가상돔 동작 과정

이전 가상돔 / 변화가 일어난 가상돔 => 둘이 비교 => 변경감지 => 변경된 부분만 real dom에 적용시킴

+) 데이터가 바뀌면 가상돔에 랜더링 되고 이전에 생긴 가상돔과 비교해서 바뀐 부분만 실제 돔에 적용시켜줌. 이때, 바뀐 부분을 찾는 과정을 디핑이라고 하며 바뀐 부분만 실제 돔에 적용시켜주는걸 재조정이라고 부름

장점
변화가 일어날때마다 실제 돔에 적용시키는게 아니고,
실제 돔에는 변화가 된 부분들을 하나로 묶어 적용시키기 때문에 비용이 많이 절감된다



리액트 설치 방법
> npx create-react-app <folder name>

npx: node package support app 


리액트 규칙
-> public 디렉토리 밑에 접근이 필요한 요소들 배치 (이미지,,)
-> src 디렉토리 밑에 js 배치해야함 (웹팩이 모듈화된 js들을 하나로 묶는 번들러 역할을 수행하기때문에)
-> src이외에 js를 놓게 되면 웹팩의 영향을 받을수없음


컴포넌트 
1. 클래스형
2. 함수형 **** (요즘의 트렌드다.)


MPA (multi page application) 
↑↓
SPA => single page application (이미 알고있음......

spa가 쓰는건 history api (화면 바꿔치기 하는것처럼 작동함)
(ex. history.go(?))

** 리액트에서는 history api 역할을
react-router-dom을 사용해서 이동함 


html 대신 jsx
-> javascript syntax extension

jsx ex) 
```javascript
const test = <div>hello world~! </div>;
```

jsx 사용하는 이유는 편의를 위해서</br>

jsx 사용시 주의해야할점 </br>
컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야한다💥

ex)
```javascript
function hello () {
    return (
        <div>
            <div>부모요소로 한번은 감싸기~!</div>
        </div>
    )
}
```


[부모 컴포넌트] => [자식 컴포넌트] 
```javascript
<div>
  <Square value={i} /> =>    <button className="square">
                		  {this.props.value}
		              </button>
</div>
```


props ✨
* properties의 줄임말
* 부모 컴포넌트에서 자식 컴포넌트로 데이터등을 전달해주는 방법
* 읽기 전용으로 자녀 컴포넌트 입장에서 변하지 않음 (데이터 변환시 부모컴포넌트에서 변경을 시켜줘야함) 


컴포넌트 안에서 무언가를 기억하고 싶다면 state를 사용해라


-------------

> <b>State</b> 

컴포넌트 에서 상태값이나 특정값을 기억(=저장)하게 만들려면 
state를 사용해야함


```javascript
export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        };
    }

    render() {
        return (
          <button
            className="square"
            onClick={() => {
              /** state 변경하기 */
              this.setState({ value: "X" });
            }}>
                
            {this.props.value} /** props로 값을 전달받음 */
            {this.state.value} /** state 사용하기 */
          </button>
        );
    }
}
```

  리액트 컴포넌트는 생성자에 this.state를 설정하는것으로 state를 가질수 있다.
  이때, this.state는 정의된 React 컴포넌트에 대해 비공개로 간주해야함. 


react state란 정리하자면,
화면 랜더링 결과물에 영향을 주는 객체다. 
(state 값 변경시 컴포넌트는 re-rendering) 

컴포넌트1 = state<br>
컴포넌트2 = state

그니까 결국은 리액트에서 말하고 싶은것은
객체(컴포넌트)의 어떤 특정값을 지정하거나 기록해야할때 state는 값을 저장해주는 역할로 쓴다는거잖슴...?

근데 그 값은 보통 부모 컴포넌트 한테서 받아오는 값이기 때문에 props로 받고 그걸 인스턴스화 시킬려고 생성자에 props 박아넣고 쓸때 setState로 값을 넘기는거잖슴?

------

자바 스크립트에서 super란...?
- 자식 클래스 내에서 부모 클래스의 생성자를 호출할때 사용
- 자식 클래스 내에서 부모 클래스의 메소드를 호출할때 사용


```javascript
super(argument); // 부모의 생성자 호출  
super.functionOnParent(arguments); // 부모의 메소드 호출 
```

<div style="color:grey;">
*주의점* <br>
문법상 super()가 먼저 나오고 this()가 다음에 나와야 한다.</div>

