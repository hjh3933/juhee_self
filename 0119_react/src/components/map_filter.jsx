import { useRef, useState } from 'react';

export function MapPrac() {
  const [list, setList] = useState(['a', 'b', 'c', 'd', 'e']);
  return (
    <>
      <ol>
        {list.map((value) => {
          return <li>{value}</li>;
        })}
      </ol>
    </>
  );
}
export function MapPrac2() {
  const [list, setList] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'b' },
    { id: 3, alpha: 'c' },
    { id: 4, alpha: 'd' },
    { id: 5, alpha: 'e' },
  ]);
  return (
    <>
      <ol>
        {list.map((value) => {
          return <li key={value.id}>{value.alpha}</li>;
        })}
      </ol>
    </>
  );
}
export function MapPrac3() {
  const [list, setList] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'b' },
    { id: 3, alpha: 'c' },
    { id: 4, alpha: 'd' },
    { id: 5, alpha: 'e' },
  ]);
  const [text, setText] = useState('');
  function addAlpha() {
    if (text.length < 1) {
      return alert('알파벳을 입력하세요!');
    }
    setList(list.concat({ id: list.length + 1, alpha: text }));
  }
  function deleteAlpha(id) {
    setList(
      list.filter((li) => {
        return li.id !== id;
      }),
    );
  }
  return (
    <>
      <div>
        <input type="text" name="alpha" id="alpha" onChange={(e) => setText(e.target.value)} />
        <input type="button" value="추가" onClick={addAlpha} />
      </div>
      <ol>
        {list.map((value) => {
          return (
            <li
              key={value.id}
              onDoubleClick={() => {
                deleteAlpha(value.id);
              }}
            >
              {value.alpha}
            </li>
          );
        })}
      </ol>
    </>
  );
}
let animals = ['dog', 'cat', 'rabbit'];

let newAnimals = animals.filter((animal) => {
  return animal.length > 3;
});
console.log(newAnimals);
// newAnimals = [rabbit]
