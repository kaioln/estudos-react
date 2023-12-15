export const Events = () => {

    const handleMyEvent = (e) => {

        console.log(e);

        console.log('Ativou o Evento!');
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    );
}