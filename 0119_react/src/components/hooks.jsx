import { useMemo, useReducer, useState } from 'react';
import { reducer } from './numberReducer';

export function MemoPrac() {
  const [isKorea, setIsKorea] = useState(true);
  const [text, setText] = useState('');
  // useMemo: 렌더링 과정에서 특정값(두번째인자)이 바뀌었을 때만 연산(첫번째인자) 수행
  // useMemo(callback, dependency)
  const location = useMemo(() => {
    return { country: isKorea ? 'korea' : 'abroad' };
  }, [isKorea]);
  return (
    <>
      <div>
        <div>나의 나라는 {location.country}</div>
        <button
          onClick={() => {
            setIsKorea(!isKorea);
          }}
        >
          클릭
        </button>
        {/* text로 인해 재랜더링되더라도 memo값은 그대로 */}
        <input
          type="text"
          name="txt"
          id="txt"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </>
  );
}
// useCallback(callback, dependency)
// 값이 아니라 "함수"를 기억한다
// 랜더링될때마다 실행되는 함수는 각각 다른 존재임, 함수를 props로 받거나 할때 사용, 거의 useMemo와 비슷

export function ReducerPrac() {
  // useReducer: 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
  // 복잡한 state를 사용할 때 주로 사용
  // state(상태), dispatch(요구), action(내용), reducer(매개채)
  // const [state, dispatch] = useReducer(reducer, 초기값)
  const [number, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h1>useReducer hooks test</h1>
        <h2>{number}</h2>
        <button
          onClick={() => {
            dispatch('INCREMENT');
          }}
        >
          PLUS
        </button>
        <button
          onClick={() => {
            dispatch('DECREMENT');
          }}
        >
          MINUS
        </button>
        <button
          onClick={() => {
            dispatch('RESET');
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
}
