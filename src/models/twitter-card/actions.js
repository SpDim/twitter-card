const SET_SHOW_TWITTER_CARDS = 'SET_SHOW_TWITTER_CARDS';
export const setShowTwitterCards = (payload) => ({ type: SET_SHOW_TWITTER_CARDS, payload });
setShowTwitterCards.type = SET_SHOW_TWITTER_CARDS;

const INCREASE_LOADER_COUNTER = 'INCREASE_LOADER_COUNTER';
export const increaseLoaderCounter = (payload) => ({ type: INCREASE_LOADER_COUNTER });
increaseLoaderCounter.type = INCREASE_LOADER_COUNTER;

const REDUCE_LOADER_COUNTER = 'REDUCE_LOADER_COUNTER';
export const reduceLoaderCounter = (payload) => ({ type: REDUCE_LOADER_COUNTER });
reduceLoaderCounter.type = REDUCE_LOADER_COUNTER;

const SET_USERS = 'SET_USERS';
export const setUsers = (payload) => ({ type: SET_USERS, payload });
setUsers.type = SET_USERS;
