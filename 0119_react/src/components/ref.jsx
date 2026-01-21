import { useRef, useState } from 'react';

export function RefPrac1() {
  // 1. dom 요소 접근
  const myRef = useRef();
  function focusOn() {
    myRef.current.focus();
  }
  // 2. 로컬변수로 사용
  const idRef = useRef(1);
  const plusIdRef = () => {
    idRef.current += 1;
    // 증가값이 나옴
    console.log(idRef.current);
  };
  return (
    <>
      <div>
        <div>
          <input type="text" name="" id="" ref={myRef} />
          <input type="button" value="포커스" onClick={focusOn} />
        </div>
        <div>
          <h3>Ref sample</h3>
          {/* 값이 변경 되어도 컴포넌트는 랜더링되지 않음 화면의 값은 그대로 */}
          <div>{idRef.current}</div>
          <button onClick={plusIdRef}>PLUS Ref</button>
        </div>
      </div>
    </>
  );
}
export function RefPrac2() {
  const [bgColor, setBgColor] = useState('');
  const colorRef = useRef();
  const changeColor = () => {
    if (colorRef.current.value === '') {
      return colorRef.current.focus();
    }
    setBgColor(colorRef.current.value);
    colorRef.current.value = '';
    colorRef.current.focus();
  };
  return (
    <>
      <div>
        <div style={{ width: '200px', padding: '5px', backgroundColor: bgColor }}>
          <input type="text" name="color" id="color" ref={colorRef} />
          <button onClick={changeColor}>색 적용</button>
        </div>
      </div>
    </>
  );
}
