//import Heart from "./Heart";
import CandyColoredHeart from "./CandyColoredHeart";

//below messages were generated by an AI 
const messages = [
    'cool cud',
    'me my <3',
    'you are bear',
    'team bear',
    'time hug',
    'fang',
    'bog love',
    'me have love',
    'all hover',
    'sweat poo',
    'u hack',
    'stank love',
    'heart me',
    'wink bear',
    'bear bear',
    'be my bear',
    'yank o way',
    'mage love',
    'oy',
    'in a fan'
];

//for .map(), browser will throw a warning unless you have a unique key for every item in the array. In this case, we can use the index parameter that we get from .map() and assign it to a key prop
const HeartsList = () => {
    return (
        <div className="hearts-container">
            {messages.map((message, index) => (
                <CandyColoredHeart key={index} msg={message} />
            ))}
        </div>
    );
}

export default HeartsList;