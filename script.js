// パステルカラーのメンバー設定
const members = {
  hina: {
    name: "橘 陽菜（ひな）",
    type: "王道アイドル感・圧倒的キラキラ感",
    desc: "圧倒的なアイドル性と輝きに惹かれるあなたには『ひな』がぴったり！眩しい笑顔とストレートな情熱で、いつでも最高のワクワクを届けてくれる存在です。",
	img: "images/hina.jpg",
    color: "#fff59d",       // パステルイエロー
    textColor: "#f57f17",  // テキスト用アクセント色
    borderColor: "#ffee58"
  },
  meguna: {
    name: "橋本 恵菜（めぐな）",
    type: "大人っぽい雰囲気・陰の努力家",
    desc: "落ち着いた魅力と秘めた情熱に惹かれるあなたには『めぐな』がぴったり！見えないところで努力を重ねる真摯な姿に、知れば知るほど沼にハマっていくはずです。",
	img: "images/meguna.jpg",
    color: "#c8e6c9",       // パステルグリーン
    textColor: "#2e7d32",
    borderColor: "#a5d6a7"
  },
  nanami: {
    name: "鹿野 ななみ（ななみ）",
    type: "明るく太陽のような存在・頼れるしっかり者",
    desc: "太陽のような明るさと安心感に惹かれるあなたには『ななみ』がぴったり！一緒にいるだけで元気がもらえて、いざという時は頼りになる頼もしい存在です。",
	img: "images/nanami.jpg",
    color: "#fce4ec",       // パステルピンク（背景色）
    textColor: "#c2185b",   // 濃いピンク（文字色・見やすさ重視）
    borderColor: "#f8bbd0"  // 少し濃いめのピンク（枠線色）
  },
  moe: {
    name: "黒崎 萌（もえ）",
    type: "真面目で誠実・しっかり者で頼もしい",
    desc: "誠実さや温かい気配りに惹かれるあなたには『もえ』がぴったり！どんな時も丁寧にファンやグループと向き合う姿に、深い信頼と安心感を感じられます。",
	img: "images/moe.jpg",
    color: "#ffcdd2",       // パステルレッド/ピンク
    textColor: "#c62828",
    borderColor: "#ef9a9a"
  },
  shizuku: {
    name: "葉山 雫（しずく）",
    type: "あざと可愛く憎めない・愛され上手",
    desc: "愛嬌たっぷりの可愛さにキュンとするあなたには『しずく』がぴったり！ちょっとあざといおねだりや甘え上手な姿に、思わず夢中になってしまう魅力があります。",
	img: "images/shizuku.jpg",
    color: "#b3e5fc",       // パステル水色
    textColor: "#0277bd",
    borderColor: "#81d4fa"
  },
  mio: {
    name: "真白 美央（みお）",
    type: "圧倒的ビジュアル・愛される天然ギャップ",
    desc: "美しいビジュアルと予想外のギャップに惹かれるあなたには『みお』がぴったり！完璧な見た目からは想像できないマイペースな天然っぷりに、ずっと癒やされます。",
	img: "images/mio.jpg",
    color: "#e1bee7",       // パステルパープル
    textColor: "#6a1b9a",
    borderColor: "#ce93d8"
  }
};

