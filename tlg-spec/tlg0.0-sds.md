# TLG0.0 Structured Data Stream (SDS)
```
ファイルヘッダ [11bytes]
    (char*6)    #"TLG0.0"
    (u8)        #00
    (char*3)    #"sds"
    (u8)        #1a

中身のサイズ [4bytes]
    (i32LE)     Raw data size

画像本体 [(Raw data size) bytes]

チャンクデータ(チャンクエントリが0個以上)
    チャンクエントリ [8+(Chunk size) bytes]
        チャンク名 [4bytes]
            (char*4)    Chunk name
        チャンクサイズ [4bytes]
            (i32LE)     Chunk size
        チャンク本体 [(Chunk size) bytes]
    [...チャンクエントリの繰り返し...]
```

## タグデータチャンク
チャンクエントリのうち、`Chunk name`が`#"tags"`のチャンクはタグデータチャンクとして扱う
```

```
