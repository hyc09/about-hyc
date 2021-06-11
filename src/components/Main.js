import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import picCpc from '../images/pic-cpc.jpg'
import picOlive from '../images/pic-olive.jpg'
import picTea from '../images/pic-tea.jpg'
import picCloth from '../images/pic-cloth_preface.jpg'
import picSelfie from '../images/pic-selfie.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">
            <a href="https://medium.com/%E9%83%8A%E5%B1%B1%E5%A5%B3%E5%AD%90" target="_blank" rel="noreferrer">Medium</a>
          </h2>
          <span className="image main">
            <a href="https://medium.com/%E9%83%8A%E5%B1%B1%E5%A5%B3%E5%AD%90" target="_blank" rel="noreferrer"><img src={pic01} alt="" /></a>
          </span>
          <p>
            紀錄生活隨筆、閱聽心得，以及部分《TAIPEI》的人物專訪。
            受訪人物皆為在台工作多年的各領域日籍人士，刊物本身以英文與日文發行，故將中文原文發表於此。
            比起傳奇傳記，我更著迷市井生活，
            他可能是廚師、作家、演員、導演、記者或家庭主婦，
            在初次見面的一個小時裡，盡情傾聽陌生人的故事，除了心理諮商與算命，沒有比專訪更正當的理由了。
          </p>
  
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >

{/* ////////// 桃園茶行 - 品牌故事 ////////// */}

          <h2 className="major">品牌故事 / 文案</h2>
          <h3>桃園茶行 / 騰峰香茗 / 茶米兒</h3>
          <p>來自桃園大溪的百年茶行，擁有拉拉山上的一片茶園與一群手工製茶的老師傅。
             歷經六代傳承，年輕品牌茶米兒的誕生來自老闆的兒時回憶，
            結合茶品與茶餐點，將正宗古法台灣茶與更多人分享，賦予茶葉新時代的面貌。</p>
          <span className="image main">
            <img src={picTea} alt="tea" />
          </span>
          <blockquote>
            <h4>幾兩茶，鑲滋味</h4>
            <p>
            天微亮，鐵牛車隆隆地發動，種茶人的孩子跳上車跟著父母巡視茶園。<br />
            山高路陡，車上總有一壺父親泡的絕妙好茶，一鍋母親以茶湯做底的飄香滷味，慰勞茶園夥伴的辛勤，也滋養茶園小兒的成長。<br />
            四季有時，茶亦有時，歲月搖晃過一座又一座的山頭，一啜茶湯伴滷香，茶米兒與您分享六代家傳的滋味，留住最美好的老時光。<br />
            </p>
          </blockquote>

{/* ////////// 慕果 - 品牌文案 ////////// */}

          <h2 className="major">品牌文案</h2>
          <h3>慕果莊園精品橄欖油</h3>
          <p>採自義大利西西里島埃特納火山的橄欖農園，強調火山熔岩的肥沃灌溉、單一品種橄欖的特殊風味以及限量純手摘，故以文字連結感官，縮短時空距離，呈現地中海田園、健康、安心的品牌印象。</p>
          <span className="image main">
            <img src={picOlive} alt="olive" />
          </span>
          <blockquote>
            <h4>來自火山的獻禮</h4>
            <p>
            品嚐風、酣飲海<br />
            聆聽火山風華<br />
            嗅探泥土芬芳<br />
            </p>
           
            <h4>產品特色</h4>
            <p>
            埃特納活火山是義大利西西里島的心臟<br />
            滾燙的脈動為農民帶來豐饒的沃土<br />
            充沛的礦物質以及得天獨厚的地中海氣候<br />
            特別適合種植橄欖樹<br />
            </p>

            <p>
            慕果莊園位於埃特納山腳下的肥沃平原－卡塔尼亞<br />
            限量人工栽種單一橄欖樹種 Nocellara dell’Etna<br />
            風味中帶有番茄的清冽、朝鮮薊的甘鮮以及杏仁的香甜<br />
            如葡萄佳釀般的橄欖油，正是火山之神柔美的眷顧<br />
            慕果堅持手摘鮮採，冷壓淬煉<br />
            為橄欖油銘印別緻而馥郁的香韻<br />
            帶領味蕾走進，餐桌上的西西里島<br />
            </p>
          </blockquote>

