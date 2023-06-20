
        const quotes = document.getElementById('quotes');
        const author = document.getElementById('author');
        const newQ = document.getElementById('newQ');
        const postMe = document.getElementById('postMe');
        let realData = "";
        let quotesData = "";

        const tweetNow = () => {
            let tweetPost = `https://www.instagram.com/create/story?text=${quotesData.text}`;
            window.open(tweetPost);
        }

        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random() * 1000);
            quotesData = realData[rnum];
            quotes.innerHTML = `${quotesData.text}`;
            quotesData.author == null ? (author.innerHTML = "~ Unknown") : (author.innerHTML = `~ ${quotesData.author}`);
        }

        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
            } catch (error) {
                console.log(error);
            }
        }

        newQ.addEventListener('click', getNewQuotes);

        postMe.addEventListener('click', tweetNow);

        getQuotes();
