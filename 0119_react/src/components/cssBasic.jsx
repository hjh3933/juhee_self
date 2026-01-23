// import '../styles/cssBasic.css';
import styled from 'styled-components';
import '../styles/sass.scss';

export function CssBasic() {
  // 일반 css
  const childDiv = {
    backgroundColor: 'pink',
    width: '150px',
    height: '50px',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '50px',
  };
  return (
    <>
      <div>
        <div style={childDiv}>안녕하세요!</div>
        <div className="box">이것은 원이다</div>
      </div>
    </>
  );
}

export function StyledComponent() {
  // 태그명 = styled.태그`css내용`
  const H4Title = styled.h4`
    background-color: yellowgreen;
  `;
  const MyBtn = styled.button`
    background-color: black;
    color: white;
    padding: 5px 10px;
    &:hover {
      color: green;
      background-color: gold;
      cursor: pointer;
    }
  `;
  return (
    <>
      {/* PascalCase 이름 사용 */}
      <H4Title>안녕!</H4Title>
      <MyBtn>클릭!</MyBtn>
    </>
  );
}

export function Sass() {
  return (
    <>
      <div>
        <h4>네모네모월드</h4>
        <div className="container">
          <div className="box one">박스</div>
          <div className="box two">박스</div>
          <div className="box three">박스</div>
          <div className="box four">박스</div>
        </div>
      </div>
    </>
  );
}
