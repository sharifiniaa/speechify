import { useEffect, useState } from 'react';
import './App.css';

import { Controls } from './components/Controls';
import { CurrentlyReading } from './components/CurrentlyReading';
import { fetchContent, parseContentIntoSentences } from './lib/content';
import { useSpeech } from './lib/useSpeech';

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const { currentWord, currentSentence, controls } = useSpeech(sentences);


  useEffect(() => {
    fetchingData();
  }, []) 

  
  const fetchingData = async () => {
    const {content} = await fetchContent();
    const data = parseContentIntoSentences(content);
    setSentences(data.sentences);

  }


  const handleLoadMore = () => {
    fetchingData();
  }


  return (
    <div className="App">

      <div>
        <CurrentlyReading content={sentences}/>
      </div>
      <div>
        <Controls loadMore={handleLoadMore} onPlay={controls.play}/>
      </div>
    </div>
  );
}

export default App;
