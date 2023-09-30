import text_data from '../data/text.json';
import { TextJson } from '../types';

export function GetPageText(): TextJson {
    return ParseTextJson();
}

function ParseTextJson(): TextJson {
    const text: TextJson = JSON.parse(JSON.stringify(text_data));
    return text;
}
