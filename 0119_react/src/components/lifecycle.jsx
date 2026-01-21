import { useEffect, useState } from 'react';

export function LifecyclePrac1(props) {
  const { number } = props;
  const [text, setText] = useState('');
  // useEffect[]
  useEffect(() => {
    // mount 시점에 실행
    console.log('mount');
    // unmount 시점에 실행
    return () => {
      console.log('unmount');
    };
  }, []);
  // useEffect
  useEffect(() => {
    // mount & update에 실행
    console.log('update');
  });
  // useEffect[dependencies]
  useEffect(() => {
    // text 업데이트시 실행
    console.log('text update');
  }, [text]);

  return (
    <>
      <p>My Component {number}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}
