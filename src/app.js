
import text from './index.txt';

console.log(`当前状态是：${process.env.NODE_ENV}`);

const say = (text) => console.log(`hello ${text}`)
say(text)