const questions = [
  {
    q: "Q1. アイドルのライブで、一番テンションが上がる最高の瞬間は？",
    options: [
      { text: "王道ソングのサビで、センターとバチッと目が合って爆レスをもらう", target: "hina" },
      { text: "普段クールなメンバーが、曲の終盤で見せる圧巻のソロパート", target: "meguna" },
      { text: "MC中に「みんな盛り上がってるー！？」と会場全体を全力で巻き込む瞬間", target: "nanami" },
      { text: "激しいダンス曲で、全員のフリが寸分違わずピッタリ揃う瞬間", target: "moe" },
      { text: "曲中にふとカメラ目線で『ファンサ』のウインクやあざとポーズ", target: "shizuku" },
      { text: "歌詞をちょっと間違えて、てへっと笑って誤魔化すかわいすぎるギャップ", target: "mio" }
    ]
  },
  {
    q: "Q2. 個別特典会（チェキ会・お話し会）で体験したいシチュエーションは？",
    options: [
      { text: "「今日ずっと探してたんだよ！」と眩しい笑顔で迎えられる", target: "hina" },
      { text: "「いつも見てくれてありがとう」と静かだけど噛み締めるように言われる", target: "meguna" },
      { text: "「次何話す〜！？笑」と、まるで昔からの友達みたいに爆笑トーク", target: "nanami" },
      { text: "「今日も来てくれて安心した！」と誠実で丁寧にお礼を言われる", target: "moe" },
      { text: "「私のことだけ考えてね？」と上目遣いでおねだりされる", target: "shizuku" },
      { text: "「今日のお昼何食べた〜？」と予想外の話題で和まされる", target: "mio" }
    ]
  },
  {
    q: "Q3. アイドルの舞台裏・ドキュメンタリーで一番グッとくるのは？",
    options: [
      { text: "本番直前、円陣の真ん中で「絶対最高のライブにしよ！」と声を出す姿", target: "hina" },
      { text: "誰よりも早くスタジオに入り、1人黙々と鏡の前で復習する姿", target: "meguna" },
      { text: "緊張している年下メンバーの背中を叩いて「大丈夫！」と笑わせる姿", target: "nanami" },
      { text: "本番前の持ち物や移動スケジュールをテキパキ確認・整理する姿", target: "moe" },
      { text: "出番直前に「緊張する〜抱きしめて〜」とメンバーにおねだりする姿", target: "shizuku" },
      { text: "緊張感漂う楽屋で、ひとりマイペースにお菓子を食べて場を和ませる姿", target: "mio" }
    ]
  },
  {
    q: "Q4. メンバーのSNSで「通知が来たら即開いちゃう」大好物な投稿は？",
    options: [
      { text: "「みんな大好き！」とキラキラのステージ写真付き投稿", target: "hina" },
      { text: "夜遅くにひっそり更新される、熱い思いが綴られた長文ブログ", target: "meguna" },
      { text: "メンバー同士でふざけ合っているわちゃわちゃ動画", target: "nanami" },
      { text: "「今週もお疲れ様！明日も一緒に頑張ろうね」というリマインド投稿", target: "moe" },
      { text: "あざとすぎる自撮りと「かまって？」の一言", target: "shizuku" },
      { text: "「服裏返しで着てた…」みたいなクスッと笑える日常の天然エピソード", target: "mio" }
    ]
  },
  {
    q: "Q5. 休日、もし推しメンバーとカフェに行くならどんなシチュエーションが良い？",
    options: [
      { text: "話題の映えカフェで、限定スイーツを一緒に注文して大はしゃぎ", target: "hina" },
      { text: "落ち着いた雰囲気のブックカフェで、静かに好きな本や音楽の話をする", target: "meguna" },
      { text: "にぎやかな人気カフェで、お腹が空くまでずっと笑い話をする", target: "nanami" },
      { text: "事前に予約してくれた静かなお店で、落ち着いて近況報告し合う", target: "moe" },
      { text: "「ひとくちちょうだい？」とおねだりされてスイーツをシェアする", target: "shizuku" },
      { text: "お店の場所を盛大に勘違いして、迷子になりながら合流する", target: "mio" }
    ]
  }
];

let currentQuestionIndex = 0;
let scores = { hina: 0, meguna: 0, nanami: 0, moe: 0, shizuku: 0, mio: 0 };
let currentResultMember = null;

function startQuiz() {
  currentQuestionIndex = 0;
  scores = { hina: 0, meguna: 0, nanami: 0, moe: 0, shizuku: 0, mio: 0 };
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const qData = questions[currentQuestionIndex];
  // 進捗状況を progress にセット
  document.getElementById('progress').innerText = `QUESTION ${currentQuestionIndex + 1} \/ ${questions.length}`;
  // 質問文を question-text にセット
  document.getElementById('question-text').innerText = qData.q;	
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  qData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.target);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(target) {
  scores[target] += 2;
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  
  // 1. まず最高得点（数値）を取得する
  const maxScore = Math.max(...Object.values(scores));
  
  // 2. 最高得点と同じスコアを持つメンバーのキーをすべて配列に抽出する
  const topMembers = Object.keys(scores).filter(member => scores[member] === maxScore);
  
  // 3. 配列の中からランダムで1つ選ぶ
  const randomIndex = Math.floor(Math.random() * topMembers.length);
  const highestMember = topMembers[randomIndex];
  
  currentResultMember = members[highestMember];

  // ★ ここで画像をセット
  const imgElem = document.getElementById('result-img');
  imgElem.src = currentResultMember.img;
  imgElem.alt = currentResultMember.name;
  
  // 結果カードの動的着色
  const card = document.getElementById('result-card');
  card.style.backgroundColor = currentResultMember.color;
  card.style.borderColor = currentResultMember.borderColor;
  
  const nameElem = document.getElementById('result-name');
  nameElem.innerText = currentResultMember.name;
  nameElem.style.color = currentResultMember.textColor;
  
  const typeElem = document.getElementById('result-type');
  typeElem.innerText = currentResultMember.type;
  typeElem.style.color = currentResultMember.textColor;

  const descElem = document.getElementById('result-desc');
  descElem.innerText = currentResultMember.desc;
}

// X（Twitter）投稿機能
function shareOnX() {
  const memberName = document.getElementById('result-name').innerText.trim();
  const text = encodeURIComponent(
    `Pixel Ribbon メンバー相性診断をやったよ！私の相性ピッタリなメンバーは…${memberName}さん✨ #PixelRibbon`
  );
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  // スマホ端末（iOS / Android）かどうかの判定
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // スマホの場合は同一画面遷移にすることで、OSが自動的にXアプリを起動します
    window.location.href = shareUrl;
  } else {
    // PCの場合は今まで通り新しいタブで開きます
    window.open(shareUrl, '_blank');
  }
}