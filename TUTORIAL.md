# TUTORIAL
7 Sekunden Spiel
Einführung @unplugged
Das Ziel dieses Spiels ist es, nach genau 7 Sekunden einen Knopf zu drücken !

Ein micro:bit mit Blick auf eine 7-Sekunden-Stoppuhr

Dieses Spiel ist vom Flipping Panckakes Spiel inspiriert .

Schritt 1
Der Player startet den Timer durch Drücken der Taste A . Fügen Sie den Code hinzu, um Code auszuführen, wenn ||input:button A is pressed||.

input.onButtonPressed(Button.A, function () {
	
})
Schritt 2
Wir müssen uns die Zeit merken, zu der die Taste gedrückt wurde, damit wir später die verstrichene Zeit berechnen können. Fügen Sie Code hinzu, um das ||input:running time||in einer ||variables:start||Variablen zu speichern .

let start = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    start = input.runningTime()
})
Schritt 3
Zeigen Sie etwas auf dem Bildschirm an, damit der Benutzer weiß, dass der Timer gestartet wurde...

let start = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    // @highlight
    basic.showIcon(IconNames.Chessboard)
})
Schritt 4
Der Player stoppt den Timer durch Drücken der Taste B . Fügen Sie den Code hinzu, um Code auszuführen, wenn ||input:button B is pressed||.

input.onButtonPressed(Button.B, function () {
	
})
Schritt 5
Berechne die verstrichene Zeit als ||input:running time|| ||math:minus|| ||variables:start||und speichere sie in einer neuen Variablen ||variables:elapsed||.

let start = 0
let elapsed = 0
input.onButtonPressed(Button.B, function () {
    // @highlight
    elapsed = input.runningTime() - start
})
Schritt 6
Berechnen Sie die ||variables:score||des Spiels , wie die ||math:absolute value||von der ||math:difference||der ||variables:elapsed||Zeit von 7 Sekunden, die 7000 Millisekunden.

let start = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    // @highlight
    score = Math.abs(elapsed - 7000)
})
Schritt 7
Zeigen Sie die Punktzahl auf dem Bildschirm an und Ihr Spiel ist fertig!

let start = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.abs(elapsed - 7000)
    // @highlight
    basic.showNumber(score)
})