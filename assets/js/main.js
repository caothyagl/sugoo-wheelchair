document.addEventListener("DOMContentLoaded", () => {
  const AREA_DATA = {
    東京都: [
      { name: "葛飾区", price: 7700 },
      { name: "足立区", price: 7300 },
      { name: "江戸川区", price: 7400 },
      { name: "港区", price: 5800 },
      { name: "墨田区", price: 6700 },
      { name: "荒川区", price: 6700 },
      { name: "江東区", price: 6500 },
      { name: "中央区", price: 6000 },
      { name: "千代田区", price: 5600 },
      { name: "北区", price: 6100 },
      { name: "台東区", price: 7200 },
      { name: "品川区", price: 5900 },
      { name: "文京区", price: 5900 },
      { name: "板橋区", price: 5600 },
      { name: "豊島区", price: 5500 },
      { name: "目黒区", price: 5100 },
      { name: "新宿区", price: 4800 },
      { name: "渋谷区", price: 4800 },
      { name: "中野区", price: 4500 },
      { name: "練馬区", price: 4700 },
      { name: "大田区", price: 7600 },
      { name: "世田谷区", price: 4400 },
      { name: "杉並区", price: 3600 },
      { name: "西多摩郡奥多摩町", price: 12300 },
      { name: "西多摩郡檜原村", price: 5400 },
      { name: "青梅市", price: 6900 },
      { name: "西多摩郡日の出町", price: 5500 },
      { name: "羽村市", price: 3400 },
      { name: "清瀬市", price: 1800 },
      { name: "西多摩郡瑞穂町", price: 3300 },
      { name: "あきる野市", price: 5100 },
      { name: "東久留米市", price: 1600 },
      { name: "西東京市", price: 1500 },
      { name: "福生市", price: 3000 },
      { name: "武蔵野市", price: 2000 },
      { name: "武蔵村山市", price: 1600 },
      { name: "東大和市", price: 1400 },
      { name: "東村山市", price: 1300 },
      { name: "狛江市", price: 1400 },
      { name: "三鷹市", price: 1400 },
      { name: "昭島市", price: 2700 },
      { name: "小平市", price: 1200 },
      { name: "立川市", price: 1300 },
      { name: "小金井市", price: 1100 },
      { name: "八王子市", price: 1100 },
      { name: "国分寺市", price: 900 },
      { name: "調布市", price: 1100 },
      { name: "国立市", price: 800 },
      { name: "日野市", price: 700 },
      { name: "府中市", price: 700 },
      { name: "町田市", price: 900 },
      { name: "稲城市", price: 800 },
      { name: "多摩市", price: 200 },
    ],
    神奈川県: [
      { name: "足柄下郡湯河原町", price: 14500 },
      { name: "足柄下郡真鶴町", price: 14300 },
      { name: "足柄下郡箱根町", price: 7800 },
      { name: "三浦市", price: 12800 },
      { name: "小田原市", price: 7500 },
      { name: "足柄上郡山北町", price: 7600 },
      { name: "南足柄市", price: 12100 },
      { name: "足柄上郡開成町", price: 6900 },
      { name: "足柄上郡大井町", price: 7100 },
      { name: "足柄上郡松田町", price: 6800 },
      { name: "足柄上郡中井町", price: 6300 },
      { name: "秦野市", price: 6200 },
      { name: "中郡大磯町", price: 5900 },
      { name: "中郡二宮町", price: 6000 },
      { name: "三浦郡葉山町", price: 5900 },
      { name: "逗子市", price: 5900 },
      { name: "横須賀市", price: 5800 },
      { name: "平塚市", price: 4900 },
      { name: "茅ヶ崎市", price: 4800 },
      { name: "鎌倉市", price: 10100 },
      { name: "高座郡寒川町", price: 4300 },
      { name: "横浜市旭区", price: 2000 },
      { name: "横浜市磯子区", price: 3800 },
      { name: "横浜市栄区", price: 4000 },
      { name: "横浜市金沢区", price: 5000 },
      { name: "横浜市戸塚区", price: 3500 },
      { name: "横浜市港南区", price: 3800 },
      { name: "横浜市港北区", price: 3100 },
      { name: "横浜市神奈川区", price: 3400 },
      { name: "横浜市瀬谷区", price: 2000 },
      { name: "横浜市西区", price: 2600 },
      { name: "横浜市青葉区", price: 1200 },
      { name: "横浜市泉区", price: 2400 },
      { name: "横浜市中区", price: 4400 },
      { name: "横浜市鶴見区", price: 3900 },
      { name: "横浜市都筑区", price: 1600 },
      { name: "横浜市南区", price: 3400 },
      { name: "横浜市保土ケ谷区", price: 2500 },
      { name: "横浜市緑区", price: 1600 },
      { name: "伊勢原市", price: 4000 },
      { name: "藤沢市", price: 5900 },
      { name: "海老名市", price: 3300 },
      { name: "綾瀬市", price: 3300 },
      { name: "厚木市", price: 3300 },
      { name: "大和市", price: 1700 },
      { name: "愛甲郡愛川町", price: 1500 },
      { name: "愛甲郡清川村", price: 2500 },
      { name: "座間市", price: 1500 },
      { name: "相模原市中央区", price: 900 },
      { name: "相模原市南区", price: 1100 },
      { name: "相模原市緑区", price: 900 },
      { name: "川崎市宮前区", price: 1400 },
      { name: "川崎市幸区", price: 6400 },
      { name: "川崎市高津区", price: 1600 },
      { name: "川崎市川崎区", price: 7900 },
      { name: "川崎市多摩区", price: 1200 },
      { name: "川崎市中原区", price: 2000 },
      { name: "川崎市麻生区", price: 800 },
    ],
    埼玉県: [
      { name: "秩父郡小鹿野町", price: 21000 },
      { name: "羽生市", price: 19700 },
      { name: "加須市", price: 18900 },
      { name: "幸手市", price: 19300 },
      { name: "久喜市", price: 17700 },
      { name: "児玉郡神川町", price: 20300 },
      { name: "秩父郡皆野町", price: 20100 },
      { name: "児玉郡上里町", price: 20000 },
      { name: "本庄市", price: 20000 },
      { name: "白岡市", price: 16600 },
      { name: "蓮田市", price: 11400 },
      { name: "児玉郡美里町", price: 19000 },
      { name: "南埼玉郡宮代町", price: 17000 },
      { name: "北葛飾郡杉戸町", price: 16400 },
      { name: "秩父郡長瀞町", price: 19100 },
      { name: "北足立郡伊奈町", price: 17300 },
      { name: "深谷市", price: 18800 },
      { name: "春日部市", price: 16000 },
      { name: "大里郡寄居町", price: 18300 },
      { name: "越谷市", price: 14900 },
      { name: "秩父郡東秩父村", price: 17900 },
      { name: "北葛飾郡松伏町", price: 14900 },
      { name: "比企郡小川町", price: 17300 },
      { name: "吉川市", price: 14500 },
      { name: "上尾市", price: 17200 },
      { name: "三郷市", price: 9100 },
      { name: "さいたま市浦和区", price: 8100 },
      { name: "さいたま市岩槻区", price: 10500 },
      { name: "さいたま市見沼区", price: 15600 },
      { name: "さいたま市桜区", price: 8000 },
      { name: "さいたま市西区", price: 9100 },
      { name: "さいたま市大宮区", price: 9000 },
      { name: "さいたま市中央区", price: 8200 },
      { name: "さいたま市南区", price: 7900 },
      { name: "さいたま市北区", price: 14200 },
      { name: "さいたま市緑区", price: 8900 },
      { name: "熊谷市", price: 16900 },
      { name: "行田市", price: 17000 },
      { name: "八潮市", price: 8600 },
      { name: "北本市", price: 16400 },
      { name: "桶川市", price: 11400 },
      { name: "比企郡嵐山町", price: 17100 },
      { name: "比企郡滑川町", price: 11100 },
      { name: "鴻巣市", price: 14800 },
      { name: "東松山市", price: 11000 },
      { name: "比企郡吉見町", price: 10900 },
      { name: "草加市", price: 8000 },
      { name: "比企郡川島町", price: 10500 },
      { name: "比企郡ときがわ町", price: 16500 },
      { name: "比企郡鳩山町", price: 10200 },
      { name: "川越市", price: 15800 },
      { name: "坂戸市", price: 9500 },
      { name: "蕨市", price: 6500 },
      { name: "鶴ヶ島市", price: 9100 },
      { name: "戸田市", price: 6500 },
      { name: "川口市", price: 6500 },
      { name: "日高市", price: 8600 },
      { name: "秩父市", price: 16100 },
      { name: "秩父郡横瀬町", price: 15900 },
      { name: "朝霞市", price: 4400 },
      { name: "和光市", price: 4200 },
      { name: "入間郡越生町", price: 14800 },
      { name: "入間郡毛呂山町", price: 9600 },
      { name: "飯能市", price: 8400 },
      { name: "狭山市", price: 7800 },
      { name: "富士見市", price: 11300 },
      { name: "入間市", price: 7500 },
      { name: "ふじみ野市", price: 11700 },
      { name: "志木市", price: 8200 },
      { name: "入間郡三芳町", price: 5800 },
      { name: "新座市", price: 4500 },
      { name: "所沢市", price: 1800 },
    ],
    千葉県: [
      { name: "銚子市", price: 26200 },
      { name: "香取郡東庄町", price: 23800 },
      { name: "旭市", price: 23000 },
      { name: "館山市", price: 24200 },
      { name: "南房総市", price: 23900 },
      { name: "匝瑳市", price: 22400 },
      { name: "香取市", price: 22100 },
      { name: "香取郡神崎町", price: 22100 },
      { name: "山武郡横芝光町", price: 21800 },
      { name: "印旛郡栄町", price: 24500 },
      { name: "長生郡長生村", price: 22400 },
      { name: "勝浦市", price: 22400 },
      { name: "茂原市", price: 21900 },
      { name: "香取郡多古町", price: 21200 },
      { name: "山武市", price: 20200 },
      { name: "いすみ市", price: 22100 },
      { name: "山武郡芝山町", price: 20000 },
      { name: "長生郡一宮町", price: 22400 },
      { name: "長生郡白子町", price: 21100 },
      { name: "長生郡睦沢町", price: 22200 },
      { name: "山武郡九十九里町", price: 21400 },
      { name: "成田市", price: 19400 },
      { name: "富里市", price: 19400 },
      { name: "鴨川市", price: 21300 },
      { name: "東金市", price: 19100 },
      { name: "大網白里市", price: 19100 },
      { name: "市原市", price: 20400 },
      { name: "八街市", price: 19300 },
      { name: "印旛郡酒々井町", price: 18200 },
      { name: "富津市", price: 19400 },
      { name: "佐倉市", price: 17600 },
      { name: "君津市", price: 19000 },
      { name: "印西市", price: 17600 },
      { name: "四街道市", price: 17100 },
      { name: "我孫子市", price: 16900 },
      { name: "野田市", price: 16600 },
      { name: "柏市", price: 16500 },
      { name: "千葉市稲毛区", price: 16000 },
      { name: "千葉市花見川区", price: 10100 },
      { name: "千葉市若葉区", price: 16600 },
      { name: "千葉市中央区", price: 16300 },
      { name: "千葉市美浜区", price: 17400 },
      { name: "千葉市緑区", price: 17400 },
      { name: "流山市", price: 15600 },
      { name: "八千代市", price: 15500 },
      { name: "木更津市", price: 16500 },
      { name: "習志野市", price: 9900 },
      { name: "袖ケ浦市", price: 16300 },
      { name: "白井市", price: 17400 },
      { name: "船橋市", price: 9300 },
      { name: "鎌ケ谷市", price: 15300 },
      { name: "松戸市", price: 9600 },
      { name: "浦安市", price: 8200 },
      { name: "市川市", price: 8300 },
      { name: "長生郡長柄町", price: 21700 },
      { name: "長生郡長南町", price: 20700 },
      { name: "夷隅郡大多喜町", price: 21000 },
      { name: "夷隅郡御宿町", price: 22400 },
      { name: "安房郡鋸南町", price: 22600 },
    ],
    静岡県: [
      { name: "静岡市葵区", price: 25300 },
      { name: "静岡市駿河区", price: 25100 },
      { name: "静岡市清水区", price: 23600 },
      { name: "浜松市中央区", price: 33500 },
      { name: "浜松市浜名区", price: 31900 },
      { name: "浜松市天竜区", price: 31900 },
      { name: "沼津市", price: 18300 },
      { name: "熱海市", price: 16100 },
      { name: "三島市", price: 18200 },
      { name: "富士宮市", price: 20900 },
      { name: "伊東市", price: 17600 },
      { name: "島田市", price: 27400 },
      { name: "富士市", price: 20400 },
      { name: "磐田市", price: 32400 },
      { name: "焼津市", price: 26500 },
      { name: "掛川市", price: 30500 },
      { name: "藤枝市", price: 26800 },
      { name: "御殿場市", price: 15500 },
      { name: "袋井市", price: 31900 },
      { name: "下田市", price: 24000 },
      { name: "裾野市", price: 17100 },
      { name: "湖西市", price: 36400 },
      { name: "伊豆市", price: 20800 },
      { name: "御前崎市", price: 30200 },
      { name: "菊川市", price: 29700 },
      { name: "伊豆の国市", price: 19800 },
      { name: "牧之原市", price: 28300 },
      { name: "賀茂郡東伊豆町", price: 21600 },
      { name: "賀茂郡河津町", price: 23200 },
      { name: "賀茂郡南伊豆町", price: 24900 },
      { name: "賀茂郡松崎町", price: 24500 },
      { name: "賀茂郡西伊豆町", price: 24300 },
      { name: "田方郡函南町", price: 18800 },
      { name: "駿東郡清水町", price: 18400 },
      { name: "駿東郡長泉町", price: 18000 },
      { name: "駿東郡小山町", price: 13400 },
      { name: "榛原郡吉田町", price: 28000 },
      { name: "榛原郡川根本町", price: 30400 },
      { name: "周智郡森町", price: 30300 },
    ],
    山梨県: [
      { name: "甲府市", price: 18400 },
      { name: "富士吉田市", price: 10500 },
      { name: "都留市", price: 9100 },
      { name: "山梨市", price: 16400 },
      { name: "大月市", price: 8200 },
      { name: "韮崎市", price: 20300 },
      { name: "南アルプス市", price: 18700 },
      { name: "北杜市", price: 20900 },
      { name: "甲斐市", price: 19000 },
      { name: "笛吹市", price: 11800 },
      { name: "上野原市", price: 5600 },
      { name: "甲州市", price: 16300 },
      { name: "中央市", price: 18300 },
      { name: "西八代郡市川三郷町", price: 18400 },
      { name: "南巨摩郡早川町", price: 23700 },
      { name: "南巨摩郡身延町", price: 22800 },
      { name: "南巨摩郡南部町", price: 24800 },
      { name: "南巨摩郡富士川町", price: 18700 },
      { name: "中巨摩郡昭和町", price: 18900 },
      { name: "南都留郡道志村", price: 8700 },
      { name: "南都留郡西桂町", price: 10500 },
      { name: "南都留郡忍野村", price: 15900 },
      { name: "南都留郡山中湖村", price: 18100 },
      { name: "南都留郡鳴沢村", price: 11600 },
      { name: "南都留郡富士河口湖町", price: 11200 },
      { name: "北都留郡小菅村", price: 15000 },
      { name: "北都留郡丹波山村", price: 13800 },
    ],
    群馬県: [
      { name: "前橋市", price: 22900 },
      { name: "高崎市", price: 22400 },
      { name: "桐生市", price: 24900 },
      { name: "伊勢崎市", price: 20500 },
      { name: "太田市", price: 18200 },
      { name: "沼田市", price: 27000 },
      { name: "館林市", price: 20700 },
      { name: "渋川市", price: 24300 },
      { name: "藤岡市", price: 21200 },
      { name: "富岡市", price: 23700 },
      { name: "安中市", price: 23200 },
      { name: "みどり市", price: 24700 },
      { name: "北群馬郡榛東村", price: 23900 },
      { name: "北群馬郡吉岡町", price: 23700 },
      { name: "多野郡上野村", price: 26600 },
      { name: "多野郡神流町", price: 22400 },
      { name: "甘楽郡下仁田町", price: 24700 },
      { name: "甘楽郡南牧村", price: 25400 },
      { name: "甘楽郡甘楽町", price: 23200 },
      { name: "吾妻郡中之条町", price: 25800 },
      { name: "吾妻郡長野原町", price: 27400 },
      { name: "吾妻郡嬬恋村", price: 31800 },
      { name: "吾妻郡草津町", price: 28400 },
      { name: "吾妻郡高山村", price: 25700 },
      { name: "吾妻郡東吾妻町", price: 25900 },
      { name: "利根郡片品村", price: 28700 },
      { name: "利根郡川場村", price: 27200 },
      { name: "利根郡昭和村", price: 26600 },
      { name: "利根郡みなかみ町", price: 27700 },
      { name: "佐波郡玉村町", price: 23400 },
      { name: "邑楽郡板倉町", price: 20500 },
      { name: "邑楽郡明和町", price: 20800 },
      { name: "邑楽郡千代田町", price: 21300 },
      { name: "邑楽郡大泉町", price: 18000 },
      { name: "邑楽郡邑楽町", price: 21200 },
    ],
    栃木県: [
      { name: "宇都宮市", price: 26800 },
      { name: "足利市", price: 24500 },
      { name: "栃木市", price: 24000 },
      { name: "佐野市", price: 21900 },
      { name: "鹿沼市", price: 25800 },
      { name: "日光市", price: 29600 },
      { name: "小山市", price: 22900 },
      { name: "真岡市", price: 27900 },
      { name: "大田原市", price: 30900 },
      { name: "矢板市", price: 30000 },
      { name: "那須塩原市", price: 33100 },
      { name: "さくら市", price: 29400 },
      { name: "那須烏山市", price: 29300 },
      { name: "下野市", price: 24900 },
      { name: "河内郡上三川町", price: 27000 },
      { name: "芳賀郡益子町", price: 28600 },
      { name: "芳賀郡茂木町", price: 28400 },
      { name: "芳賀郡市貝町", price: 28400 },
      { name: "芳賀郡芳賀町", price: 28100 },
      { name: "下都賀郡壬生町", price: 25700 },
      { name: "下都賀郡野木町", price: 21500 },
      { name: "塩谷郡塩谷町", price: 29500 },
      { name: "塩谷郡高根沢町", price: 28100 },
      { name: "那須郡那須町", price: 34700 },
      { name: "那須郡那珂川町", price: 31800 },
    ],
    茨城県: [
      { name: "水戸市", price: 26700 },
      { name: "日立市", price: 30400 },
      { name: "土浦市", price: 20300 },
      { name: "古河市", price: 20800 },
      { name: "石岡市", price: 22300 },
      { name: "結城市", price: 22000 },
      { name: "龍ケ崎市", price: 21000 },
      { name: "下妻市", price: 19200 },
      { name: "常総市", price: 17700 },
      { name: "常陸太田市", price: 28000 },
      { name: "高萩市", price: 32300 },
      { name: "北茨城市", price: 33000 },
      { name: "笠間市", price: 24700 },
      { name: "取手市", price: 18000 },
      { name: "牛久市", price: 19800 },
      { name: "つくば市", price: 19400 },
      { name: "ひたちなか市", price: 28700 },
      { name: "鹿嶋市", price: 24200 },
      { name: "潮来市", price: 23900 },
      { name: "守谷市", price: 17400 },
      { name: "常陸大宮市", price: 28000 },
      { name: "那珂市", price: 27200 },
      { name: "筑西市", price: 20200 },
      { name: "坂東市", price: 18400 },
      { name: "稲敷市", price: 22200 },
      { name: "かすみがうら市", price: 22200 },
      { name: "桜川市", price: 20700 },
      { name: "神栖市", price: 24400 },
      { name: "行方市", price: 22900 },
      { name: "鉾田市", price: 27900 },
      { name: "つくばみらい市", price: 17700 },
      { name: "小美玉市", price: 23400 },
      { name: "東茨城郡茨城町", price: 24700 },
      { name: "東茨城郡大洗町", price: 27500 },
      { name: "東茨城郡城里町", price: 26800 },
      { name: "那珂郡東海村", price: 28300 },
      { name: "久慈郡大子町", price: 30300 },
      { name: "稲敷郡美浦村", price: 21000 },
      { name: "稲敷郡阿見町", price: 20400 },
      { name: "稲敷郡河内町", price: 21400 },
      { name: "結城郡八千代町", price: 21500 },
      { name: "猿島郡五霞町", price: 20000 },
      { name: "猿島郡境町", price: 20200 },
      { name: "北相馬郡利根町", price: 17700 },
    ],
  };
  const openBtn = document.getElementById("step1Display");
  const modal = document.getElementById("wheelchairModal");
  const closeBtn = document.getElementById("closeWheelchairPopup");
  const items = document.querySelectorAll(".wheelchair-item");
  const clearBtn = document.querySelector(".js-clear-order");

  /* ======================
    Helpers
  ====================== */
  const getOrder = () =>
    JSON.parse(localStorage.getItem("wheelchairOrder")) || {
      step1: null,
      step2: null,
      step3: null,
    };

  const saveOrder = (order) => {
    localStorage.setItem("wheelchairOrder", JSON.stringify(order));
  };

  /* ======================
    Clear
  ====================== */
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("wheelchairOrder");
      location.reload();
    });
  }

  /* ======================
    Popup open / close
  ====================== */
  openBtn?.addEventListener("click", openStep1Popup);

  closeBtn?.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  /* ======================
    STEP 1 – Wheelchair type
  ====================== */
  function openStep1Popup() {
    modal.classList.add("is-open");
    bindWheelchair();
  }

  function step1({ id, title, prices }) {
    const order = getOrder();

    order.step1 = { id, title, prices };
    saveOrder(order);

    // UI
    document.querySelector(".step1-text").textContent = title;

    openStep2Popup();
  }

  let wheelchairBound = false;
  function bindWheelchair() {
    if (wheelchairBound) return;
    wheelchairBound = true;

    modal.addEventListener("click", (e) => {
      const item = e.target.closest(".wheelchair-item");
      if (!item) return;

      modal
        .querySelectorAll(".wheelchair-item")
        .forEach((i) => i.classList.remove("is-selected"));

      item.classList.add("is-selected");

      step1({
        id: item.dataset.id,
        title: item.dataset.title,
        prices: JSON.parse(item.dataset.prices),
      });

      modal.classList.remove("is-open");
    });
  }

  /* ======================
    STEP 2 – Area
  ====================== */
  const areaModal = document.getElementById("areaModal");
  const closeAreaPopup = document.getElementById("closeAreaPopup");
  const closeCityPopup = document.getElementById("closeCityPopup");
  const cityList = document.getElementById("cityList");

  const cityBlock = document.querySelector(".area-block--city");
  const overlay = document.querySelector(".city-overlay");

  const prefectureText = document.querySelector(".js-selected-prefecture");
  const areaText = document.querySelector(".js-area");
  const cityText = document.querySelector(".js-city");
  const shipText = document.querySelector(".js-ship");

  function openStep2Popup() {
    areaModal.classList.add("is-open");
    bindPrefecture();
  }

  closeAreaPopup.addEventListener("click", () => {
    areaModal.classList.remove("is-open");
    cityBlock.classList.remove("is-open");
    overlay.classList.remove("is-open");
  });

  function step2({ prefecture, city, ship }) {
    const order = getOrder();

    order.step2 = { prefecture, city, ship };
    saveOrder(order);

    areaText.textContent = `${prefecture}`;
    cityText.textContent = `${city}`;
    shipText.textContent = `¥${ship.toLocaleString()}`;

    openStep3Popup();
    renderDays();
  }

  /* prefecture */
  let prefectureBound = false;
  function bindPrefecture() {
    if (prefectureBound) return;
    prefectureBound = true;
    document.querySelectorAll('input[name="prefecture"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const prefecture = e.target.value;

        prefectureText.textContent = prefecture;

        renderCity(prefecture);
      });
    });
  }

  /* city */
  function renderCity(prefecture) {
    const cityList = document.getElementById("cityList");
    cityList.innerHTML = "";

    AREA_DATA[prefecture].forEach((city) => {
      const label = document.createElement("label");
      label.className = "area-item";
      label.innerHTML = `
        <input type="radio" name="city"
          data-prefecture="${prefecture}"
          data-city="${city.name}"
          data-ship="${city.price}">
        <span>${city.name}</span>
      `;
      cityList.appendChild(label);
    });

    cityBlock.classList.add("is-open");
    overlay.classList.add("is-open");
    bindCity();
  }

  let cityBound = false;
  function bindCity() {
    if (cityBound) return;
    cityBound = true;

    cityList.addEventListener("change", (e) => {
      const radio = e.target;
      if (radio.name !== "city") return;

      step2({
        prefecture: radio.dataset.prefecture,
        city: radio.dataset.city,
        ship: Number(radio.dataset.ship),
      });

      areaModal.classList.remove("is-open");
      cityBlock.classList.remove("is-open");
      overlay.classList.remove("is-open");
    });
  }

  /* ======================
    STEP 3 – Days
  ====================== */
  const closeDayPopup = document.getElementById("closeDayPopup");
  const daysGrid = document.getElementById("daysGrid");
  const daysModal = document.getElementById("daysModal");

  const daysText = document.querySelector(".js-days");
  const daysTotal = document.querySelectorAll(".js-total");
  const pricePerDay = document.querySelector(".js-price-per-day");

  function openStep3Popup() {
    daysModal.classList.add("is-open");
    overlay.classList.add("is-open");
  }

  function closeDaysPopup() {
    daysModal?.classList.remove("is-open");
    overlay?.classList.remove("is-open");
  }

  closeDayPopup.addEventListener("click", closeDaysPopup);

  function step3(days) {
    days = Number(days);
    const order = getOrder();

    order.step3 = { days };
    saveOrder(order);

    daysText.textContent = `${days}日`;

    updateRentalPrice();
    calculateTotal();
    closeDaysPopup();

    renderResultPopup();
    resultModal.classList.add("is-open");
  }

  function renderDays() {
    let html = "";

    for (let i = 1; i <= 31; i++) {
      html += `<button class="day-item" data-day="${i}">${i}</button>`;
    }

    daysGrid.innerHTML = html;

    daysGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".day-item");
      if (!btn) return;

      daysGrid
        .querySelectorAll(".day-item")
        .forEach((b) => b.classList.remove("is-active"));

      btn.classList.add("is-active");
      step3(Number(btn.dataset.day));
    });
  }

  /* ======================
    STEP 4 – Result
  ====================== */
  const resultModal = document.getElementById("resultModal");
  const closeResultPopup = document.getElementById("closeResultPopup");
  let resultConfirmed = false;

  closeResultPopup.addEventListener("click", () => {
    resultModal.classList.remove("is-open");
    resultConfirmed = true;

    renderEstimate();
    updateClearButtonState();
  });

  function renderResultPopup() {
    const order = getOrder();
    if (!order.step1 || !order.step2 || !order.step3 || !order.total) return;

    document.querySelector(".js-result-total").textContent =
      order.total.toLocaleString();

    document.querySelector(".js-result-type").textContent = order.step1.title;

    document.querySelector(".js-result-prefecture").textContent =
      order.step2.prefecture;

    document.querySelector(".js-result-city").textContent = order.step2.city;

    document.querySelector(".js-result-days").textContent =
      `${order.step3.days}日間`;

    // document.querySelector(".js-result-ship").textContent =
    //   order.step2.ship.toLocaleString();
  }

  function getPricePerDay(prices, days) {
    if (!prices || !days) return 0;

    const tier = getDayTier(days);
    return Math.round(prices[tier]);
  }

  function updateRentalPrice() {
    const order = getOrder();

    if (!order.step1 || !order.step3) return;

    const { prices } = order.step1;
    const days = Number(order.step3?.days || 1);

    if (!prices || !days) return;

    const total = calculateTierPrice(prices, days);
    const perDay = getPricePerDay(prices, days);

    if (pricePerDay) pricePerDay.textContent = perDay.toLocaleString();
    if (daysTotal) daysTotal.textContent = total.toLocaleString();
  }

  function calculateTierPrice(prices, days) {
    if (!prices || !days) return 0;

    const tier = getDayTier(days);
    return prices[tier] || 0;
  }

  /* ======================
    Get Day and Total
  ====================== */
  function getDayTier(days) {
    if (days <= 1) return 1;
    if (days <= 3) return 3;
    if (days <= 7) return 7;
    if (days <= 14) return 14;
    return 30;
  }

  function calculateTotal() {
    const order = getOrder();

    if (!order.step1 || !order.step2 || !order.step3) return;

    const days = order.step3.days;
    const tier = getDayTier(days);

    const rentPrice = order.step1.prices[tier];
    const shipPrice = order.step2.ship || 0;
    const optionPrice = 15500;

    order.total = rentPrice + shipPrice + optionPrice;
    order.appliedTier = tier;

    saveOrder(order);
  }

  /* ======================
    Restore UI
  ====================== */
  function renderEstimate() {
    const order = getOrder();

    const perDay =
      order.step1 && order.step3
        ? getPricePerDay(order.step1.prices, order.step3.days)
        : 0;

    document.querySelector(".step1-text").innerHTML =
      order.step1?.title || "種類を選ぶ";

    // type
    document.querySelector(".js-type").innerHTML =
      order.step1?.title || "-------------";

    // price per day
    document.querySelector(".js-price-per-day").textContent =
      perDay > 0 ? perDay.toLocaleString() : "----";

    // area
    document.querySelector(".js-area").innerHTML = order.step2?.prefecture
      ? `${order.step2.prefecture}`
      : "都道府県";

    document.querySelector(".js-city").innerHTML = order.step2?.city
      ? `${order.step2.city}`
      : "区市町村";

    // ship
    document.querySelector(".js-ship").innerHTML = order.step2?.ship
      ? `¥${order.step2.ship.toLocaleString()}`
      : "";

    // days
    document.querySelector(".js-days").innerHTML = order.step3?.days
      ? `${order.step3.days}`
      : "15";

    // total
    const totalEl = document.querySelector(".js-total");

    if (order.total && order.total > 0) {
      const currentValue = parseInt(totalEl.textContent.replace(/,/g, "")) || 0;

      animateNumber(totalEl, currentValue, order.total, 1000);
    } else {
      totalEl.textContent = "-------";
    }
    // document.querySelector(".js-total").innerHTML = order.total
    //   ? `${order.total.toLocaleString()}`
    //   : "-------";

    updateClearButtonState();
  }

  function animateNumber(element, start, end, duration = 1000) {
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;

      const progress = currentTime - startTime;
      const percent = Math.min(progress / duration, 1);

      // ease-out mượt
      const easeOut = 1 - Math.pow(1 - percent, 3);

      const value = Math.floor(start + (end - start) * easeOut);

      element.textContent = value.toLocaleString();

      if (percent < 1) {
        requestAnimationFrame(animation);
      } else {
        element.textContent = end.toLocaleString();
      }
    }

    requestAnimationFrame(animation);
  }

  function updateClearButtonState() {
    const order = getOrder();
    const stepItems = document.querySelectorAll(".top-rent__step__item");

    const isValid =
      !!order.step1?.id &&
      !!order.step2?.prefecture &&
      !!order.step2?.city &&
      !!order.step3?.days &&
      order.step3.days > 0 &&
      !!order.total &&
      order.total > 0;

    if (isValid) {
      stepItems.forEach((item) => {
        item.classList.remove("is-disabled");
      });
    }

    clearBtn.disabled = !isValid;
  }

  calculateTotal();
  updateRentalPrice();
  renderEstimate();
});
