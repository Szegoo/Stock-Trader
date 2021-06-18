export default ({ src }) => {
    return (
        <div>
            <h1 id="hero-text">Everything is possible.</h1>
            <style>
                {`
                #hero-text {
                    border-bottom: 1px solid #21325b;
                    margin-top: 0;
                    text-align: center;
                    font-size: 2.5em;
                    background-color: #21325b;
                    background: url(${src});
                    color: #21325b;
                    padding-top: 1.5em;
                    padding-bottom: 2.5em;
                    background-attachment: fixed;
                }
            `}
            </style>
        </div>
    )
}