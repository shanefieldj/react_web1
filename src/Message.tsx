
function Message() {
    //JSX: Javascript XMl
    const name = 'Jacob';
    if (name)
    return <h1> Hello {name}</h1>;
    else return <h1> Hello Void!</h1>;
}

export default Message;