// tests go here; this will not be compiled when this package is used as an extension.

timers.startTimer("test")

basic.forever(() => {
    basic.showNumber(timers.checkTimer("test"))
    basic.pause(1000)
})

input.onButtonPressed(Button.A, function() {
    timers.resetTimer("test")
})

input.onButtonPressed(Button.B, function() {
    timers.stopTimer("test")
})