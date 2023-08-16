import { Configuration, OpenAIApi } from 'openai';

const KEY = 'openai-history';
const apiKey = localStorage.getItem('GPT_API_KEY') || '';

const configuration = new Configuration({
    apiKey,
});

delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);

const saveItem = (item: any) => {
    const existingList = getItem();
    existingList.push(item);
    localStorage.setItem(KEY, JSON.stringify(existingList));
};

const getItem = (): any[] => {
    const existingList = localStorage.getItem(KEY);
    return existingList ? JSON.parse(existingList) : [];
};

export { openai, saveItem, getItem };