{/* ////////// 台灣中油 - 企劃文案 ////////// */}

          <h2 className="major">企劃提案 / 文案</h2>
          <h3>台灣中油股份有限公司</h3>
          <span className="image main">
            <img src={picCpc} alt="cpc pic" />
          </span>

          <p>以台灣中油 2019 年的主題「秘境」作為起點，發想「未至之境・台灣蹤遊」的企劃主軸，配合桌曆所代表的時間概念，文案以四季之美表現島嶼特色。</p>
          <blockquote>
            <h4>未至之境・台灣蹤遊</h4>
            <p>
            春萌，螢光追逐時節<br /> 
            夏浪，藍天連綿海線<br />
            秋豐，白露圓潤稻穀<br />
            冬藏，雲海輕掩疊翠<br />
            </p>
          </blockquote>

{/* ////////// 植愛 - 專訪 ////////// */}

          <h2 className="major">活動側寫 / 人物專訪</h2>
          <h3>財團法人器官捐贈登錄中心・《植愛》半年刊</h3>
          <p>
          刊物主旨為器官捐贈的衛教、政策與推廣，亦紀錄捐贈者、受贈者與醫療人員的生命故事。以下節錄：<b>《植愛》第 6 期〈一枝草一點露，植愛必有豐收〉</b>
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          
          <blockquote>
            <h4>人生時晴時雨 皆勇敢面對</h4>
            <p>
            ⋯⋯她樂觀地說：「我每天早上都在想，今天受贈者們一定也帶著健康的身體，元氣滿滿的去上班了吧！所以我也要認真過好每一天。」，因此儘管生存在逆境之中，莊玉鳳依然毫不猶豫地投身志工行列。經歷過人生各種艱困的她，透過自己的眼睛更能看見別人的苦痛，對於鄰里間的弱勢家庭從不吝於伸出援手，更曾經接納經濟困難、無安身之地的鄰居陳女士長達三個月，卻不求任何回報，這種慷慨助人的精神也讓她在 2011 年時獲頒模範母親獎。
            </p>
            <p>
            在杏壇勤耕三十七年的莊玉鳳，現在寄情於平靜的田園生活，生活步調有了很大的改變，但唯一不變的是待人的熱情，她時常邀請朋友們到宜蘭作客，亦慷慨地與大家分享親手採收的水果，從講台上的老師到田中央的農夫，這一條路走來她飽受艱辛，卻同時收穫良多。現在的她，無論是辛苦荷鋤或是歡喜豐收，都能寬心以待，未來也會繼續以生命教育種子教師的身份推廣器官捐贈的理念，將自己的生命經驗化為春雨，讓正面力量在社會中不斷萌芽。
            </p>
          </blockquote>

