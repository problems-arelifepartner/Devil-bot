
 
 ​/*Elios and Ben*/ 
  
 ​const​ ​{​ GroupSettingChange​,​ WAMessageProto​,​ MessageType​,​ prepareMessageFromContent​,​ relayWAMessage ​}​ ​=​ ​require​(​'@adiwajshing/baileys'​) 
 ​const​ ​{​ exec ​}​ ​=​ ​require​(​'child_process'​)​; 
 ​const​ ​axios​ ​=​ ​require​(​'axios'​) 
 ​const​ ​fs​ ​=​ ​require​(​'fs'​) 
 ​let​ ​FormData​ ​=​ ​require​(​'form-data'​) 
 ​let​ ​fetch​ ​=​ ​require​(​'node-fetch'​) 
 ​const​ ​afkJs​ ​=​ ​require​(​'./lib/afk'​) 
 ​const​ ​moment​ ​=​ ​require​(​'moment-timezone'​)​; 
 ​const​ ​{​ mess​,​ menu​,​ ingfo​,​ listCode ​}​ ​=​ ​require​(​'./lib/text'​) 
 ​const​ ​{​ color​,​ getBuffer​,​ convertMp3 ​}​ ​=​ ​require​(​'./lib/func'​) 
 ​moment​.​tz​.​setDefault​(​'Asia/Jakarta'​)​.​locale​(​'id'​)​; 
 ​module​.​exports​ ​=​ ​handle​ ​=​ ​(​client​,​ ​Client​)​ ​=>​ ​{ 
 ​    ​try​ ​{ 
 ​        ​/*DOWNLOADER*/ 
 ​        ​Client​.​cmd​.​on​(​'ytmp4'​,​ ​async​ ​(​data​)​ ​=>​ ​{ 
 ​            ​try​ ​{ 
 ​                ​if​(​isLimit​(​data​.​sender​)​)​ ​return​ ​data​.​reply​(​mess​.​limit​) 
 ​                ​if​(​data​.​body​ ​==​ ​""​)​ ​return​ ​data​.​reply​(​`Kirim perintah *​${​data​.​prefix​}​ytmp4 [ link ]*\nContoh : ​${​data​.​prefix​}​ytmp4 https://www.youtube.com/watch?v=0maWbr0FHKY`​) 
 ​                ​data​.​reply​(​mess​.​wait​) 
 ​                ​res​ ​=​ ​await​ ​axios​.​get​(​`​${​configs​.​apiUrl​}​/api/ytmp4/2?apikey=​${​configs​.​zeksKey​}​&url=​${​data​.​body​}​`​) 
 ​                ​if​(​res​.​data​.​status​ ​==​ ​false​)​ ​data​.​reply​(​res​.​data​.​message​) 
 ​                ​ytm​ ​=​ ​res​.​data​.​result 
 ​                ​teks​ ​=​ ​`*Data berhasil didapatkan!*\n\n*Judul* : ​${​ytm​.​title​}​\n*Ukuran* : ​${​ytm​.​size​}​\n*Kualitas* : ​${​ytm​.​quality​}​\n*Ext* : ​${​ytm​.​ext​}​\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_` 
 ​                ​if​(​Number​(​ytm​.​size​.​split​(​' MB'​)​[​0​]​)​ ​>=​ ​50.00​)​ ​return​ ​Client​.​sendFileFromUrl​(​data​.​from​,​ ​`​${​ytm​.​thumb​}​`​,​ ​'thumb.jpg'​,​ ​`*Data Berhasil Didapatkan!*\n\n*Title* : ​${​ytm​.​title​}​\n*Ukuran* : ​${​ytm​.​size​}​\n*Kualitas* : ​${​ytm​.​quality​}​\n*Ext* : mp4\n*Link* : ​${​ytm​.​link​}​\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`​,​ ​data​.​message​) 
 ​                ​Client​.​sendFileFromUrl​(​data​.​from​,​ ​`​${​ytm​.​thumb​}​`​,​ ​'thumb.jpg'​,​ ​teks​,​ ​data​.​message​) 
 ​                ​Client​.​sendFileFromUrl​(​data​.​from​,​ ​`​${​ytm​.​link​}​`​,​ ​`​${​ytm​.​title​}​ - Download.mp4`​,​ ​`Video telah terkirim @​${​data​.​sender​.​split​(​'@'​)​[​0​]​}​`​,​ ​data​.​message​) 
 ​            ​}​ ​catch​ ​{ 
 ​                �
