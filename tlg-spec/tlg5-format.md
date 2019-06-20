# TLG5 ファイルフォーマット
```
ファイルヘッダ [11bytes]
    (char*6)    #"TLG5.0"
    (u8)        #00
    (char*3)    #"raw"
    (u8)        #1a

画像情報
    (u8)        Color depth
                    #01 :  8bit
                    #03 : 24bit
                    #04 : 32bit
    (i32LE)     Width
    (i32LE)     Height
```