{/* ////////// 台灣工藝發展中心 - 企劃 ////////// */}

          <h2 className="major">企劃提案 / 短文</h2>
          <h3>國立台灣工藝發展研究中心</h3>
          <p>國立台灣工藝發展研究中心的專書提案，是以當代設計師為主軸，展演一個世代的服飾工藝與人文歷史。</p>
          <span className="image main">
            <img src={picCloth} alt="cloth pic" />
          </span>

          <blockquote>
            <h4>當代匠心・經典新裁</h4>
            <p>
            服飾如同語言，作為一種表達自我的方式，極其熨貼自身，也同時深受歷史、地理、文化和民族的影響。
            本書在宏觀的時間軸上，以各世代不同的設計師為座標，紀錄了當代客、閩女性服飾的重要特色；同時，
            從材料、技 法、圖案、色彩等微觀的角度，探索織品手藝裡蘊含的人文思維。
            </p>
            <p>
            1970 年迄今的 50 年，正是當代服裝發展史的重要跨度。在 1960 至 1970 年間， 隨著台灣經濟起飛、
            電視媒體與百貨業成立，使得西方流行元素大量注流， 除了傳統師承制度的洋裁店，重要的教育機構如實踐大學
            （原實踐家政專科 學校）、台南應用科技大學（原台南家政專科學校）與輔仁大學先後成立了織品設計科系，
            時裝設計走入專業教育，開始在本土大鳴異彩。
            70 年代，我們有以華麗、繁複東方圖騰完美融合西方美學的王陳彩霞；以釘珠、刺繡結合傳統戲曲征戰國際的潘黛麗；
            用手工織染的香雲紗編織一場又一場如夢大秀的洪麗芬。80 年代，以立體剪裁展演多元社會議題的葉伽伶；
            揉合藝術與時尚、前衛與復古，打造「溫氏美學」的溫慶珠；以及擅用極簡主義凸顯女性柔美線條的陳季敏。
            </p>
            <p>
            90年代，完美平衡對比媒材，打造衝突美學的竇騰璜、追求自然原貌，以藍染、絲雕、繡花和針扎複合不同素材的徐秋宜。
            2000 年代，以細膩、獨到的針織手法創造獨樹一格針織時尚的潘怡良；用雕塑 一般的羊毛條立體編織奪下國際服裝競賽 Gen Art 前衛時裝大獎的古又文；
            圍 繞花卉主題，以克什米爾、羊毛和絲進軍倫敦時裝界的首位台灣設計師—郭曉璇。2010 年後，以針織、原創布料、印花結合奇幻風格的詹朴；
            顛覆傳統與現 代、擅長將中西文化符號解構再重組的周裕穎⋯⋯。
            </p>
            <p>
            服裝是設計師用以敘述世代的語言，工藝中的敲打、編織、紡染、繪繡則是串 起時代和文化的動作記憶。臺灣土地兼容不同族群，深受華夏、歐美及日本影 響，擁有多元、豐富的文化底蘊，卻也逐步走出屬於自己的地在時尚。在地與 國際，傳統與創新，不斷更新的當代女性服裝工藝史正代表著臺灣設計師不懈 的追求，以服飾向世界展演：臺灣製，來自臺灣，向世界發光。

            </p>
          </blockquote>

          {close}
        </article>


        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >

{/* ////////// --- ABOUT --- ////////// */}
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={picSelfie} alt="" />
          </span>
          <p>
            字寫得比話說得好，喜歡動物比人多，不擅長自我介紹；<br />
            畢業於臨床心理系，有兩隻貓。<br />
            喜歡的作家：是枝裕和、吳明益、畢飛宇、閻連科、黃麗群<br />
            漫畫家：松坂大洋、浦澤直樹、富堅義博<br />
            疫情消失後想做的事是爬郊山和游泳。<br />
            最近正在學習寫程式，但學得很慢。
            
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
        
            <h3>/ 服務項目 /</h3>
            <h4>文章與文案</h4>
            <p>人物專訪、活動側寫、人文紀事、風土飲食、髮型美妝、文案撰寫與構思。</p>
            <h4>企劃</h4>
            <p>提案與發想、擬定專案執行計畫，撰寫設計理念，讓您的設計或作品更吸引人、看起來更專業。</p>
            <h4>編輯</h4>
            <p>潤稿、體例審稿、校稿，包含文章結構彙整、文句潤飾、錯漏字修正。</p>
            <h4>技術類文件</h4>
            <p>網站說明文件、後台教學文件等，實際具備網站開發經驗，專業用語不會成為我們之間的阻礙。</p>
          
          <p>
            聯繫請來信：hsyichiang@gmail.com
          </p>
         
          {close}
        </article>
      </div>
   )  
 }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
