import { useState } from 'react';
import {SpeechEngine, createSpeechEngine} from './speech'

const useSpeech = (sentences: Array<string>) => {
  const [currentSentence, setCurrentSentence] = useState('');
  /*
  Implement a custom useSpeech hook that uses a speech engine defined in 'speech.ts'
  to play the sentences that have been fetched and parsed previously.
  
  This hook should return react friendly controls for playing, and pausing audio as well as provide information about
  the currently read word and sentence
  */
 const sentenceList = [...sentences];

  const speechify  = createSpeechEngine({
    onBoundary: ()=> {},
    onEnd: ()=> {},
    onStateUpdate: () => {}
  })

  speechify.load(sentences[0])

  return {
    controls:{
      play: speechify.play(),
      pause: speechify.pause()
    },
    currentSentence: sentenceList[0],
    currentWord: speechify.state.utterance

  }
};

export { useSpeech };
