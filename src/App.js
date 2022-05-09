import { useState, useEffect } from 'react'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import './App.css';

const messages = {
  'tr-TR': {
    title: 'Yaz',
    description: '{count} yeni mesajınız var'
  },
  'en-US' : {
    title: 'Summer',
    description: 'You have {count} new mesages'

  }
}


function App() {

const isLocal = localStorage.getItem("locale")
const defaultLocale = isLocal ? isLocal : navigator.language

const [locale, setLocale] = useState(defaultLocale)

// when language changed I can write on localstorage(with useEffect) and it can be changed default 
useEffect(() => {
  localStorage.setItem("locale",locale)
}, [locale])


  return (
    <div className="App">
     <IntlProvider locale= {locale} messages = {messages[locale]}>
      <FormattedMessage id="title"/>
      
      <p> <FormattedMessage 
      id="description"
      values={{count:3}}
      
      /> </p>
      
      <br />
      <br />
      <button onClick={() => setLocale('tr-TR')}>TR</button>
      <button onClick={() => setLocale('en-US')}>EN</button>
     </IntlProvider>
     
    </div>
  );
}

export default App;
