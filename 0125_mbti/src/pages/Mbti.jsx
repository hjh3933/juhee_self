import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SkyblueButton from "../components/SkyblueButton";
import { check, next } from "../store/mbtiSlice";
import Prograss from "../components/prograss";

const Vs = styled.p`
  font-size: 2rem;
  padding-top: 1.5rem;
`;
const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();
  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(el.result));
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Prograss page={page} maxPage={survey.length} />
    </>
  );
}
