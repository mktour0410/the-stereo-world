def on_overlap_tile(sprite, location):
    game.over(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
        """),
    on_overlap_tile)

def on_a_pressed():
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            False)
        mySprite.vy = -200
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    game.over(True, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    game.over(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        spike0
        """),
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    game.over(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        small spike0
        """),
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    game.over(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        upsidedown spike
        """),
    on_overlap_tile5)

def on_overlap_tile6(sprite6, location6):
    game.over(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        small spike
        """),
    on_overlap_tile6)

mySprite: Sprite = None
scene.set_background_color(10)
tiles.set_tilemap(tilemap("""
    level1
    """))
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . f f f f f f f f f f f f f f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f 7 7 f f f f f f f f 7 7 f .
        . f 7 7 f . . . . . . f 7 7 f .
        . f 7 7 f . f f f f . f 7 7 f .
        . f 7 7 f . f 9 9 f . f 7 7 f .
        . f 7 7 f . f 9 9 f . f 7 7 f .
        . f 7 7 f . f f f f . f 7 7 f .
        . f 7 7 f . . . . . . f 7 7 f .
        . f 7 7 f f f f f f f f 7 7 f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f f f f f f f f f f f f f f .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
mySprite.ay = 400
mySprite.vx = 100
mySprite.set_position(0, 85)
mySprite.start_effect(effects.cool_radial)
scene.camera_follow_sprite(mySprite)