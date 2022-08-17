const initial_state = {
    name: 'usman sadiq',
    mail: 'usmansadiq@gmail.com',
    rollnumber: 123,
    data: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initial_state, action) => {
    console.log('action', action);
    return state;
};
