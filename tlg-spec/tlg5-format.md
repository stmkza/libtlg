# TLG5 ファイルフォーマット
```
ファイルヘッダ [11bytes]
    (char*6)    #"TLG5.0"
    (u8)        #00
    (char*3)    #"raw"
    (u8)        #1a

画像情報
    (u8)        Color depth
                    #01 :  8bit <<TLG変換ツールにはコードがあるのに、吉里吉里では使用できない>>
                    #03 : 24bit
                    #04 : 32bit
    (i32LE)     Width
    (i32LE)     Height
    (i32LE)     Block height (圧縮するときの縦方向の分割単位)

圧縮ブロックサイズ [4*(Block count)]
    (i32LE)     Block size
    [...圧縮ブロックサイズの繰り返し...]

圧縮された画像データ
    圧縮ブロック

```
