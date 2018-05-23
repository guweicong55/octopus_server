export default (data) => {
    let def = {
        code: 200,
        status: 1,
        msg: '',
        data: ''
    }

    return Object.assign({}, def, data);
}