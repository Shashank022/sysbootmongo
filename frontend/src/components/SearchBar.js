import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";

const doSomethingWith = (info) => {
  console.log("info", info);
}

export default function Search() {
  const [bar, setBar] = useState('');

  return (
    <SearchBar
      value={bar}
      onChange={(newValue) => setBar({ value: newValue })}
      onRequestSearch={() => doSomethingWith(bar)}
    />
  );
}

