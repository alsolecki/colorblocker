import Header from './Header.js'
import Square from './Colorbox.js'
import Input from './Searchbox.js'
import Image from './Image.js'
import { useState } from 'react'

function App() {
  
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
        
        <Header 
          title="Color Picker"
        />

      <body className="container">
        <Square 
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
           />
        <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
        <Image />
      </body>

    </div>
  )
}

export default App;
