# TLG6 ファイルフォーマット
```
ファイルヘッダ [11bytes]
    (char*6)    #"TLG6.0"
    (u8)        #00
    (char*3)    #"raw"
    (u8)        #1a

画像情報
    (u8)        Color count
                    #01 : 単色
                    #03 : RGB
                    #04 : RGBA
    (u8)        #00     Data flag (not supported yet)
    (u8)        #00     Color type (currently always zero)
    (u8)        #00     External golomb table (currently always zero)
    (i32LE)     Width
    (i32LE)     Height
    (i32LE)     Max bit length

<注意: 途中までしか書いてないよ>
```
