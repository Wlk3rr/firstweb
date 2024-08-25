document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/1img.jpg', 'img/2img.jpg', 'img/3img.jpg', 'img/4img.jpg', 'img/5img.jpg', 
        'img/6img.jpg', 'img/7img.jpg', 'img/8img.jpg', 'img/9img.jpg', 'img/10img.jpg', 
        'img/11img.jpg', 'img/12img.jpg',  
    ];

    const container = document.getElementById('images-container');
    const circleContainer = document.getElementById('circle-container');
    const heartContainer = document.getElementById('heart-container');
    const finalText = document.getElementById('final-text');
    const finalQuestion = document.getElementById('final-question');
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts-bg');
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsContainer.appendChild(heart);
        }
    }

    function showImages() {
        images.forEach((image, index) => {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('image-box');
                div.style.backgroundImage = `url(${image})`;
                container.appendChild(div);
                setTimeout(() => div.classList.add('visible'), 100);
            }, index * 3000);
        });

        setTimeout(hideImages, images.length * 3000 + 3000);
    }

    function hideImages() {
        const boxes = document.querySelectorAll('.image-box');
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = '0';
                box.style.transform = 'scale(0.5)';
            }, index * 300);
        });

        setTimeout(showCircle, boxes.length * 300 + 1000);
    }

    function showCircle() {
        container.style.display = 'none';
        circleContainer.style.display = 'flex';

        const rotatingText = document.getElementById('rotating-text');
        const languages = [
            'Я люблю тебя', 'I love you', 'Te amo', 'Ich liebe dich', 'Ti amo', 
            '我爱你', 'Я тебя люблю', 'Σ\'αγαπώ', '愛してる', '사랑해',
            'Ek het jou lief', 'Volim te', 'Miluji tě', 'Jeg elsker dig', 'Ik hou van jou',
            'Ma armastan sind', 'Minä rakastan sinua', 'Je t\'aime', 'Ich liebe dich', 'Σ\'αγαπώ',
             'Tá grá agam duit', 'Ti amo',
            '愛してる', '사랑해', 'Es mīlu tevi', 'Aš tave myliu', 'Jag älskar dig',
            'Kocham cię', 'Eu te amo', 'Te iubesc', 'Ľúbim ťa', 'Ljubim te'
        ];

        languages.forEach((phrase, index) => {
            const span = document.createElement('span');
            span.textContent = phrase;
            span.classList.add('rotating-word');
            const angle = (index * (360 / languages.length));
            span.style.transform = `rotate(${angle}deg) translateY(-300px) rotate(-${angle}deg)`;
            rotatingText.appendChild(span);
        });

        setTimeout(showHeart, 25000);
    }

    function showHeart() {
        circleContainer.style.display = 'none';
        heartContainer.style.display = 'block';

        setTimeout(showFinalText, 10000);
    }

    function showFinalText() {
        heartContainer.style.display = 'none';
        finalText.style.display = 'block';
    
        const texts = [
            'Лена, солнышко мое,',
            'Я долго собирался с духом, чтобы написать тебе это. Ты даже не представляешь, каково это --- любить кого-то так сильно, что готов горы свернуть. Каждый день я просыпаюсь с мыслью о тебе и засыпаю, представляя твою улыбку.',
            'Я боюсь... Как я боюсь потерять тебя, Лена. Но я должен сказать: я тебя люблю. Да, реально люблю. Так сильно, что порой кажется, что сердце не выдержит.',
            'Я ревную тебя ко всем --- даже к этим твоим друзьям и даже к твоему парню. Я ревную тебя даже к солнцу, которое касается твоей кожи, к ветру, который играет твоими волосами. Каждый раз, когда ты упоминаешь о ком-то другом, я чувствую укол ревности.',
            'Помнишь, как я всегда первым отвечал на твои сообщения? Как осыпал тебя комплиментами, как дарил незначительные, но прикольные подарки? Как старался поддержать тебя в трудные моменты? Все это были маленькие кусочки мозаики моей любви к тебе.',
            'Наши свидания в рейве --- это особый вид искусства. Мне так сильно нравится проводить с тобой время, даже 4 часа проходят как 30 минут. А как мне приятно смотреть с тобой фильмы и мультфильмы! Ты не представляешь, как это много для меня значит.',
            'Знаешь, я помирился с Сашей и Ангелиной только ради того чтобы между мной и близкими людьми моего любимого человека не было ссор и разногласий. Я видел, как тебе было неприятно, когда мы ссорились, и решил наладить отношения. Я хочу, чтобы между мной и близкими тебе людьми все было хорошо.',
            'Помнишь главу, которую я тебе кидал? Я написал ее, думая только о тебе. Каждое слово было пропитано моей любовью. Этой главы не будет в книге, она специально для тебя.',
            'Все эти браки и отношения в чате --- это не просто по приколу. Из-за расстояния я всеми силами пытаюсь быть ближе к тебе и как-то больше показать, что ты моя.',
            'Я готов изменить себя, свои привычки, свое окружение --- все ради тебя, Лена. Да, возможно, мои обещания ради тебя горы свернуть кажутся утопичными, но я честно способен и постараюсь, если будет необходимость.',
            'Лена, я знаю, что между нами 1000 км, но для настоящей любви это не преграда. Я люблю тебя, и эта любовь растет с каждым днем, как прекрасный цветок.',
        ];
    
        let index = 0;
        const showNextText = () => {
            if (index < texts.length) {
                finalText.textContent = texts[index];
                finalText.style.opacity = 0;
                finalText.style.transition = 'opacity 2s';
                
                setTimeout(() => {
                    finalText.style.opacity = 1;
                }, 100);
    
                setTimeout(() => {
                    finalText.style.opacity = 0;
                    setTimeout(() => {
                        index++;
                        showNextText();
                    }, 2000);
                }, 6000);
            } else {
                finalText.style.display = 'none';
                finalQuestion.style.display = 'block';
            }
        };
    
        showNextText();
    }
    createHearts();
    showImages();
});