
const gSpecialties = [
    _createSpeciality("Series Watcher", `Decdicated to watching as many TV series as possiable. 
        No such thing as "too many seasons". Currently focusing on light and easy sitcoms, but I'm also
        well-acquainted with teen weekly dramas such as The Vampire Diaries, Glee, Pretty Little Liers 
        etc.`, "fa-television", "\f26c"),
    _createSpeciality("Hydreation Queen", `Besides being a necessity, drinking water is also incredibly
        fun!. The bottle you take everywhere can also double as an emotional support item (or was it it's
        intentional, subconscious purpose?). Of course I lost my first 47594709 bottles, but then, as I
        tweet I once saw phrased very well: "college is literally just you, your laptop, and your water
        bottle against the world".`, "fa-tint", "\f043"),
    _createSpeciality("Music Enthusiast", `I know what you're thinking "But everybody likes music!", and
        you're right. I'm not even going to try and say that I like it more than the average person. But
        have been to Beyonce and The weeknd's concerte in the same month so I will bring that up any 
        chance I get and you just have to accept it beacuse it's my website and I make the rules.`, 
        "fa-music", "\f001")
        
]

const gProjects = [
    _createProject("Parks And Recreation", "NBC's 2009 sitcom - 7 seasons of pure joy",`So i really think
        that this is the best thing I've ever seen. All characters are hilarious and the wild misogyny that
        Leslie encounters throughout her politic careers is from the one hand obviously an exaggeration but 
        from the other makes you think "but it's somethimes kind of like that". `,
        ['Comedy', 'Poletics', 'Sitcom', 'The Office'], ["img/portfolio/parks-and-rec.jpeg"], "parksAndRec"),
    _createProject("Stanley Cup", "The look of a glass and the volume of a well - Extremely expensive",
        `I'm just gonna say it. I don't like Stanley cups. It's just gross that the straw is just
        standing there all day long, uncovered, and then you put it in your mouth. When did
        we stop being scared to catch Herpes? There's literally nothing worse than having that straw
        being brushed against the furry padding of public transportation seats. YIKES!`,
        ['Bottels', 'Trends', 'Stanley'], ["img/portfolio/stanley.jpeg"], "stanleyCup"),
    _createProject("Beyonce", "The Rainessance World Tour opening night in Stockholm - 1000000000/10",
        `Obviously, the ROI is insane. These are the best 1500 or so NIS I've ever spent. From start
        to finish everything was incredible. I don't think I blinked even once from fear of missing even
        a millisecond. It was nothing shy of perfection and I cried actual tears when the day we landed 
        when I sat down to catch up on some homework and realized where I'd been.`, ['Music', 'Godess',
        'Beyonce'], ["img/portfolio/fan-me-off.jpg"], "Beyonce"),
    _createProject("The Weeknd", "After Hours Til Dawn Tour in Amsterdam - 10000000000/10",
        `One day Teddy called me and said that The Weeknd is going on tour and we should go. I said yes
        immediately. I already spent around 1500 dollar on Beyonce tickets but YOLO. That was the best
        decision I could have made. The concrete was phenomenal. We did our homework and knew all the
        words to every song, we bought standing tickets but didn't squeeze ourselves to stand close too 
        the stage so we could go crazy, and we did. It was a cardio workout, I lost my voice afterwards,
        so you know it was perfect.`, ["Music", "The Weeknd", "Amsterdam"], ["img/portfolio/the-weeknd.jpg", "img/portfolio/02-full.jpg", "img/portfolio/03-full.jpg", "img/portfolio/05-full.jpg"],
        "theWeeknd"),
    _createProject("Tap water", "Comprehensive review of tap water quality",
        `There are people more sensitive than me when it comes to water quality but there are some places
        that i have to speak up about. First, and mostly because it's just being stabbed in the back, the
        tap water at my grandparents' home. Abseloutley disgusting. They recently moved to this house so in
        this aspect it's a total upgrade, but They've also noticed somethings off with the tap water because
        they always keep mineral water at home as well. No shade but these people drink Tela and enjoy so I
        think it speaks volume. In the picture - body of water which I believe tastes exactly like the 
        aforementioned tap water, Rome, Italy.`, ["Beverage", "Water", "Review"], ["img/portfolio/rome-river.jpg", "img/portfolio/03-full.jpg"],
        "tapWater"),
    _createProject("Some coffee", "A new speciality!\n", 
        `To be honest, I cant really tell between good and mediocre coffee. But I *am* addicted to Cappucino
        with oat milk (or cold coffee if it's too hot). AIn the picture - a nice, overpriced cup of coffee that
        I was willing to pay good money for because, well, addiction.`, ["Beverage", "Coffee", "Milk"],
        ["img/portfolio/coffee.jpg", "img/portfolio/01-full.jpg", "img/portfolio/02-full.jpg"], "someCoffee")
]

function _createSpeciality(name, desc, faName, faCode){
    return {name, desc, faName, faCode}
}

function _createProject(name, title, desc, categories, imgs, modalName){
    return {name, title, desc, categories, imgs, modalName}
}
function getSpecialties(){
    return gSpecialties
}

function getProjects(){
    return gProjects
}

function getFirstImgs(){
    return gProjects.reduce((firsts, project) => {
        firsts.push(project.imgs[0])
        return firsts}, [])
}