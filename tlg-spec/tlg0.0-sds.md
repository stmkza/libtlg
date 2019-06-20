# TLG0.0 Structured Data Stream (SDS)
```
ファイルヘッダ [11bytes]
    (char)  TLG0.0
    (u8)    00
    (char)  sds
    (u8)    1a

中身のサイズ [4bytes]
    (i32LE) Raw data size

画像本体 [(Raw data size) bytes]

タグデータ
```
