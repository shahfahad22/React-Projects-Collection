import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pswd = "";

    if (upperCase) pswd += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) pswd += "abcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) pswd += "0123456789";
    if (characterAllowed) pswd += "!@#$%^&*()_+[]{}<>?";

    if (!pswd) {
      setPassword("⚠ Select at least one option");
      return;
    }
    let generated = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * pswd.length);
      generated += pswd.charAt(index);
    }
    setPassword(generated);
  }, [length, numberAllowed, characterAllowed, upperCase, lowerCase]);

  
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);


  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied ✅");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">🔐 Password Generator</h1>

        
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Copy
          </button>
        </div>

        
        <div className="space-y-1">
          <label className="font-medium">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

       
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-4 h-4"
            />
            <span> Numbers</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
              className="w-4 h-4"
            />
            <span> Symbols</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={upperCase}
              onChange={() => setUpperCase((prev) => !prev)}
              className="w-4 h-4"
            />
            <span>Uppercase</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={lowerCase}
              onChange={() => setLowerCase((prev) => !prev)}
              className="w-4 h-4"
            />
            <span> Lowercase</span>
          </label>
        </div>

        
        <button
          onClick={passwordGenerator}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
