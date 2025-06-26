// 這是你原本的 script.js，只修正了變數名稱錯誤
document.addEventListener('DOMContentLoaded', () => {

    // --- 步驟 0: 你的回憶資料庫 ---
    const slideshowMedia = [
        { type: 'image', src: 'images/0.JPG', caption: '2022年爸爸生日，我們三個非常漂亮，所以當開場很適合' },
        { type: 'image', src: 'images/1.JPG', caption: '2022年過年，你開始在包（沒有經濟壓力）的紅包，哈哈哈，第一年包紅包的你根本包出去的比年終還多，到現在你已經完全經濟獨立了！！！' },
        { type: 'image', src: 'images/2.JPG', caption: '台北TXC，這時候的Yume還只是遊客，喜歡台北的風情🤪🤪開始工作後直接怨恨這個地方' },
        { type: 'image', src: 'images/3.JPG', caption: '好市多你知道的' },
        { type: 'image', src: 'images/5.JPG', caption: '這天4/5，我們兩個被爸爸放生，還沒任何坐騎，本來以為去找方玟心的路程輕鬆，結果錯過我們家樓下的公車站，走去大東站搭公車去青年路一段，謝謝直接熱死，我們兩個狼狽到燒肉店拿著爸爸給的現金揮霍vs. 有交通工具的心輕鬆到著目的地' },
        { type: 'image', src: 'images/6.JPG', caption: '500cc 喝水' },
        { type: 'image', src: 'images/7.JPG', caption: '中和家尚充滿和平與美好整潔，凌晨妳在記帳' },
        { type: 'image', src: 'images/8.JPG', caption: '這是covid的態度你知道的，這張真的太經典了，我覺得十分好笑，我第一天新冠直接陣亡，你第三天開始不適確診，明明我們兩就活在毒窟但兩人都宅在家真是快樂爽，也沒在幹嘛，還跑去菜市場' },
        { type: 'image', src: 'images/801.JPG', caption: '五花小寶貝，無堅不摧好貓咪，教育有方' },
        { type: 'image', src: 'images/9.JPG', caption: '姊姊結婚><此張的我們兩個有一個共通處：猜猜那是誰的衣服呢^^"猜猜誰現在買走了這兩件衣服呢^^"' },
        { type: 'image', src: 'images/11.JPG', caption: '剛在台北買的優衣褲衣服＋我新的底片機' },
        { type: 'image', src: 'images/12.JPG', caption: '這張照片本來是該跟車子合照，但拍謝，反正你們倆也看不到照片，籠子裡是五花，五花喵喵叫搭配掏寶新衣' },
        { type: 'image', src: 'images/13.JPG', caption: '光速穿越2023五月底，菠蘿市場，水姑娘，也是我的衣服^^"' },
        { type: 'image', src: 'images/14.JPG', caption: '拍了一百張我都不滿意，但現在看了照片只記得美好的回憶美好的旅行' },
        { type: 'image', src: 'images/15.JPG', caption: '漂亮的西西里島，非常快樂' },
        { type: 'image', src: 'images/16.JPG', caption: '洗衣場you know，非常開心有你跟我帶跟阿公阿嬤出去，最棒的旅行' },
        { type: 'image', src: 'images/17.JPG', caption: '「我想睡覺我眼睛睜不開太陽太大了也太熱了吧我不想曬黑」' },
        { type: 'image', src: 'images/18.JPG', caption: '凡爾賽宮，你前一天充電完隔天開始重生' },
        { type: 'image', src: 'images/19.JPG', caption: '水姑娘*2' },
        { type: 'image', src: 'images/20.JPG', caption: '2023/6，台北日常' },
        { type: 'image', src: 'images/21.JPG', caption: '2023/6那年痛苦的夏天與我們的寶貝' },
        { type: 'image', src: 'images/22.JPG', caption: '回高了，那天一樣的KUGA一樣高雄的風' },
        { type: 'image', src: 'images/23.JPG', caption: '出去玩時的我喜歡為各位合照，結果猜猜怎麼著，有沒有覺得這個穿搭似曾相似ㄋ' },
        { type: 'image', src: 'images/24.JPG', caption: '方心去哪了？ ｜ 迪士尼出品：方心在哪兒？' },
        { type: 'image', src: 'images/25.JPG', caption: '迪士尼出品：方心在哪兒？ 第二集' },
        { type: 'image', src: 'images/27.JPG', caption: '找到了。。。2023在日本熱🐭' },
        { type: 'image', src: 'images/271.JPG', caption: '讚、好看、、失眠的夜喝醉的東京（根本沒人失眠）' },
        { type: 'image', src: 'images/28.JPG', caption: '載我去搭客運，猜猜誰在中山東路9駕，救世主駕駛登場拯救我們' },
        { type: 'image', src: 'images/30.JPG', caption: '美好的露營❤️（ps.結束後幫某人慶生直接被臭臉後我跟你趕緊駕摩托車逃跑）' },
        { type: 'image', src: 'images/31.JPG', caption: '完美' },
        { type: 'video', src: 'videos/mid.mp4', caption: '來自日本的小夢' },
    ];

    // --- 步驟 0.5: 音量設定 ---
    const MUSIC_FULL_VOLUME = 1.0; 
    const MUSIC_DUCK_VOLUME = 0.2; 

    // --- 步驟 1: 獲取所有需要的「HTML元素」 ---
    const landingPage = document.getElementById('landing-page');
    const introVideoPage = document.getElementById('intro-video-page');
    const slideshowPage = document.getElementById('slideshow-page');
    const finalLetterPage = document.getElementById('final-letter-page');
    const outroVideoPage = document.getElementById('outro-video-page');

    const enterButton = document.getElementById('enter-button');
    const muteToggle = document.getElementById('mute-toggle');
    
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    // 【唯一的修正點】將此處的變數宣告和 getElementById 的目標，從 'show-letter-button' 改為 'show-outro-button'
    const showOutroButton = document.getElementById('show-outro-button');
    const showFinalVideoButton = document.getElementById('show-final-video-button');

    const introVideo = document.getElementById('intro-video');
    const outroVideo = document.getElementById('outro-video');
    const slideshowImage = document.getElementById('slideshow-image');
    const slideshowVideo = document.getElementById('slideshow-video');
    
    const mediaCaption = document.getElementById('media-caption');
    const backgroundMusic = document.getElementById('background-music');

    // --- 步驟 2: 狀態變數 ---
    let currentIndex = 0;
    let isMuted = false;

    // --- 步驟 2.5: 智慧音量調整函式 ---
    function fadeVolume(audioElement, targetVolume, duration = 400) {
        if (!audioElement) return;
        const startVolume = audioElement.volume;
        if (startVolume === targetVolume) return;
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            audioElement.volume = startVolume + (targetVolume - startVolume) * percentage;
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                audioElement.volume = targetVolume;
            }
        }
        window.requestAnimationFrame(step);
    }

    // --- 步驟 3: 主要功能函式 ---
    function displaySlideshowMedia(index) {
        const item = slideshowMedia[index];
        if (item.type === 'image') {
            slideshowImage.src = item.src;
            slideshowImage.style.display = 'block';
            slideshowVideo.style.display = 'none';
            if (slideshowVideo) slideshowVideo.pause();
            if (!isMuted) fadeVolume(backgroundMusic, MUSIC_FULL_VOLUME);
        } else if (item.type === 'video') {
            slideshowVideo.src = item.src;
            slideshowVideo.style.display = 'block';
            slideshowImage.style.display = 'none';
            slideshowVideo.play();
            if (!isMuted) fadeVolume(backgroundMusic, MUSIC_DUCK_VOLUME);
        }
        mediaCaption.textContent = item.caption || '';
        
        // 【唯一的修正點】將變數名稱 showLetterButton 改為 showOutroButton
        if (index === slideshowMedia.length - 1) {
            showOutroButton.style.display = 'block';
        } else {
            showOutroButton.style.display = 'none';
        }
    }

    // --- 步驟 4: 註冊所有按鈕和事件 ---
    muteToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        if (isMuted) {
            muteToggle.textContent = '🔊 已設為靜音，點此切換為有聲';
            if (backgroundMusic) backgroundMusic.pause();
        } else {
            muteToggle.textContent = '🔇 預設有聲音，點此切換為靜音';
            if (backgroundMusic && introVideoPage.style.display === 'none') backgroundMusic.play();
        }
    });

    enterButton.addEventListener('click', () => {
        landingPage.style.display = 'none';
        introVideoPage.style.display = 'block';
        introVideo.muted = isMuted;
        if (!isMuted) {
            if (backgroundMusic) backgroundMusic.play();
            if (!introVideo.muted) {
                fadeVolume(backgroundMusic, MUSIC_DUCK_VOLUME);
            }
        }
        introVideo.play().catch(error => console.error("開頭影片播放失敗:", error));
    });

    introVideo.addEventListener('ended', () => {
        introVideoPage.style.display = 'none';
        slideshowPage.style.display = 'block';
        displaySlideshowMedia(0);
        if (slideshowMedia[0].type === 'image' && !isMuted) {
            fadeVolume(backgroundMusic, MUSIC_FULL_VOLUME);
        }
    });
    
    if(slideshowVideo) {
        slideshowVideo.addEventListener('ended', () => {
            if (!isMuted) fadeVolume(backgroundMusic, MUSIC_FULL_VOLUME);
            if (currentIndex === slideshowMedia.length - 1) {
                // 【唯一的修正點】將變數名稱 showLetterButton 改為 showOutroButton
                showOutroButton.style.display = 'block';
            }
        });
        slideshowVideo.addEventListener('pause', () => { if (!isMuted) fadeVolume(backgroundMusic, MUSIC_FULL_VOLUME); });
        slideshowVideo.addEventListener('play', () => { if (!isMuted) fadeVolume(backgroundMusic, MUSIC_DUCK_VOLUME); });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideshowMedia.length) % slideshowMedia.length;
        displaySlideshowMedia(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideshowMedia.length;
        displaySlideshowMedia(currentIndex);
    });

    // 【唯一的修正點】將變數名稱 showLetterButton 改為 showOutroButton
    showOutroButton.addEventListener('click', () => {
        slideshowPage.style.display = 'none';
        finalLetterPage.style.display = 'block';
        if (!isMuted) fadeVolume(backgroundMusic, MUSIC_FULL_VOLUME);
    });

    showFinalVideoButton.addEventListener('click', () => {
        finalLetterPage.style.display = 'none';
        outroVideoPage.style.display = 'block';
        fadeVolume(backgroundMusic, 0, 1000);
        setTimeout(() => { if (backgroundMusic) backgroundMusic.pause(); }, 1000);
        outroVideo.play().catch(error => console.error("結局影片播放失敗:", error));
    });
});