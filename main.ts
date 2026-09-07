//% color=#615eff icon="\uf2f2"
namespace timers {
    let timerBase: number[]
    let timerNames: string[]

    function ensureInit() {
        if (timerNames === undefined) {
            timerNames = []
            timerBase = []
        }
    }



    /**
     * Start a new timer with the given name
     * @param name the name to identify this timer
     */
    //% block="start timer %name"
    export function startTimer(name: string) {
        timerNames.push(name)
        timerBase.push(input.runningTime())
    }

    /**
     * Get the elapsed time (ms) since the timer was started
     * @param name the name of the timer
     */
    //% block="check timer %name"
    export function checkTimer(name: string) {
        return input.runningTime() - timerBase[timerNames.indexOf(name)]
    }

    /**
     * Reset a timer back to zero
     * @param name the name of the timer
     */
    //% block="reset timer %name"
    export function resetTimer(name: string) {
        timerBase.set(timerNames.indexOf(name), input.runningTime())
    }

    /**
     * Stop and remove a timer
     * @param name the name of the timer
     */
    //% block="stop timer %name"
    export function stopTimer(name: string) {
        timerBase.removeAt(timerNames.indexOf(name))
        timerNames.removeAt(timerNames.indexOf(name))
    }
}