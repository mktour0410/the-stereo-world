controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tutorial()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    color.FadeToBlack.startScreenEffect()
    game.gameOver(false)
})
function level_3 () {
    game.splash("stereo step-up")
    mySprite.setPosition(0, 85)
    tiles.setCurrentTilemap(tilemap`level4`)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . f 7 7 f . f f f f . f 7 7 f . 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            . f 7 7 f . f f f f . f 7 7 f . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . f 7 7 f . f f f f . f 7 7 f . 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            . f 7 7 f . f f f f . f 7 7 f . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . f 7 7 f . f f f f . f 7 7 f . 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            . f 7 7 f . f f f f . f 7 7 f . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `],
        100,
        false
        )
        mySprite.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    level_2()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spike0`, function (sprite6, location6) {
    game.over(false, effects.dissolve)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    game.reset()
})
function level_2 () {
    game.splash("stereo cavern")
    mySprite.setPosition(0, 85)
    tiles.setCurrentTilemap(tilemap`level7`)
}
function level_1 () {
    game.splash("stereo madness", "(not like the iconic gd level)")
    mySprite.setPosition(0, 85)
    tiles.setCurrentTilemap(tilemap`Stereo Madness`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`upsidedown spike0`, function (sprite5, location5) {
    game.over(false, effects.dissolve)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`1-2`, function (sprite2, location2) {
    game.over(true, effects.dissolve)
    pause(5000)
    game.reset()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    level_3()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`small spike0`, function (sprite, location) {
    game.over(false, effects.dissolve)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    game.reset()
})
function tutorial () {
    game.splash(" stereo switch-up")
    mySprite.setPosition(0, 85)
    tiles.setTilemap(tilemap`level1`)
}
function Daniel () {
    game.splash("Congratulations", "You Have Reached...")
    tiles.setCurrentTilemap(tilemap`level6`)
    game.splash("Stereo DANless")
    mySprite.setPosition(3, 32)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    level_1()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . f 7 7 f . f f f f . f 7 7 f . 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            . f 7 7 f . f f f f . f 7 7 f . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . f 7 7 f . f f f f . f 7 7 f . 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            . f 7 7 f . f f f f . f 7 7 f . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . f 7 7 f . f f f f . f 7 7 f . 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            . f 7 7 f . f f f f . f 7 7 f . 
            . . f 7 7 f . . . . f 7 7 f . . 
            . . . f 7 7 f . . f 7 7 f . . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f 7 7 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f 9 9 f . . f 7 7 f 
            f 7 7 f . . f f f f . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f . . . . . . . . f 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            `],
        100,
        false
        )
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite5, location5) {
    game.over(false, effects.dissolve)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`small spike`, function (sprite4, location4) {
    game.over(false, effects.dissolve)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`1-1`, function (sprite2, location2) {
    Daniel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`upsidedown spike`, function (sprite3, location3) {
    game.over(false, effects.dissolve)
    pause(2000)
    color.FadeToBlack.startScreenEffect()
    game.reset()
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaacccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaccccccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaccccccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaccccccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaaaaaaaacccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccccccccccccccccccccccccccc
    aacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccccccccccccccccccccccccccc
    aacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaaaacccaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccaccc
    cccccccccccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    cccccccccccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    cccccccccccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaacccaccc
    aaaaaaaacccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    ccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaacccaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaacccaaaaaaccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaaccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaaccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccccccccccccccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccccccccccccccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccccccccccccccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaacccaaaaaaaaaacccaaaaaaaaaaaaaaacccaaaaaacccaaaaaaaaaaaccc
    `)
game.splash("The Stereo World")
game.splash("Click An arrow For A Level")
game.splash("VERY IMPORANT", "Click b To Kill Yourself")
mySprite = sprites.create(assets.image`player cube`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`stereo DANless portal`)
mySprite.ay = 400
mySprite.vx = 100
mySprite.setPosition(0, 85)
mySprite.startEffect(effects.coolRadial)
scene.cameraFollowSprite(mySprite)
scroller.scrollBackgroundWithSpeed(-5, 0)
music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
