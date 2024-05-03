function calculateRank(wins, defeats) {
    const difference = wins - defeats
    let level

    if (difference >= 101) {
        level = 'Imortal'
    } else if (difference >= 91) {
        level = 'Lendário'
    } else if (difference >= 81) {
        level = 'Diamante'
    } else if (difference >= 51) {
        level = 'Ouro'
    } else if (difference >= 21) {
        level = 'Prata'
    } else if (difference >= 11) {
        level = 'Bronze'
    } else {
        level = 'Ferro'
    }

    console.log(`O Herói tem de saldo de ${difference} está no nível de ${level}`)
}
