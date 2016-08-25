var PERSONAL_INFORMATIONS = {
    data: {
        '0': {
            short: "Hi! My name is Kamil and I'm web developer. Java (Spring, Spring Boot), .NET (asp.net MVC 5, asp.net core), JavaScript, but I prefer to work with frontend. I'm an emacs user. I'm gnu/linux user since 2011, favourite distro today: Arch Linux. Run peronal-informations with --all or -a option to view all personal informations.",
            full: "Hi! My name is Kamil and I'm web developer. My main technologies are Java (Spring, Spring Boot), .NET (asp.net MVC 5 and asp.net core) and JavaScript (AngularJS, elemenmtary Vue.js and React), but I prefer to work with frontend. I'm always happy when I can learn something new. Lately I'm trying my best with functional programming, especially Clojure and Lisps (Haskell and Scala in plans). I'm an emacs user, I totally belive that emacs is best editor available for developer. First I tried Vim (before Vim Sublime Text 2 and 3, Brackets, Light Table) and it's great editor... but emacs is better :P I'm gnu/linux user since 2011, favourite distro today: Arch Linux."
        }
    },
    toString: function(displayAll) {
        if(displayAll)
            return PERSONAL_INFORMATIONS.data[0].full;
        else
            return PERSONAL_INFORMATIONS.data[0].short;
    }
};
