# TUTORIAL
# Egg and Spoon race

The [Egg and Spoon](https://en.wikipedia.org/wiki/Egg-and-spoon_race) race is a game where a player carries an object (like an egg) across some distance without it falling out of a holder. In the case of the Egg and Spoon, the player must carefully walk with an egg held in a spoon. The egg must remain in the spoon until the player crosses the finish line. The egg can easily roll out of the spoon so the player needs skill and patience to balance the egg until finishing the race.

You can program your @boardname@ to be an egg and let your hand be the spoon. If you walk too fast or waver in holding the @boardname@, you might "drop the egg!". Try to keep the balance point in the center of the screen.

```blocks
let accY = 0
let accX = 0
let y = 0
let x = 0
basic.forever(() => {
    led.plot(x, y)
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX < -150 && x > 0) {
        x += -1
    } else if (accX > 150 && x < 4) {
        x += 1
    }
    if (accY < -150 && y > 0) {
        y += -1
    } else if (accY > 150 && y < 4) {
        y += 1
    }
    basic.pause(500)
    basic.clearScreen()
})
x = 2
y = 2
```


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