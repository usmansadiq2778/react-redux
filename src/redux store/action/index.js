const set_data = () => {
    return (dispatch) => {
        dispatch({
            type: 'set_data',
        });
        console.log('han bhai chl rha ha');
    };
};
export { set_data };
