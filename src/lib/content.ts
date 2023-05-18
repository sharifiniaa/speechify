const API_URL = "http://localhost:3000/content";

/**
 * Fetch the content from the api
 */
const fetchContent = async () => {
    try {
        const data = await fetch(API_URL);
        return  await data.json();
    }
    catch(err) {
        console.log(err)
    }
};

/**
 * Parse the content into sentences, and return an array of sentences. Look at the Readme for sample input and expected output.
 * Avoid using DOMParser for implementing this function.
 */
const parseContentIntoSentences = (content: string) => {
    const sentencesRegex = /<s>(.*?)<\/s>/g;

    let matches;
    const sentences = [];

    while((matches = sentencesRegex.exec(content)) !== null) {
        const sentence = matches[1];
        sentences.push(sentence);
    }

    return {
        input: content,
        sentences: sentences
    }
};

export { fetchContent, parseContentIntoSentences };
