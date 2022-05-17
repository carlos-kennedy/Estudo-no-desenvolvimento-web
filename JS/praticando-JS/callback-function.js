function uGotIt(answer) {
    console.log('Você entedeu antes de executa o callback?')
    answer()
}

uGotIt(
    () => {
        console.log('Sim')
    }
)