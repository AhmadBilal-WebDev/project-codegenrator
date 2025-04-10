import { useCallback, useEffect, useState } from "react";

function Genrator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passswordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passswordGenrator();
  }, [length, numberAllowed, charAllowed, passswordGenrator]);

  const copyClipBord = useCallback(() => {
    window.navigator.clipboard.writeText;
  }, [password]);

  return (
    <div>
      <div className=" max-w-md p-5 mx-auto shadow-md rounded-lg text-white bg-gray-700 px-4 my-8">
        <h1 className="text-4xl text-center mb-5">Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5 bg-white text-black">
          <input
            type="text"
            value={password}
            placeholder="Enter Password"
            className="outline-none w-full py-1 px3 ml-3"
            readOnly
          />
          {/* <button
            onClick={copyClipBord}
            className="bg-blue-500 px-3 py-2 outline-none shrink-0"
          >
            Copy
          </button> */}
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght : {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="char"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genrator;
