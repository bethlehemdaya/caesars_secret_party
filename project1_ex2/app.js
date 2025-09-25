const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);



