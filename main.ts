//% color=#615eff icon="\uf2f2"
namespace timers {
    let timerBase: number[] = []
    let timerNames: string[] = []


    //% block="start timer %name"
    export function startTimer(name: string) {
        timerNames.push(name)
        timerBase.push(input.runningTime())
    }

    //% block="check timer %name"
    export function checkTimer(name: string) {
        return input.runningTime() - timerBase[timerNames.indexOf(name)]
    }

    //% block="reset timer %name"
    export function resetTimer(name: string) {
        timerBase.set(timerNames.indexOf(name), input.runningTime())
    }

    //% block="stop timer %name"
    export function stopTimer(name: string) {
        timerBase.removeAt(timerNames.indexOf(name))
        timerNames.removeAt(timerNames.indexOf(name))
    }
}